import React, { useState, useMemo } from 'react';
import { ExternalLink, Search } from 'lucide-react';

interface Teacher {
  title: string;
  url: string;
}

// Import the class links data from BioPage
const classLinks = {
  X: {
    'A': [
      { title: "Lidia Kristanti, S.Pd.   (313)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjv6XVWj5x" },
      { title: "Gangsar Septa Putra Hidayanta, S.Psi   (458)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6B7awA9" },
      { title: "Dra. Maria Viciati, MM.   (245)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOnY2OWmq3" },
      { title: "Abraham Partogi Pardamean Tambunan, M.Sosio.   (1471)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rprjZ6bl" }
    ],
    // ... rest of X grade data
  },
  XI: {
    'A1': [
      { title: "Antonius Widya Pranata, S.Pd.   (499)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/BJkrQADyLo6XaEge" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Yuliana Ines Arias Tarigas, S.Pd.   (1477)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEBL4GwaL6K" },
      { title: "Indra Budi Harvianto, S.Kom.   (1126)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalgbV06rW0A1" }
    ],
    // ... rest of XI grade data
  },
  XII: {
    'MIPA1': [
      { title: "Yohanna Muriasih, S.Pd.   (234)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOn8VrWmq3" },
      { title: "Gita Ananda, S.Psi.   (550)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkDVaKM9d3ozZPp9" },
      { title: "Agnes Prasanna Murti Sri Pamungkas, S.Pd.   (553)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLXbNZGOq" },
      { title: "Dahlia Adiati, S.Pd.   (269)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB30g0lZ6bl" }
    ],
    // ... rest of XII grade data
  }
};

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Create a flat array of all teachers with their grade and class info
  const allTeachers = useMemo(() => {
    const teachers: Array<Teacher & { grade: string; class: string }> = [];
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
    if (!searchQuery) return allTeachers;
    const query = searchQuery.toLowerCase();
    return allTeachers.filter(
      (teacher) =>
        teacher.title.toLowerCase().includes(query) ||
        teacher.grade.toLowerCase().includes(query) ||
        teacher.class.toLowerCase().includes(query)
    );
  }, [searchQuery, allTeachers]);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-poppins text-[#F6E7E4] mb-8">
        SEARCH FOR YOUR TEACHER
      </h2>

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

      <div className="space-y-4">
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
        {filteredTeachers.length === 0 && (
          <div className="text-[#F6E7E4] text-lg">
            No teachers found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;