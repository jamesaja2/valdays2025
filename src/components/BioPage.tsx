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
      { title: "Lidia Kristanti, S.Pd.   (313)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjv6XVWj5x" },
      { title: "Gangsar Septa Putra Hidayanta, S.Psi   (458)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6B7awA9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567893" }
    ],
    'B': [
      { title: "V. Marie Prihatini, S.Pd.   (280)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/x5A7ark0E2q0Qwr6" },
      { title: "Gangsar Septa Putra Hidayanta, S.Psi   (458)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6B7awA9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'C': [
      { title: "Linda Juliarti, S.Pd., M.Si.   (232)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/wKmOZ5eLj4r0ZzMA" },
      { title: "Gangsar Septa Putra Hidayanta, S.Psi   (458)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6B7awA9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'D': [
      { title: "Dra. Sih Murni Sayekti   (318)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/jpoxaj35e7k7QbPE" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'E': [
      { title: "Drs. Budi Santoso   (248)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJjVl0aVAb" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'F': [
      { title: "Anastasia Rina Wiasdianti, S.Pd., M.Hum.   (276)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7EDdAWAg0" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'G': [
      { title: "Agustina Triwidiastuti, S.Pd.   (257)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/e9YpQNxY5MlXWxjM" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "hhttps://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'H': [
      { title: "Elisabeth Grani Larasati, S.Pd.   (434)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOLO4oWmq3" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'I': [
      { title: "P. Lilik Indriyani, S.Pd.   (256)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/O7A9QmBdEqw9Z6x3" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'J': [
      { title: "Monica Maria W. Setyorini, S.Pd., M.Hum.   (396)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7k7DAWAg0" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'K': [
      { title: "F.X. Novan Ali, ST.   (325)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEB6p3oaL6K" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],
    'L': [
      { title: "Yacubus Yogi Setiawan Putra, S.S.   (514)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6PeawA9" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "PENGAJAR 1", url: "https://wa.me/6281234567896" },
      { title: "PENGAJAR 2", url: "https://wa.me/6281234567897" }
    ],

  },
  XI: {
    'A1': [
      { title: "Antonius Widya Pranata, S.Pd.   (499)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/BJkrQADyLo6XaEge" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'A2': [
      { title: "Petrus Pamungkas E.P., S.Pd., M.SE.   (254)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJjVybaVAb" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'A3': [
      { title: "Andrea Nova Budi Nugraha, S.Pd.   (512)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOLM5OWmq3" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'A4': [
      { title: "Angela Dianita Trisnatiti, S.Pd.   (397)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/4b3zaM7APAvmZ2j7" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'A5': [
      { title: "Kunti Milisia Christi D. P., SH.   (377)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjXjM5Wj5x" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'B1': [
      { title: "Drs. Michael Aribowo, M.Si.   (229)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/e9YpQNxY5kY1WxjM" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'B2': [
      { title: "Lucia Harvianti, S.S.   (317)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Ae2Rav5Yx9kOWnz4" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'C1': [
      { title: "Anung Wicaksono, M.Pd.   (546)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lDK1ZRbnq5AXZJ9z" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'C2': [
      { title: "Rita Maria Tanti A.S., S.S.   (331)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/YBl3Z2zo8g87Zv16" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'D1': [
      { title: "Setya Nugroho, S.Pd.   (333)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/YDgnZeBGrGMyWwrA" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'D2': [
      { title: "Bambang Sumitro, S.Pd.   (261)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/O7A9QmBdEqmEZ6x3" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'E': [
      { title: "Dra. Ch. G. Rini Ratnawati   (218)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EYKZpgV" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
    'F': [
      { title: "Dra. Paulina Soesri Handajani   (316)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0Jq203awA9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6282234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6282234567893" }
    ],
  
  },
  XII: {
    'MIPA1': [
      { title: "Yohanna Muriasih, S.Pd.   (234)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOn8VrWmq3" },
      { title: "Gita Ananda, S.Psi.   (550)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkDVaKM9d3ozZPp9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA2': [
      { title: "Adinda Berlian Maharani, S.Sn.   (498)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6zqawA9" },
      { title: "Gita Ananda, S.Psi.   (550)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkDVaKM9d3ozZPp9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA3': [
      { title: "Irmina Indiyarti, S.Pd.   (262)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KmpGGWO98" },
      { title: "Gita Ananda, S.Psi.   (550)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkDVaKM9d3ozZPp9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA4': [
      { title: "Y. Hari Suyanto, S.Pd., M.Si.   (258)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/x5A7ark0E26DQwr6" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA5': [
      { title: "F.Widodo Setyo Budi, S.S.   (330)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/NvylWE0d234wZ0OX" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA6': [
      { title: "Tri Harjono, S.Pd.   (288)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJj3LXaVAb" },
      { title: "Yoana Maistri Nababan, S.Pd.   (555)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6gwawA9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA7': [
      { title: "Pratita Nindya Dyana, M.Pd.   (516)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/AL83WzDnKy77Q0Pg" },
      { title: "Yoana Maistri Nababan, S.Pd.   (555)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6gwawA9" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA8': [
      { title: "MG. Ika Yuliastuti, S.Pd.   (244)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalgbE9JlW0A1" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPA9': [
      { title: "Antonius Raharjo Yuwono, ST., M.Si.   (332)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/NvylWE0d7dwLZ0OX" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPS1': [
      { title: "Dra. Fransisca Herry Widiastuti   (236)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/94PGWnBDEA4oWLRV" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPS2': [
      { title: "MGV. Tri Yuli Praptiningsih, S.Pd.   (233)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkROZP5Mbn42WjMg" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
    'MIPS3': [
      { title: "MM. Sri Listyaningsih, S.Pd., MM.   (271)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/goElQyd2vJ64a3yY" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "PENGAJAR 1", url: "https://wa.me/6283234567892" },
      { title: "PENGAJAR 2", url: "https://wa.me/6283234567893" }
    ],
  }
};

// Fallback links if class-specific links are not found
const defaultLinks: LinkItem[] = [
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