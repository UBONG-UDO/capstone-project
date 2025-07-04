'use client';

import { useState } from 'react';

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate success alert
    if (type === 'login') {
      alert('✅ Login successful!');
    } else {
      alert('✅ Registration successful!');
    }

    // Reset form
    setFormData({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center capitalize">{type}</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
}
