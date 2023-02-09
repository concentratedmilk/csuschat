import React from 'react';

export const TaskBar = () => (
  <nav className="bg-gray-900 text-white py-2 px-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <i className="fas fa-apple fa-2x mr-5"></i>
        <h1 className="text-2xl font-medium">CSUS Chat</h1>
      </div>
      <div className="flex items-center">
        <i className="fas fa-search fa-lg mr-5"></i>
        <i className="fas fa-bell fa-lg mr-5"></i>
        <i className="fas fa-user fa-lg"></i>
      </div>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 px-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <i className="fas fa-apple fa-lg mr-5"></i>
        <h2 className="text-lg font-medium">My Website</h2>
      </div>
      <div className="flex items-center">
        <i className="fas fa-info-circle fa-lg mr-5"></i>
        <i className="fas fa-cog fa-lg"></i>
      </div>
    </div>
  </footer>
);

