import React from 'react';
import { Grade } from '../App';

interface Props {
  onSelect: (grade: Grade) => void;
}

const GradeSelection: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-poppins text-[#F6E7E4] mb-8">
        CHOOSE YOUR CLASS!!
      </h2>
      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {(['X', 'XI', 'XII'] as Grade[]).map((grade) => (
          <button
            key={grade}
            onClick={() => onSelect(grade)}
            className="bg-[#F6E7E4] hover:bg-[#F6E7E4]/90 transition-colors duration-200 
                     text-[#E56D6C] font-poppins py-4 px-8 rounded-lg text-xl"
          >
            {grade}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GradeSelection;