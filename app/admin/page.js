'use client';

import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../lib/firebase'; // 确保这个路径指向您的 Firebase 配置文件
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        router.push('/update');
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      router.push('/update').catch((err) => console.error('Navigation failed:', err));
    } catch (err) {
      setError('登入失敗，請檢查您的郵箱和密碼');
      console.error(err);
    }
  };

  if (user) {
    return <div>正在跳轉...</div>; // 或者可以顯示一個加載指示器
  }

  return (
    <div className="p-4 h-screen flex flex-col justify-center items-center gap-4">
      <h4 className="text-2xl font-bold mb-4">Login as Jordan Wu</h4>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminPage;