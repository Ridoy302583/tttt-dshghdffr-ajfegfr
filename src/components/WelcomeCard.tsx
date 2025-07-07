import React from 'react';

const WelcomeCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 border border-gray-100">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-lightning-charge-fill text-white text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">WebSparks AI</h1>
          <p className="text-gray-600 text-sm">Expert AI-Powered Full Stack Software Engineer</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <i className="bi bi-check-circle-fill"></i>
            <span className="text-sm">Development Environment Ready</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <i className="bi bi-code-slash"></i>
            <span className="text-sm">React + TypeScript + Tailwind CSS</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-purple-600">
            <i className="bi bi-rocket-takeoff"></i>
            <span className="text-sm">Production-Ready Architecture</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            Ready to create exceptional applications with modern UI/UX design, 
            responsive layouts, and professional-grade functionality.
          </p>
        </div>
        
        <div className="text-xs text-gray-500 flex items-center justify-center space-x-1">
          <i className="bi bi-lightning-fill text-blue-500"></i>
          <span>Powered by WebSparks AI</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
