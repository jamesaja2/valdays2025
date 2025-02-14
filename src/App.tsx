import React, { useState, useMemo } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import ClassSelection from './components/ClassSelection';
import GradeSelection from './components/GradeSelection';
import BioPage from './components/BioPage';
import { classLinks } from './data/teachers';

export type Grade = 'X' | 'XI' | 'XII';

interface Teacher {
  title: string;
  url: string;
  grade: string;
  class: string;
}

function App() {
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Create a flat array of all teachers with their grade and class info
  const allTeachers = useMemo(() => {
    const teachers: Teacher[] = [];
    Object.entries(classLinks).forEach(([grade, classes]) => {
      Object.entries(classes).forEach(([className, teacherList]) => {
        teacherList.forEach((teacher) => {
          teachers.push({
            ...teacher,
            grade,
            class: className,
          });
        });
      });
    });
    return teachers;
  }, []);

  // Filter teachers based on search query
  const filteredTeachers = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return allTeachers.filter(
      (teacher) =>
        teacher.title.toLowerCase().includes(query) ||
        teacher.grade.toLowerCase().includes(query) ||
        teacher.class.toLowerCase().includes(query)
    );
  }, [searchQuery, allTeachers]);

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
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, grade, or class..."
            className="w-full bg-[#F6E7E4] text-[#E56D6C] rounded-lg py-3 px-12 
                     placeholder:text-[#E56D6C]/60 focus:outline-none focus:ring-2 
                     focus:ring-[#F6E7E4]/50"
          />
          <Search
            size={20}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#E56D6C]"
          />
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="max-w-2xl mx-auto mb-8 space-y-4">
            {filteredTeachers.map((teacher, index) => (
              <a
                key={index}
                href={teacher.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#F6E7E4] hover:bg-[#F6E7E4]/90 transition-colors duration-200 
                         text-[#E56D6C] font-poppins py-4 px-6 rounded-lg relative text-left"
              >
                <div className="pr-8">
                  <div className="font-bold">{teacher.title}</div>
                  <div className="text-sm">
                    Grade {teacher.grade} - Class {teacher.class}
                  </div>
                </div>
                <ExternalLink
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#E56D6C]"
                  size={20}
                />
              </a>
            ))}
            {searchQuery && filteredTeachers.length === 0 && (
              <div className="text-[#F6E7E4] text-lg text-center">
                No teachers found matching your search.
              </div>
            )}
          </div>
        )}

        {/* Main Content */}
        {!searchQuery && (
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
        )}

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