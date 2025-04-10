// app/admin/layout.js
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />
      <main style={{ flexGrow: 1, padding: '20px', marginLeft: '220px' }}>
        {children}
      </main>
    </div>
  );
}
