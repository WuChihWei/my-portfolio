"use client";

import { useState, useEffect } from 'react';
import { hommapData } from '../projects/hommap';
import { davincinData } from '../projects/davincin';
import { superfakeData } from '../projects/superfake';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const projectData = {
  hommap: hommapData,
  davincin: davincinData,
  superfake: superfakeData,
};

export default function UpdatePage() {
  const [selectedProject, setSelectedProject] = useState('');
  const [formData, setFormData] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setFormData(projectData[selectedProject]);
    }
  }, [selectedProject]);

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
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

  const handleImageUpload = (e, section, field, subField = null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            [field]: subField ? { ...prev[section][field], [subField]: reader.result } : reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNestedImageUpload = (e, section, field, index, imageField) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            [field]: prev[section][field].map((item, i) => 
              i === index ? { ...item, [imageField]: reader.result } : item
            )
          }
        }));
      };
      reader.readAsDataURL(file);
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
        </select>

        {selectedProject && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.entries(formData).map(([section, sectionData]) => (
              <div key={section} className="border p-4 rounded">
                <h2 className="text-xl font-semibold mb-4">{section}</h2>
                {Object.entries(sectionData).map(([field, value]) => 
                  renderField(section, field, value)
                )}
              </div>
            ))}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
}