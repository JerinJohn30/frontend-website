import React from 'react';
import { CogIcon, UserIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function MainContent() {

  const navigate = useNavigate();
  const handleScanRepo = () => {
    navigate('/code-review');
  };

  return (
    <div className="p-8 pt-20">
      <h2 className="text-4xl font-semibold text-gray-800 mb-2">Hello User 👋</h2>
      <p className="text-3xl font-medium text-gray-700 mb-10">Welcome to Peer Review System</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Cards */}
        <div className="space-y-6 relative">
          {/* Card 2: Benefits */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </li>
            </ul>
          </div>

          {/* Bottom user icon */}
          <div className="absolute -bottom-8 left-40 bg-blue-500 rounded-full p-4 text-white shadow-lg">
            <UserIcon className="h-8 w-8" />
          </div>

        </div>


        {/* Right Side: Description and Button */}
        <div className="space-y-6 pl-8">
          <p className="text-gray-600 leading-relaxed text-lg max-w-md">
          Review code with confidence. Leverage AI to scan repositories, enforce standards, and ensure compliance across GitHub, GitLab, Bitbucket and Azure DevOps—faster, smarter, and automatically.
          </p>
          <button className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300" onClick={handleScanRepo}>
            <CogIcon className="h-5 w-5 mr-2" />
            Scan Your First Repo
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;