'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Login' : 'Register'} submitted`, formData);
    alert(`${isLogin ? 'Logged in' : 'Registered'} successfully!`);
    // Redirect to passenger dashboard later
  };

  return (
    <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>
        )}
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
        <button onClick={() => setIsLogin(!isLogin)} style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer' }}>
          {isLogin ? 'Register here' : 'Login here'}
        </button>
      </p>
    </div>
  );
}
