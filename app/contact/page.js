import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">聯絡我們</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">姓名</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">電子郵件</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">訊息</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          發送
        </button>
      </form>
    </div>
  );
}