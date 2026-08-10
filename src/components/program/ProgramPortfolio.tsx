import type { Program } from '../../types';

export default function ProgramPortfolio({ program }: { program: Program }) {
  const isExplorer = program.id === 'explorer';

  return (
    <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{isExplorer ? 'Portofolio dan Output' : 'Hasil Belajar'}</h3>
        <p className="text-slate-300">
          {isExplorer
            ? 'Explorer mendukung pengembangan portofolio melalui proyek teknologi nyata yang dapat ditampilkan dan dikomunikasikan.'
            : 'Siswa menghasilkan kreasi dan proyek sederhana yang menunjukkan perkembangan kreativitas dan pemahaman teknologi.'}
        </p>
      </div>
    </div>
  );
}
