import type { Program } from '../../types';
import Button from '../Button';

const colorMap: Record<string, string> = {
  junior: 'text-cyan',
  basic: 'text-purple',
  explorer: 'text-electricBlue'
};

const accentMap: Record<string, string> = {
  junior: 'from-cyan/20 via-cyan/10 to-slate-950',
  basic: 'from-purple/20 via-purple/10 to-slate-950',
  explorer: 'from-electricBlue/20 via-electricBlue/10 to-slate-950'
};

export default function ProgramSection({ program }: { program: Program }) {
  return (
    <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <p className="uppercase tracking-[0.32em] text-slate-400">{program.ageRange}</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{program.name}</h2>
          <p className="text-slate-300">{program.description}</p>
          <div className={`rounded-[1.5rem] border border-slate-700/70 bg-gradient-to-br ${accentMap[program.id] ?? accentMap.explorer} p-4 text-slate-100`}>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Identitas Program</p>
            <p className={`mt-2 text-2xl font-semibold ${colorMap[program.id]}`}>{program.positioning}</p>
          </div>
        </div>
        <div className="space-y-3 rounded-[1.75rem] border border-slate-700/60 bg-white/5 p-5 text-slate-200">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Positioning</p>
          <p className={`text-2xl font-semibold ${colorMap[program.id] ?? 'text-electricBlue'}`}>{program.positioning}</p>
          <Button href="#program-cta" className="mt-4 w-full border-white/10 text-slate-100 hover:border-electricBlue/50">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  );
}
