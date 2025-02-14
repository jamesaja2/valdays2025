import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Grade } from '../App';
import { classLinks } from '../data/teachers';

interface Props {
  grade: Grade;
  className: string;
  onBack: () => void;
}

// Fallback links if class-specific links are not found
const defaultLinks = [
  { title: "WALI KELAS", url: "#" },
  { title: "PENGAJAR 1", url: "#" },
  { title: "PENGAJAR 2", url: "#" }
];

const BioPage: React.FC<Props> = ({ grade, className, onBack }) => {
  // Get class-specific links or fall back to default links
  const links = classLinks[grade]?.[className] || defaultLinks;

  return (
    <div className="text-center">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ArrowLeft size={24} className="text-[#F6E7E4]" />
      </button>

      <h2 className="text-3xl font-poppins text-[#F6E7E4] mb-8">
        {grade} {className}
      </h2>

      <div className="space-y-4 max-w-md mx-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#F6E7E4] hover:bg-[#F6E7E4]/90 transition-colors duration-200 
                     text-[#E56D6C] font-poppins py-4 px-6 rounded-lg relative"
          >
            {link.title}
            <ExternalLink className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#E56D6C]" size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BioPage;