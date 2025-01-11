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
      { title: "Dra. Maria Viciati, MM.   (245)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOnY2OWmq3" },
      { title: "Abraham Partogi Pardamean Tambunan, M.Sosio.   (1471)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rprjZ6bl" }
    ],
    'B': [
      { title: "V. Marie Prihatini, S.Pd.   (280)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/x5A7ark0E2q0Qwr6" },
      { title: "Gangsar Septa Putra Hidayanta, S.Psi   (458)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6B7awA9" },
      { title: "Anna Suryani, drh.   (731)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEBLxXwaL6K" },
      { title: "Ezra Marsudhi Rakhmad Kristya, S.Pd.   (1438)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjX8wjWj5x" }
    ],
    'C': [
      { title: "Linda Juliarti, S.Pd., M.Si.   (232)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/wKmOZ5eLj4r0ZzMA" },
      { title: "Gangsar Septa Putra Hidayanta, S.Psi   (458)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6B7awA9" },
      { title: "Abraham Partogi Pardamean Tambunan, M.Sosio.   (1471)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rprjZ6bl" },
      { title: "Monica Lonita W., SH., M.Kn.   (732)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/yEPVZkGvrXoDZb0Y" }
    ],
    'D': [
      { title: "Dra. Sih Murni Sayekti   (318)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/jpoxaj35e7k7QbPE" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "Anna Suryani, drh.   (731)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEBLxXwaL6K" },
      { title: "Tjioe Sing Fuk, S.Kom., MCE., MCF.   (515)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEBLnkoaL6K" }
    ],
    'E': [
      { title: "Drs. Budi Santoso   (248)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJjVl0aVAb" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "Maya Angelica Sashanty, S.Pd.   (1475)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zL7pwZpgV" },
      { title: "Bima Rafaela Dharma, S.KM.   (1443)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/4b3zaM7APJOlZ2j7" }
    ],
    'F': [
      { title: "Anastasia Rina Wiasdianti, S.Pd., M.Hum.   (276)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7EDdAWAg0" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "Marietta Natalia Irene, S.Hum.   (1478)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rpRDZ6bl" },
      { title: "Diyah Lestari, S.Pd.   (1474)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Ae2Rav5YMwkzWnz4" }
    ],
    'G': [
      { title: "Agustina Triwidiastuti, S.Pd.   (257)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/e9YpQNxY5MlXWxjM" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "hhttps://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "Konti Harini, S.Hum.   (1479)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/x5m7aoBPwD1wWkAV" },
      { title: "Maya Angelica Sashanty, S.Pd.   (1475)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zL7pwZpgV" }
    ],
    'H': [
      { title: "Elisabeth Grani Larasati, S.Pd.   (434)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOLO4oWmq3" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "Maria Novita Gandut, S.Pd.   (1437)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Xb8YaL2qDzR6Zyn1" },
      { title: "Monica Lonita W., SH., M.Kn.   (732)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/yEPVZkGvrXoDZb0Y" }
    ],
    'I': [
      { title: "P. Lilik Indriyani, S.Pd.   (256)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/O7A9QmBdEqw9Z6x3" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "F. Asisi Subono, S.Si., M.Kes.   (231)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/yEPVZkGvEq3bZb0Y" },
      { title: "Bima Rafaela Dharma, S.KM.   (1443)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/4b3zaM7APJOlZ2j7" }
    ],
    'J': [
      { title: "Monica Maria W. Setyorini, S.Pd., M.Hum.   (396)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7k7DAWAg0" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "Go Evelin, S.Pd   (5052)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJxzzlaVAb" },
      { title: "Diyah Lestari, S.Pd.   (1474)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Ae2Rav5YMwkzWnz4" }
    ],
    'K': [
      { title: "F.X. Novan Ali, ST.   (325)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEB6p3oaL6K" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "Tjioe Sing Fuk, S.Kom., MCE., MCF.   (515)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEBLnkoaL6K" },
      { title: "Marietta Natalia Irene, S.Hum.   (1478)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rpRDZ6bl" }
    ],
    'L': [
      { title: "Yacubus Yogi Setiawan Putra, S.S.   (514)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6PeawA9" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "Go Evelin, S.Pd   (5052)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJxzzlaVAb" },
      { title: "Konti Harini, S.Hum.   (1479)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/x5m7aoBPwD1wWkAV" }
    ],

  },
  XI: {
    'A1': [
      { title: "Antonius Widya Pranata, S.Pd.   (499)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/BJkrQADyLo6XaEge" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Yuliana Ines Arias Tarigas, S.Pd.   (1477)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEBL4GwaL6K" },
      { title: "Indra Budi Harvianto, S.Kom.   (1126)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalgbV06rW0A1" }
    ],
    'A2': [
      { title: "Petrus Pamungkas E.P., S.Pd., M.SE.   (254)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJjVybaVAb" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Suwito Suryomulyono L., S.TP.MM.   (5013)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/1xkVaqBXJ0xbQl0e" },
      { title: "Patricia Laras Hermawati, S.Pd.   (1415)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/YDgnZeBGrvGrWwrA" }
    ],
    'A3': [
      { title: "Andrea Nova Budi Nugraha, S.Pd.   (512)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOLM5OWmq3" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Patricia Laras Hermawati, S.Pd.   (1415)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/YDgnZeBGrvGrWwrA" },
      { title: "Yuliana Ines Arias Tarigas, S.Pd.   (1477)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/XGyBQbEBL4GwaL6K" }
    ],
    'A4': [
      { title: "Angela Dianita Trisnatiti, S.Pd.   (397)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/4b3zaM7APAvmZ2j7" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Elisabeth Adinda Sekar Suryaningsih, S.Pd.   (1476)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/O7A9QmBdr5yjZ6x3" },
      { title: "Michael Jurdan, S.Pd.   (1481)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/4b3zaM7APJdlZ2j7" }
    ],
    'A5': [
      { title: "Kunti Milisia Christi D. P., SH.   (377)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjXjM5Wj5x" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Leonardus Dimas Fernandatama, S.Pd.   (1473)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7klBlWAg0" },
      { title: "Michael Jurdan, S.Pd.   (1481)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/4b3zaM7APJdlZ2j7" }
    ],
    'B1': [
      { title: "Drs. Michael Aribowo, M.Si.   (229)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/e9YpQNxY5kY1WxjM" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Elisabeth Adinda Sekar Suryaningsih, S.Pd.   (1476)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/O7A9QmBdr5yjZ6x3" },
      { title: "Leonardus Dimas Fernandatama, S.Pd.   (1473)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7klBlWAg0" }
    ],
    'B2': [
      { title: "Lucia Harvianti, S.S.   (317)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Ae2Rav5Yx9kOWnz4" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "David Tjandra Nugraha, S.T.P., M.Sc.   (1472)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Xb8YaL2qDzBEZyn1" },
      { title: "Michael Jurdan, S.Pd.   (1481)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/4b3zaM7APJdlZ2j7" }
    ],
    'C1': [
      { title: "Anung Wicaksono, M.Pd.   (546)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lDK1ZRbnq5AXZJ9z" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Bonifasius Leoni Yudhistira, M.Hum.   (1442)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/wKmOZ5eLmrM0ZzMA" },
      { title: "David Tjandra Nugraha, S.T.P., M.Sc.   (1472)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Xb8YaL2qDzBEZyn1" }
    ],
    'C2': [
      { title: "Rita Maria Tanti A.S., S.S.   (331)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/YBl3Z2zo8g87Zv16" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "David Tjandra Nugraha, S.T.P., M.Sc.   (1472)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Xb8YaL2qDzBEZyn1" },
      { title: "Suwito Suryomulyono L., S.TP.MM.   (5013)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/1xkVaqBXJ0xbQl0e" }
    ],
    'D1': [
      { title: "Setya Nugroho, S.Pd.   (333)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/YDgnZeBGrGMyWwrA" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Alfonsa Dina Hestu Prabaningtyas, S.Pd.   (1480)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLVpBWO98" },
      { title: "Bonifasius Leoni Yudhistira, M.Hum.   (1442)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/wKmOZ5eLmrM0ZzMA" }
    ],
    'D2': [
      { title: "Bambang Sumitro, S.Pd.   (261)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/O7A9QmBdEqmEZ6x3" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Marcella Tiara Permata Hati, S.Pd.   (1441)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjX8NkWj5x" },
      { title: "Maria Novita Gandut, S.Pd.   (1437)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/Xb8YaL2qDzR6Zyn1" }
    ],
    'E': [
      { title: "Dra. Ch. G. Rini Ratnawati   (218)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EYKZpgV" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Marcella Tiara Permata Hati, S.Pd.   (1441)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjX8NkWj5x" },
      { title: "Indra Budi Harvianto, S.Kom.   (1126)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalgbV06rW0A1" }
    ],
    'F': [
      { title: "Dra. Paulina Soesri Handajani   (316)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0Jq203awA9" },
      { title: "Blasius Sotyoanggoro, S.Pd.   (207)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6z0EBrZpgV" },
      { title: "Ezra Marsudhi Rakhmad Kristya, S.Pd.   (1438)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjX8wjWj5x" },
      { title: "Maria Anita Kurniyasih, S.Si.   (378)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/BJkrQADy2JKgaEge" }
    ],
  
  },
  XII: {
    'MIPA1': [
      { title: "Yohanna Muriasih, S.Pd.   (234)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOn8VrWmq3" },
      { title: "Gita Ananda, S.Psi.   (550)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkDVaKM9d3ozZPp9" },
      { title: "Agnes Prasanna Murti Sri Pamungkas, S.Pd.   (553)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLXbNZGOq" },
      { title: "Dahlia Adiati, S.Pd.   (269)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB30g0lZ6bl" }
    ],
    'MIPA2': [
      { title: "Adinda Berlian Maharani, S.Sn.   (498)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6zqawA9" },
      { title: "Gita Ananda, S.Psi.   (550)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkDVaKM9d3ozZPp9" },
      { title: "Pelog Marsudi, S.Sn.   (497)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rwynZ6bl" },
      { title: "Maria Rochati, S.Pd., M.Si.   (242)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalg8OyplW0A1" }
    ],
    'MIPA3': [
      { title: "Irmina Indiyarti, S.Pd.   (262)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KmpGGWO98" },
      { title: "Gita Ananda, S.Psi.   (550)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkDVaKM9d3ozZPp9" },
      { title: "F. Asisi Subono, S.Si., M.Kes.   (231)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/yEPVZkGvEq3bZb0Y" },
      { title: "Yohanes Deni Kristianto, S.Pd.   (351)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/YBl3Z2zo8XDgZv16" }
    ],
    'MIPA4': [
      { title: "Y. Hari Suyanto, S.Pd., M.Si.   (258)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/x5A7ark0E26DQwr6" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "Maria Anita Kurniyasih, S.Si.   (378)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/BJkrQADy2JKgaEge" },
      { title: "Dra. Maria Viciati, MM.   (245)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/LNV1Q7eOnY2OWmq3" }
    ],
    'MIPA5': [
      { title: "F.Widodo Setyo Budi, S.S.   (330)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/NvylWE0d234wZ0OX" },
      { title: "Gabriella Querry, S.Psi   (1390)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLl29ZGOq" },
      { title: "Pelog Marsudi, S.Sn.   (497)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rwynZ6bl" },
      { title: "Maria Rochati, S.Pd., M.Si.   (242)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalg8OyplW0A1" }
    ],
    'MIPA6': [
      { title: "Tri Harjono, S.Pd.   (288)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E851Q0wJj3LXaVAb" },
      { title: "Yoana Maistri Nababan, S.Pd.   (555)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6gwawA9" },
      { title: "P. Eko Sugiharto, S.Si, M.Kes., MCE., CCE., MCF   (246)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/L8KjW9rlRKbEaJbv" },
      { title: "Maria Rochati, S.Pd., M.Si.   (242)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalg8OyplW0A1" }
    ],
    'MIPA7': [
      { title: "Pratita Nindya Dyana, M.Pd.   (516)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/AL83WzDnKy77Q0Pg" },
      { title: "Yoana Maistri Nababan, S.Pd.   (555)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/E1P8aX0JL6gwawA9" },
      { title: "P. Eko Sugiharto, S.Si, M.Kes., MCE., CCE., MCF   (246)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/L8KjW9rlRKbEaJbv" },
      { title: "Agnes Prasanna Murti Sri Pamungkas, S.Pd.   (553)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLXbNZGOq" }
    ],
    'MIPA8': [
      { title: "MG. Ika Yuliastuti, S.Pd.   (244)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/J24jalgbE9JlW0A1" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "Rasihul Arfian, S.Kom., M.Pd.   (1124)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7kdRkWAg0" },
      { title: "Agnes Prasanna Murti Sri Pamungkas, S.Pd.   (553)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/MxrmZY9RLXbNZGOq" }
    ],
    'MIPA9': [
      { title: "Antonius Raharjo Yuwono, ST., M.Si.   (332)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/NvylWE0d7dwLZ0OX" },
      { title: "Elsa Setyo Aji, S.Pd   (554)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/9kmlZV6zLD9nZpgV" },
      { title: "P. Eko Sugiharto, S.Si, M.Kes., MCE., CCE., MCF   (246)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/L8KjW9rlRKbEaJbv" },
      { title: "Pelog Marsudi, S.Sn.   (497)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rwynZ6bl" }
    ],
    'MIPS1': [
      { title: "Dra. Fransisca Herry Widiastuti   (236)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/94PGWnBDEA4oWLRV" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "Budi Sutrisno Atmadjaja, B.TCFL, M.TCSOL.   (5014)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjX84rWj5x" },
      { title: "Pelog Marsudi, S.Sn.   (497)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/R7dXadB3rwynZ6bl" }
    ],
    'MIPS2': [
      { title: "MGV. Tri Yuli Praptiningsih, S.Pd.   (233)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/lkROZP5Mbn42WjMg" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "Y. Heri Priyanto, S.Pd.   (300)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/wKmOZ5eLjqPrZzMA" },
      { title: "Rasihul Arfian, S.Kom., M.Pd.   (1124)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/KxJvagB7kdRkWAg0" }
    ],
    'MIPS3': [
      { title: "MM. Sri Listyaningsih, S.Pd., MM.   (271)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/goElQyd2vJ64a3yY" },
      { title: "Rikardus Ebed Suhartantiyo Febiano, S.Pd.   (459)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/zV61Q68KLj2AWO98" },
      { title: "Budi Sutrisno Atmadjaja, B.TCFL, M.TCSOL.   (5014)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/PVKBQOyjX84rWj5x" },
      { title: "Y. Heri Priyanto, S.Pd.   (300)", url: "https://padlet.com/lanternofloveandappreciation/list-guru-89w0amuhyx45gz7/wish/wKmOZ5eLjqPrZzMA" }
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