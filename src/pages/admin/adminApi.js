// Admin Panel API helper
const API_BASE = (import.meta.env.VITE_ADMIN_API_BASE || '').replace(/\/?$/, '/');

export const getToken = () => localStorage.getItem('ne_admin_token');
export const getUsername = () => localStorage.getItem('ne_admin_user');

export const adminLogin = async (username, password) => {
  const res = await fetch(`${API_BASE}auth.php?action=login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const processMailQueue = async () => {
    const res = await fetch(`${API_BASE}contacts.php?action=process_queue`, {
        method: 'POST',
        headers: authHeaders()
    });
    return res.json();
};

export const adminLogout = () => {
  localStorage.removeItem('ne_admin_token');
  localStorage.removeItem('ne_admin_user');
};

const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

export const fetchContacts = async ({ page = 1, status = '', search = '' } = {}) => {
  const params = new URLSearchParams({ action: 'list', page, status, search });
  const res = await fetch(`${API_BASE}contacts.php?${params}`, { headers: authHeaders() });
  return res.json();
};

export const fetchStats = async () => {
  const res = await fetch(`${API_BASE}contacts.php?action=stats`, { headers: authHeaders() });
  return res.json();
};

export const updateContactStatus = async (id, status) => {
  const res = await fetch(`${API_BASE}contacts.php?action=update_status`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ id, status }),
  });
  return res.json();
};

export const deleteContact = async (id) => {
  const res = await fetch(`${API_BASE}contacts.php?action=delete&id=${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
  return res.json();
};
