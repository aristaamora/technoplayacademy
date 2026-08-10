import type { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'junior',
    name: 'Junior',
    ageRange: '4–6 tahun',
    positioning: 'EXPLORE',
    focus: ['Coding Unplugged', 'Desain 2D', 'Kerja Tim'],
    description: 'Program pengantar untuk anak usia dini yang ingin mengeksplorasi kreativitas dan logika dasar melalui aktivitas bermain dan desain.'
  },
  {
    id: 'basic',
    name: 'Basic',
    ageRange: '7–9 tahun',
    positioning: 'BUILD',
    focus: ['Coding Unplugged', 'Mekanika', 'Desain 3D', 'Kerja Tim'],
    description: 'Program dasar untuk membangun keterampilan problem solving, mekanika, dan kreativitas desain bersama teman.'
  },
  {
    id: 'explorer',
    name: 'Explorer',
    ageRange: '10–14 tahun',
    positioning: 'CREATE',
    focus: ['Coding', 'Mekatronika', 'Robotika', 'Elektronika', 'Proyek', 'Desain 3D', 'Kerja Tim', 'Portofolio'],
    description: 'Program penerus untuk bereksperimen dengan coding, robotika, dan proyek nyata yang memperkuat portofolio anak.'
  }
];
