'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [authType, setAuthType] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleAuth = () => {
    setAuthType(authType === 'login' ? 'register' : 'login');
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authType === 'register') {
      if (formData.password !== formData.confirmPassword) {
        alert('❌ Passwords do not match');
        return;
      }
      alert('✅ Registration successful!');
    } else {
      alert('✅ Login successful!');
    }

    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 capitalize">
          {authType === 'login' ? 'Login to your account' : 'Create an account'}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm text-blue-600"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {authType === 'register' && (
            <div className="relative mb-4">
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 text-sm text-blue-600"
              >
                {showConfirm ? 'Hide' : 'Show'}
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            {authType === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {authType === 'login'
            ? "Don't have an account?"
            : 'Already have an account?'}
          <button
            onClick={toggleAuth}
            className="ml-2 text-blue-600 hover:underline"
          >
            {authType === 'login' ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
