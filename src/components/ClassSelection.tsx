import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Grade } from '../App';

interface Props {
  grade: Grade;
  onSelect: (className: string) => void;
  onBack: () => void;
}

const classData = {
  X: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
  XI: ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E', 'F'],
  XII: ['MIPA1', 'MIPA2', 'MIPA3', 'MIPA4', 'MIPA5', 'MIPA6', 'MIPA7', 'MIPA8', 'MIPA9', 'MIPS1', 'MIPS2', 'MIPS3']
};

const ClassSelection: React.FC<Props> = ({ grade, onSelect, onBack }) => {
  const classes = classData[grade];

  return (
    <div className="text-center">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ArrowLeft size={24} className="text-[#F6E7E4]" />
      </button>
      
      <h2 className="text-3xl font-poppins text-[#F6E7E4] mb-8">Select Your Class</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {classes.map((className) => (
          <button
            key={className}
            onClick={() => onSelect(className)}
            className="bg-[#F6E7E4] hover:bg-[#F6E7E4]/90 transition-colors duration-200 
                     text-[#E56D6C] font-poppins py-3 px-6 rounded-lg"
          >
            {className}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassSelection;