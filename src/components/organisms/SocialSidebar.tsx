import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-6 text-2xl text-blue-600">
      <a href="https://github.com/valentina" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/valentina" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialSidebar;