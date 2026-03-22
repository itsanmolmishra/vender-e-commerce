import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { ChatBot } from './ChatBot';

export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ChatBot />
    </>
  );
}
