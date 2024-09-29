"use client";

import { useState, useEffect } from 'react';
import { hommapData } from '../projects/hommap';
import { davincinData } from '../projects/davincin';
import { superfakeData } from '../projects/superfake';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../lib/firebase';
import { auth } from '../../lib/firebase';
import { signInAnonymously } from 'firebase/auth';
import Image from 'next/image';

export default function UpdatePage() {
  const [selectedProject, setSelectedProject] = useState('');
  const [formData, setFormData] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [defaultImagesUploaded, setDefaultImagesUploaded] = useState(false);

  // 更新 projectData 對象，添加 resume 部分
  const projectData = {
    hommap: hommapData,
    davincin: davincinData,
    superfake: superfakeData,
    resume: {
      main: {
        resumeImage: '/JordanWu_CV.jpg',
      }
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setFormData(projectData[selectedProject]);
    }
  }, [selectedProject]);

  useEffect(() => {
    signInAnonymously(auth).catch(error => {
      console.error("Error signing in anonymously:", error);
    });
  }, []);

  const uploadDefaultImages = async () => {
    if (!selectedProject) {
      alert('Please select a project first.');
      return;
    }

    setIsUploading(true);
    try {
      const projectImages = projectData[selectedProject];
      for (const [section, sectionData] of Object.entries(projectImages)) {
        await uploadSectionImages(section, sectionData);
      }
      setDefaultImagesUploaded(true);
      alert('All default images uploaded successfully');
    } catch (error) {
      console.error('Error uploading default images:', error);
      alert('Error uploading default images. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const uploadSectionImages = async (section, sectionData) => {
    for (const [field, value] of Object.entries(sectionData)) {
      if (typeof value === 'string' && (field.toLowerCase().includes('image') || field.toLowerCase().includes('url'))) {
        await uploadImageIfNotExists(value, `${selectedProject}/${section}/${field}`);
      } else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          if (typeof value[i] === 'object') {
            for (const [subField, subValue] of Object.entries(value[i])) {
              if (typeof subValue === 'string' && (subField.toLowerCase().includes('image') || subField.toLowerCase().includes('url'))) {
                await uploadImageIfNotExists(subValue, `${selectedProject}/${section}/${field}/${i}/${subField}`);
              }
            }
          }
        }
      }
    }
  };

  const uploadImageIfNotExists = async (imageUrl, path) => {
    const storageRef = ref(storage, path);
    try {
      // Check if the image already exists
      await getDownloadURL(storageRef);
      console.log(`Image already exists at ${path}`);
    } catch (error) {
      if (error.code === 'storage/object-not-found') {
        // Image doesn't exist, upload it
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        console.log(`Uploaded default image to ${path}`);
      } else {
        console.error(`Error checking image at ${path}:`, error);
      }
    }
  };

  // 修改 handleProjectChange 函數
  const handleProjectChange = (e) => {
    const project = e.target.value;
    setSelectedProject(project);
    setDefaultImagesUploaded(false);

    if (project) {
      setFormData(projectData[project]);
    } else {
      setFormData({});
    }
  };

  const handleInputChange = (e, section, field, subField = null) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: subField ? { ...prev[section][field], [subField]: value } : value
      }
    }));
  };

  const handleArrayInputChange = (e, section, field, index, subField = null) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => 
          i === index 
            ? (subField 
                ? { ...item, [subField]: value }
                : (typeof item === 'string' ? value : { ...item, name: value }))
            : item
        )
      }
    }));
  };

  const uploadImageToFirebase = async (file, path) => {
    setUploadProgress(0);
    const storageRef = ref(storage, path);
    try {
      console.log('Starting upload for file:', file.name, 'to path:', path);
      const snapshot = await uploadBytes(storageRef, file);
      setUploadProgress(100);
      console.log('Upload completed:', snapshot);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('Download URL:', downloadURL);
      return downloadURL;
    } catch (error) {
      console.error('Error in uploadImageToFirebase:', error);
      setUploadProgress(null);
      throw error;
    }
  };

  const handleImageUpload = async (e, section, field, subField = null) => {
    const file = e.target.files[0];
    if (file) {
      try {
        console.log('File selected:', file.name);
        const path = `${selectedProject}/${section}/${field}${subField ? `/${subField}` : ''}/${file.name}`;
        console.log('Upload path:', path);
        const downloadURL = await uploadImageToFirebase(file, path);
        console.log('Upload successful, URL:', downloadURL);
        
        setFormData(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            [field]: subField ? { ...prev[section][field], [subField]: downloadURL } : downloadURL
          }
        }));
      } catch (error) {
        console.error('Error in handleImageUpload:', error);
        let errorMessage = 'Error uploading image. ';
        if (error.code) {
          errorMessage += `Error code: ${error.code}. `;
        }
        if (error.message) {
          errorMessage += `Error message: ${error.message}`;
        }
        alert(errorMessage);
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleNestedImageUpload = async (e, section, field, index, imageField) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const path = `${selectedProject}/${section}/${field}/${index}/${imageField}/${file.name}`;
        const downloadURL = await uploadImageToFirebase(file, path);
        
        setFormData(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            [field]: prev[section][field].map((item, i) => 
              i === index ? { ...item, [imageField]: downloadURL } : item
            )
          }
        }));
      } catch (error) {
        console.error('Error uploading nested image:', error);
        alert('Error uploading nested image. Please try again.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      const projectRef = doc(db, 'projects', selectedProject);
      
      console.log('Updating/Creating document:', selectedProject);
      console.log('Update data:', formData);

      // Use setDoc with merge option instead of updateDoc
      await setDoc(projectRef, formData, { merge: true });
      
      console.log('Document successfully updated/created');
      alert('Data updated successfully in Firebase!');
    } catch (error) {
      console.error('Error updating document:', error);
      let errorMessage = 'Error updating data. ';
      if (error.code) {
        errorMessage += `Error code: ${error.code}. `;
      }
      if (error.message) {
        errorMessage += `Error message: ${error.message}`;
      }
      alert(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const renderField = (section, field, value, parentField = null) => {
    if (field === 'cards' && Array.isArray(value)) {
      return (
        <div key={field} className="mb-4">
          <label className="block mb-2 font-bold">{field}</label>
          {value.map((card, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h3 className="font-bold mb-2">Card {index + 1}</h3>
              {Object.entries(card).map(([cardField, cardValue]) => (
                <div key={cardField} className="mb-2">
                  <label className="block mb-1">{`${cardField}`}</label>
                  {cardField === 'imageUrl' ? (
                    <div>
                      <input
                        type="file"
                        onChange={(e) => handleNestedImageUpload(e, section, field, index, cardField)}
                        className="w-full p-2 border rounded"
                        accept="image/*"
                      />
                      {cardValue && <img src={cardValue} alt={`Card ${index + 1}`} className="mt-2 max-w-xs" />}
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={cardValue}
                      onChange={(e) => handleArrayInputChange(e, section, field, index, cardField)}
                      className="w-full p-2 border rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    } else if (field.toLowerCase().includes('image') || field.toLowerCase().includes('url')) {
      return (
        <div key={field} className="mb-4">
          <label htmlFor={`${section}-${parentField ? `${parentField}-` : ''}${field}`} className="block mb-2 font-bold">
            {parentField ? `${parentField} - ${field}` : field}
          </label>
          <input
            type="file"
            id={`${section}-${parentField ? `${parentField}-` : ''}${field}`}
            onChange={(e) => handleImageUpload(e, section, parentField || field, parentField ? field : null)}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
          {value && <img src={value} alt={field} className="mt-2 max-w-xs" />}
        </div>
      );
    } else if (Array.isArray(value)) {
      return (
        <div key={field} className="mb-4">
          <label className="block mb-2 font-bold">{field}</label>
          {value.map((item, index) => (
            <div key={index} className="mb-2">
              {typeof item === 'string' ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleArrayInputChange(e, section, field, index)}
                  className="w-full p-2 border rounded"
                />
              ) : (
                Object.entries(item).map(([subField, subValue]) => (
                  <div key={subField} className="mb-2">
                    <label className="block mb-1">{`${field} ${index + 1} - ${subField}`}</label>
                    {subField.toLowerCase().includes('image') || subField.toLowerCase().includes('url') ? (
                      <div>
                        <input
                          type="file"
                          onChange={(e) => handleNestedImageUpload(e, section, field, index, subField)}
                          className="w-full p-2 border rounded"
                          accept="image/*"
                        />
                        {subValue && <img src={subValue} alt={`${field} ${index + 1}`} className="mt-2 max-w-xs" />}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={subValue}
                        onChange={(e) => handleArrayInputChange(e, section, field, index, subField)}
                        className="w-full p-2 border rounded"
                      />
                    )}
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      );
    } else if (typeof value === 'object' && value !== null) {
      return Object.entries(value).map(([subField, subValue]) => 
        renderField(section, subField, subValue, field)
      );
    } else if (field === 'statistics' && Array.isArray(value)) {
      return (
        <div key={field} className="mb-4">
          <label className="block mb-2 font-bold">{field}</label>
          {value.map((stat, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              <input
                type="number"
                value={stat.value}
                onChange={(e) => handleArrayInputChange(e, section, field, index, 'value')}
                className="w-full p-2 border rounded mb-2"
                placeholder="Value"
              />
              <input
                type="text"
                value={stat.label}
                onChange={(e) => handleArrayInputChange(e, section, field, index, 'label')}
                className="w-full p-2 border rounded"
                placeholder="Label"
              />
            </div>
          ))}
        </div>
      );
    } else if (field === 'features' && Array.isArray(value)) {
      return (
        <div key={field} className="mb-4">
          <label className="block mb-2 font-bold">{field}</label>
          {value.map((feature, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              {Object.entries(feature).map(([subField, subValue]) => (
                <div key={subField} className="mb-2">
                  <label className="block mb-1">{subField}</label>
                  <input
                    type={subField === 'icon' ? 'text' : 'number'}
                    value={subValue}
                    onChange={(e) => handleArrayInputChange(e, section, field, index, subField)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div key={field} className="mb-4">
          <label htmlFor={`${section}-${parentField ? `${parentField}-` : ''}${field}`} className="block mb-2 font-bold">
            {parentField ? `${parentField} - ${field}` : field}
          </label>
          <input
            type="text"
            id={`${section}-${parentField ? `${parentField}-` : ''}${field}`}
            value={value}
            onChange={(e) => handleInputChange(e, section, parentField || field, parentField ? field : null)}
            className="w-full p-2 border rounded"
          />
        </div>
      );
    }
  };

  return (
    <div className="min-h-[calc(100vh-280px)] my-5 bg-white relative">
      {isUploading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-lg font-semibold">Uploading...</p>
          </div>
        </div>
      )}
      <div className="container p-4 mx-auto h-full" style={{ maxWidth: '1440px' }}>
        <h1 className="text-4xl font-bold mb-8 mt-10">Update Project</h1>
        <select
          value={selectedProject}
          onChange={handleProjectChange}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Pick a project</option>
          <option value="hommap">Hommap</option>
          <option value="davincin">Davincin</option>
          <option value="superfake">Superfake</option>
          <option value="resume">Resume</option>
        </select>

        {selectedProject && (
          <>
            <button
              onClick={uploadDefaultImages}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-4"
              disabled={defaultImagesUploaded}
            >
              {defaultImagesUploaded ? 'Default Images Uploaded' : 'Upload Default Images'}
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              {selectedProject === 'resume' ? (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Resume</h2>
                  <div className="mb-4">
                    <label className="block mb-2">Resume Image</label>
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, 'main', 'resumeImage')}
                      className="w-full p-2 border rounded"
                    />
                    {formData.main && formData.main.resumeImage && (
                      <div className="mt-2 relative w-[210mm] h-[297mm]">
                        <Image
                          src={formData.main.resumeImage}
                          alt="Resume"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                Object.entries(formData).map(([section, sectionData]) => (
                  <div key={section} className="border p-4 rounded">
                    <h2 className="text-xl font-semibold mb-4">{section}</h2>
                    {Object.entries(sectionData).map(([field, value]) => 
                      renderField(section, field, value)
                    )}
                  </div>
                ))
              )}
              <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Update Project
              </button>
            </form>
          </>
        )}
      </div>
      {uploadProgress !== null && (
        <div className="mt-2">
          <progress value={uploadProgress} max="100"></progress>
          <p>{uploadProgress}% uploaded</p>
        </div>
      )}
    </div>
  );
}