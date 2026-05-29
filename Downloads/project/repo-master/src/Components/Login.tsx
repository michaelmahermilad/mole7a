   import React, { useState, useRef, useEffect } from 'react';
import Themebutton from './Themebutton';
import Image from 'next/image';

function Login() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative flex items-center space-x-2">
      {/* User Image */}
      <Image
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="User"
        width={42}
        height={42}
        className=" rounded-full object-cover border"
      />
      {/* Arrow Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="color focus:outline-none "
         aria-label="Open menu"
      > <svg
          className={`  w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown Menu */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 top-12 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10 p-2 flex flex-col space-y-2"
        >
          <button className=" bg-white w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            Logout
          </button>
          <Themebutton />
        </div>
      )}
    </div>
  );
}

export default Login;