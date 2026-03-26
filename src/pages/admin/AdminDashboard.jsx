import React, { useState, useEffect, useCallback } from 'react';
import { fetchContacts, fetchStats, updateContactStatus, deleteContact, adminLogout, getUsername, processMailQueue } from './adminApi';

const STATUS_COLORS = {
  new:       { bg: '#EBF8FF', text: '#1A6FA0', border: '#BEE3F8', label: 'New' },
  responded: { bg: '#F0FFF4', text: '#276749', border: '#9AE6B4', label: 'Responded' },
  archived:  { bg: '#F7FAFC', text: '#718096', border: '#E2E8F0', label: 'Archived' },
};

const CHIP_STYLE = (color) => ({
  display: 'inline-block',
  background: color.bg,
  color: color.text,
  border: `1px solid ${color.border}`,
  borderRadius: '20px',
  padding: '2px 10px',
  fontSize: '11px',
  fontWeight: '700',
  whiteSpace: 'nowrap',
});

const S = {
  shell: {
    minHeight: '100vh',
    background: '#F0F5F7',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    display: 'flex',
    flexDirection: 'column',
  },
  topbar: {
    background: '#0B1A22',
    padding: '0 24px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoText: { display: 'flex', flexDirection: 'column' },
  topbarRight: { display: 'flex', alignItems: 'center', gap: '12px' },
  userBadge: {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '5px 12px',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '13px',
  },
  logoutBtn: {
    background: 'none',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '8px',
    padding: '5px 12px',
    color: 'rgba(255,255,255,0.65)',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  main: { padding: '28px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '24px' },
  statCard: (color) => ({
    background: '#fff',
    borderRadius: '14px',
    padding: '20px',
    borderLeft: `4px solid ${color}`,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  }),
  statLabel: { color: '#6B7A85', fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' },
  statValue: { color: '#1A2533', fontSize: '32px', fontWeight: '800', marginTop: '6px' },
  toolbar: {
    background: '#fff',
    borderRadius: '14px',
    padding: '14px 18px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  searchInput: {
    flex: 1,
    minWidth: '160px',
    border: '1px solid #DCE3E6',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '13px',
    outline: 'none',
    background: '#F8FAFB',
  },
  filterBtn: (active) => ({
    border: active ? '1.5px solid #078DA4' : '1.5px solid #DCE3E6',
    background: active ? '#EBF8FD' : '#fff',
    color: active ? '#078DA4' : '#5B707E',
    borderRadius: '20px',
    padding: '5px 14px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.15s',
  }),
  table: {
    width: '100%',
    background: '#fff',
    borderRadius: '14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    borderCollapse: 'collapse',
  },
  th: {
    background: '#F8FAFB',
    color: '#6B7A85',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    padding: '12px 16px',
    textAlign: 'left',
    borderBottom: '1px solid #EFF3F5',
  },
  td: {
    padding: '14px 16px',
    borderBottom: '1px solid #EFF3F5',
    fontSize: '13px',
    color: '#354653',
    verticalAlign: 'top',
  },
  actionBtn: (color) => ({
    border: `1px solid ${color}20`,
    background: `${color}10`,
    color: color,
    borderRadius: '6px',
    padding: '4px 9px',
    fontSize: '11px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.15s',
    marginRight: '4px',
  }),
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '8px',
    marginTop: '14px',
  },
  pageBtn: (active) => ({
    width: '32px', height: '32px',
    borderRadius: '8px',
    border: active ? 'none' : '1px solid #DCE3E6',
    background: active ? '#078DA4' : '#fff',
    color: active ? '#fff' : '#354653',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }),
};

// ── Contact Detail Modal ───────────────────────────────────────
function ContactModal({ contact, onClose, onStatusChange }) {
  if (!contact) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
    }} onClick={onClose}>
      <div style={{
        background: '#fff', borderRadius: '20px',
        maxWidth: '520px', width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ background: '#0B1A22', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '16px' }}>{contact.name}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '2px' }}>{contact.company}</div>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', width: '32px', height: '32px', color: '#fff', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        </div>
        {/* Body */}
        <div style={{ padding: '24px' }}>
          {[
            ['Phone', contact.phone],
            ['Email', contact.email || '—'],
            ['Product Interest', contact.product || '—'],
            ['Date', new Date(contact.created_at).toLocaleString('en-IN')],
            ['Status', <span style={CHIP_STYLE(STATUS_COLORS[contact.status])}>{STATUS_COLORS[contact.status].label}</span>],
          ].map(([label, val]) => (
            <div key={label} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: '1px solid #EFF3F5' }}>
              <div style={{ minWidth: '140px', color: '#6B7A85', fontSize: '12px', fontWeight: '600' }}>{label}</div>
              <div style={{ fontSize: '13px', color: '#354653', wordBreak: 'break-word' }}>{val}</div>
            </div>
          ))}
          {contact.message && (
            <div style={{ marginTop: '14px', background: '#F8FAFB', borderRadius: '10px', padding: '14px' }}>
              <div style={{ color: '#6B7A85', fontSize: '11px', fontWeight: '700', marginBottom: '6px' }}>MESSAGE</div>
              <div style={{ fontSize: '13px', color: '#354653', lineHeight: '1.6' }}>{contact.message}</div>
            </div>
          )}
        </div>
        {/* Actions */}
        <div style={{ padding: '16px 24px', background: '#F8FAFB', borderTop: '1px solid #EFF3F5', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['new', 'responded', 'archived'].map(s => (
            <button key={s} onClick={() => onStatusChange(contact.id, s)}
              style={{
                ...S.actionBtn(s === 'new' ? '#1A6FA0' : s === 'responded' ? '#276749' : '#718096'),
                padding: '7px 14px', fontSize: '12px',
                opacity: contact.status === s ? 0.4 : 1,
              }}>
              Mark {STATUS_COLORS[s].label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Dashboard ─────────────────────────────────────────────
export default function AdminDashboard({ onLogout }) {
  const [contacts, setContacts]     = useState([]);
  const [stats, setStats]           = useState(null);
  const [loading, setLoading]       = useState(true);
  const [page, setPage]             = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter]         = useState('');
  const [search, setSearch]         = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selected, setSelected]     = useState(null);
  const [toast, setToast]           = useState(null); // { message, type: 'success' | 'error' }
  const [processing, setProcessing] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const loadContacts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchContacts({ page, status: filter, search });
      if (data.success) {
        setContacts(data.data);
        setTotalPages(data.pages || 1);
        setTotalCount(data.total || 0);
      }
    } finally {
      setLoading(false);
    }
  }, [page, filter, search]);

  const loadStats = useCallback(async () => {
    const data = await fetchStats();
    if (data.success) setStats(data);
  }, []);

  useEffect(() => { loadContacts(); }, [loadContacts]);
  useEffect(() => { loadStats(); }, [loadStats]);

  const handleStatusChange = async (id, status) => {
    await updateContactStatus(id, status);
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    if (selected?.id === id) setSelected(prev => ({ ...prev, status }));
    loadStats();
    showToast('Status updated successfully', 'success');
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete inquiry from "${name}"? This cannot be undone.`)) return;
    await deleteContact(id);
    setContacts(prev => prev.filter(c => c.id !== id));
    setSelected(null);
    loadStats();
    showToast('Contact deleted', 'success');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const handleLogout = () => {
    adminLogout();
    onLogout();
  };

  const handleProcessQueue = async () => {
    setProcessing(true);
    try {
      const res = await processMailQueue();
      if (res.success) {
        showToast(`Queue processed: ${res.stats.sent} sent, ${res.stats.failed} failed.`, 'success');
        loadStats();
      } else {
        showToast(res.message || 'Error processing queue', 'error');
      }
    } catch (err) {
      showToast('Network error while processing queue', 'error');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div style={S.shell}>
      {/* Topbar */}
      <header style={S.topbar}>
        <div style={S.logo}>
          <img
            src="/nature organic energy.svg"
            alt="Nature Organic Energy"
            style={{ height: '36px', width: '36px', objectFit: 'contain' }}
          />
          <div style={S.logoText}>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '14px', lineHeight: 1 }}>Nature Organic</span>
            <span style={{ color: '#078DA4', fontWeight: '700', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '3px', lineHeight: 1 }}>Energy <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: '400', textTransform: 'none', letterSpacing: 0 }}>/ Admin</span></span>
          </div>
        </div>
        <div style={S.topbarRight}>
          <span style={S.userBadge}>{getUsername()}</span>
          <button style={S.logoutBtn} onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          background: toast.type === 'error' ? '#C0392B' : '#1A2533', 
          color: '#fff', borderRadius: '10px',
          padding: '12px 20px', fontSize: '13px', fontWeight: '600',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', gap: '10px',
          border: toast.type === 'error' ? 'none' : '1px solid rgba(255,255,255,0.1)',
          animation: 'fadeIn 0.2s ease',
        }}>
          {toast.message}
        </div>
      )}

      <div style={S.main}>
        {/* Page title */}
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{ fontWeight: '800', fontSize: '22px', color: '#1A2533', margin: 0 }}>Contact Inquiries</h1>
          <p style={{ color: '#6B7A85', fontSize: '13px', margin: '4px 0 0' }}>Manage and respond to all incoming leads</p>
        </div>

        {/* Stats */}
        {stats && (
          <div style={S.statsRow}>
            {[
              { label: 'Total', value: stats.total, color: '#5A6EA0' },
              { label: 'New',   value: stats.new,   color: '#078DA4' },
              { label: 'Responded', value: stats.responded, color: '#27AE60' },
              { label: 'Today', value: stats.today, color: '#F39C12' },
            ].map(s => (
              <div key={s.label} style={S.statCard(s.color)}>
                <div style={S.statLabel}>{s.label}</div>
                <div style={S.statValue}>{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Toolbar */}
        <div style={S.toolbar}>
          <form onSubmit={handleSearch} style={{ display: 'flex', flex: 1, gap: '8px', minWidth: '200px' }}>
            <input
              type="text"
              placeholder="Search by name, company, phone..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              style={S.searchInput}
            />
            <button type="submit" style={{ background: '#078DA4', border: 'none', borderRadius: '8px', padding: '8px 14px', color: '#fff', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>
              Search
            </button>
            {search && (
              <button type="button" onClick={() => { setSearch(''); setSearchInput(''); setPage(1); }} style={{ background: '#fff', border: '1px solid #DCE3E6', borderRadius: '8px', padding: '8px 12px', color: '#5B707E', fontSize: '12px', cursor: 'pointer' }}>
                Clear
              </button>
            )}
          </form>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {[['', 'All'], ['new', 'New'], ['responded', 'Responded'], ['archived', 'Archived']].map(([val, label]) => (
              <button key={val} onClick={() => { setFilter(val); setPage(1); }} style={S.filterBtn(filter === val)}>
                {label}
              </button>
            ))}
          </div>

          <button onClick={() => { loadContacts(); loadStats(); }} style={{ background: '#fff', border: '1px solid #DCE3E6', borderRadius: '8px', padding: '8px 12px', color: '#5B707E', fontSize: '12px', cursor: 'pointer' }}>
            ↻ Refresh
          </button>
          
          {stats?.pending_mails > 0 && (
            <button 
              onClick={handleProcessQueue} 
              disabled={processing}
              style={{ 
                background: '#078DA4', 
                border: 'none', 
                borderRadius: '8px', 
                padding: '8px 14px', 
                color: '#fff', 
                fontWeight: '700', 
                fontSize: '12px', 
                cursor: 'pointer',
                opacity: processing ? 0.7 : 1,
                boxShadow: '0 4px 12px rgba(7,141,164,0.2)'
              }}
            >
              {processing ? 'Processing...' : `Process Queue (${stats.pending_mails})`}
            </button>
          )}
        </div>

        {/* Table */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#6B7A85', fontSize: '14px' }}>Loading contacts...</div>
        ) : contacts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '14px', color: '#6B7A85', fontSize: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            No contacts found.
          </div>
        ) : (
          <>
            <div style={{ overflowX: 'auto', borderRadius: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <table style={S.table}>
                <thead>
                  <tr>
                    {['#', 'Name & Company', 'Phone / Email', 'Product', 'Status', 'Date', 'Actions'].map(h => (
                      <th key={h} style={S.th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(c => (
                    <tr key={c.id} style={{ transition: 'background 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#FAFCFD'}
                      onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                    >
                      <td style={{ ...S.td, color: '#9AAAB5', fontWeight: '600', width: '40px' }}>#{c.id}</td>
                      <td style={S.td}>
                        <div style={{ fontWeight: '600' }}>{c.name}</div>
                        <div style={{ color: '#6B7A85', fontSize: '12px', marginTop: '2px' }}>{c.company}</div>
                      </td>
                      <td style={S.td}>
                        <div>{c.phone}</div>
                        {c.email && <div style={{ color: '#6B7A85', fontSize: '12px', marginTop: '2px' }}>{c.email}</div>}
                      </td>
                      <td style={{ ...S.td, color: '#5B707E', maxWidth: '140px' }}>
                        <div style={{ fontSize: '12px' }}>{c.product || '—'}</div>
                      </td>
                      <td style={S.td}>
                        <span style={CHIP_STYLE(STATUS_COLORS[c.status])}>
                          {STATUS_COLORS[c.status].label}
                        </span>
                      </td>
                      <td style={{ ...S.td, color: '#6B7A85', fontSize: '12px', whiteSpace: 'nowrap' }}>
                        {new Date(c.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td style={S.td}>
                        <button style={S.actionBtn('#078DA4')} onClick={() => setSelected(c)}>View</button>
                        {c.status !== 'responded' && (
                          <button style={S.actionBtn('#27AE60')} onClick={() => handleStatusChange(c.id, 'responded')}>✓</button>
                        )}
                        <button style={S.actionBtn('#E74C3C')} onClick={() => handleDelete(c.id, c.name)}>✕</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Info & Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px',
              padding: '0 4px'
            }}>
              <div style={{ fontSize: '13px', color: '#6B7A85' }}>
                Showing <strong>{contacts.length > 0 ? (page - 1) * 15 + 1 : 0}</strong> to <strong>{Math.min(page * 15, totalCount)}</strong> of <strong>{totalCount}</strong> entries
              </div>

              {totalPages > 1 && (
                <div style={S.pagination}>
                  <button 
                    disabled={page === 1} 
                    onClick={() => setPage(p => p - 1)}
                    style={{ ...S.pageBtn(false), opacity: page === 1 ? 0.4 : 1, width: 'auto', padding: '0 12px' }}
                  >
                    Previous
                  </button>
                  
                  {(() => {
                    const pages = [];
                    const half = 2; // Show 2 pages before and after current
                    
                    for (let i = 1; i <= totalPages; i++) {
                      if (i === 1 || i === totalPages || (i >= page - half && i <= page + half)) {
                        pages.push(
                          <button 
                            key={i} 
                            onClick={() => setPage(i)} 
                            style={S.pageBtn(page === i)}
                          >
                            {i}
                          </button>
                        );
                      } else if (i === page - half - 1 || i === page + half + 1) {
                        pages.push(<span key={i} style={{ color: '#9AAAB5', padding: '0 4px' }}>...</span>);
                      }
                    }
                    return pages;
                  })()}

                  <button 
                    disabled={page === totalPages} 
                    onClick={() => setPage(p => p + 1)}
                    style={{ ...S.pageBtn(false), opacity: page === totalPages ? 0.4 : 1, width: 'auto', padding: '0 12px' }}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <ContactModal
          contact={selected}
          onClose={() => setSelected(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
