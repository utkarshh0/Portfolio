// src/App.tsx
import React from 'react';
import ThreeScene from './components/threeScene';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-gray-800">
      <div className="w-full h-full max-w-4xl rounded-lg shadow-lg bg-gray-900 p-4">
        <ThreeScene />
      </div>
    </div>
  );
};

export default App;
