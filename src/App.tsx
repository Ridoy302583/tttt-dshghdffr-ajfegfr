import React from 'react';
import WelcomeCard from './components/WelcomeCard';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <WelcomeCard />
      </div>
    </div>
  );
}

export default App;
