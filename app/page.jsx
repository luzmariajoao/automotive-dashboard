'use client';

import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      
      const data = await res.json();
      setResponse(data.response || data.error);
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <h1 style={{ color: '#0B2545', marginBottom: '10px' }}>
        🚗 EU Automotive Market Intelligence
      </h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        Real-time tracking of EU electric vehicle transition
      </p>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'linear-gradient(135deg, #0B2545 0%, #0F9B8E 100%)', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>13.27M</div>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>EU 2025 Registrations</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #0B2545 0%, #0F9B8E 100%)', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>17.4%</div>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>BEV Share</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #0B2545 0%, #0F9B8E 100%)', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>+2.4%</div>
          <div style={{ fontSize: '12px', marginTop: '5px' }}>YoY Growth</div>
        </div>
      </div>

      {/* Chat */}
      <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '12px', border: '1px solid #ddd' }}>
        <h2 style={{ color: '#0B2545', marginBottom: '20px' }}>💬 Ask Claude</h2>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
            placeholder="Ask about EU automotive market..."
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px'
            }}
          />
          <button
            onClick={handleAsk}
            disabled={loading}
            style={{
              padding: '12px 24px',
              background: '#0B2545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Loading...' : 'Ask'}
          </button>
        </div>

        {response && (
          <div style={{
            background: '#e8f5e9',
            border: '1px solid #4caf50',
            borderRadius: '6px',
            padding: '15px',
            color: '#2e7d32',
            lineHeight: '1.6'
          }}>
            {response}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: '40px', textAlign: 'center', color: '#999', fontSize: '12px' }}>
        <p>📊 Data: ACEA, JATO Dynamics | 🤖 Powered by Claude</p>
      </div>
    </div>
  );
}
