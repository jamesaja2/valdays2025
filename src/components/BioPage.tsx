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

// Links data organized by grade and class
const classLinks: Record<Grade, Record<string, LinkItem[]>> = {
  X: {
    'A': [
      { title: "WALI KELAS", url: "https://wa.me/6281234567890" },
      { title: "BK", url: "https://wa.me/6281234567891" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567893" }
    ],
    'B': [
      { title: "WALI KELAS", url: "https://wa.me/6281234567894" },
      { title: "BK", url: "https://wa.me/6281234567895" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    // Add entries for C through L with different links
  },
  XI: {
    'A1': [
      { title: "WALI KELAS", url: "https://wa.me/6282234567890" },
      { title: "BK", url: "https://wa.me/6282234567891" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    // Add entries for A2 through F with different links
  },
  XII: {
    'MIPA1': [
      { title: "WALI KELAS", url: "https://wa.me/6283234567890" },
      { title: "BK", url: "https://wa.me/6283234567891" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    // Add entries for MIPA2 through MIPS3 with different links
  }
};

// Fallback links if class-specific links are not found
const defaultLinks: LinkItem[] = [
  { title: "WALI KELAS", url: "https://wa.me/6281234567890" },
  { title: "BK", url: "https://wa.me/6281234567891" },
  { title: "PENGAJAR 1", url: "https://wa.me/6281234567892" },
  { title: "PENGAJAR 2", url: "https://wa.me/6281234567893" }
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