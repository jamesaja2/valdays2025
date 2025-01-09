import React, { useState } from 'react';
import ClassSelection from './components/ClassSelection';
import GradeSelection from './components/GradeSelection';
import BioPage from './components/BioPage';

export type Grade = 'X' | 'XI' | 'XII';

function App() {
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const handleReset = () => {
    setSelectedGrade(null);
    setSelectedClass(null);
  };

  return (
    <div className="min-h-screen bg-[#E56D6C] text-white">
      {/* Logo Header */}
      <div className="w-full bg-[#E56D6C] mb-8">
        <div className="max-w-[1920px] mx-auto px-4">
          <img 
            src="/logo.gif" 
            alt="Logo Animation" 
            className="w-full max-w-[700px] h-auto mx-auto object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-2xl mx-auto mb-24">
          {!selectedGrade && (
            <GradeSelection onSelect={setSelectedGrade} />
          )}
          
          {selectedGrade && !selectedClass && (
            <ClassSelection 
              grade={selectedGrade} 
              onSelect={setSelectedClass}
              onBack={handleReset}
            />
          )}
          
          {selectedGrade && selectedClass && (
            <BioPage 
              grade={selectedGrade}
              className={selectedClass}
              onBack={() => setSelectedClass(null)}
            />
          )}
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-[#F6E7E4] py-2 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <span className="text-[#E56D6C]">© Lantern of Love and Appreciation 2025</span>
            <a 
              href="https://github.com/jamesaja2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E56D6C] hover:text-[#E56D6C]/80 transition-colors"
            >
              Created by @jamesaja2
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;