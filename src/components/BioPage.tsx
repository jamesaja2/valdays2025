import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Grade } from '../App';

interface Props {
  grade: Grade;
  className: string;
  onBack: () => void;
}

interface LinkItem {
  title: string;
  url: string;
}

const defaultLinks: LinkItem[] = [
  { title: "WALI KELAS", url: "#" },
  { title: "BK", url: "#" },
  { title: "PENGAJAR 1", url: "#" },
  { title: "PENGAJAR 2", url: "#" }
];

const BioPage: React.FC<Props> = ({ grade, className, onBack }) => {
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
        {defaultLinks.map((link, index) => (
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