import React, { useState } from 'react';
import { adminLogin } from './adminApi';

export default function AdminLoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await adminLogin(username, password);
      if (res.success) {
        localStorage.setItem('ne_admin_token', res.token);
        localStorage.setItem('ne_admin_user', res.username);
        onLogin(res.username);
      } else {
        setError(res.message || 'Login failed.');
      }
    } catch {
      setError('Network error. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0B1A22 0%, #0D2233 50%, #062B35 100%)',
      fontFamily: "'Inter', sans-serif",
      padding: '20px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        padding: '40px 36px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img
            src="/nature organic energy.svg"
            alt="Nature Organic Energy"
            style={{ height: '64px', width: '64px', objectFit: 'contain', marginBottom: '14px', display: 'block', margin: '0 auto 14px' }}
          />
          <h1 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', margin: '0 0 3px', letterSpacing: '-0.3px' }}>
            Nature Organic Energy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Admin Panel
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px' }}>
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              placeholder="admin"
              style={{
                width: '100%', boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px' }}>
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: '100%', boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(231,76,60,0.15)',
              border: '1px solid rgba(231,76,60,0.3)',
              borderRadius: '10px',
              padding: '10px 14px',
              color: '#f87171',
              fontSize: '13px',
              marginBottom: '16px',
            }}>
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? 'rgba(7,141,164,0.5)' : 'linear-gradient(135deg, #078DA4, #066F82)',
              border: 'none',
              borderRadius: '10px',
              padding: '13px',
              color: '#fff',
              fontWeight: '700',
              fontSize: '14px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              boxShadow: loading ? 'none' : '0 6px 20px rgba(7,141,164,0.3)',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '12px', marginTop: '28px', marginBottom: 0 }}>
          Default: admin / password
        </p>
      </div>
    </div>
  );
}
