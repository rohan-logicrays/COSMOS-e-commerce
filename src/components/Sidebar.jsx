import React from 'react';

const Sidebar = () => {

  return (
    <div className="flex h-max right-0 text-white fixed top-16 fade-in-out">
      <nav className="w-1/4  p-4 ">
        <ul className="space-y-12 ">
          <li><a href="#" className="hover:border-l  hover:bg-slate-900 border-white p-2">Home</a></li>
          <li><a href="#" className="hover:border-l  hover:bg-slate-900 border-white p-2">About</a></li>
          <li><a href="#" className="hover:border-l  hover:bg-slate-900 border-white p-2">Services</a></li>
          <li><a href="#" className="hover:border-l  hover:bg-slate-900 border-white p-2">Contact</a></li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Sidebar;
