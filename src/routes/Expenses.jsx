import { Outlet, Link } from 'react-router-dom';

export default function Expenses() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Link to="/invoices">Invoices</Link> | <h2>Expenses</h2>
      <Outlet />
    </main>
  );
}
