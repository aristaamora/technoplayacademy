import type { Program } from '../types';
import { Link } from 'react-router-dom';

const colorMap: Record<string, string> = {
  junior: 'border-cyan/40 bg-cyan/10 text-cyan',
  basic: 'border-purple/40 bg-purple/10 text-purple',
  explorer: 'border-electricBlue/40 bg-electricBlue/10 text-electricBlue'
};

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/80 hover:bg-slate-900/95 focus-within:-translate-y-1">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className={`inline-flex rounded-full border px-3 py-1 text-[0.73rem] font-semibold uppercase tracking-[0.22em] ${colorMap[program.id] ?? 'border-electricBlue/40 text-electricBlue'}`}>
              {program.positioning}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{program.name}</h3>
          </div>
          <span className="rounded-full border border-slate-700/70 bg-white/5 px-3 py-1 text-sm text-slate-200">{program.ageRange}</span>
        </div>

        <p className="text-slate-300">{program.description}</p>

        <div className="flex flex-wrap gap-2">
          {program.focus.map((item) => (
            <span key={item} className="badge">
              {item}
            </span>
          ))}
        </div>

        <Link
          to={`/program/${program.id}`}
          className="btn btn-ghost mt-4 w-full border-white/10 text-slate-100 text-center hover:border-electricBlue/50"
        >
          Pelajari lebih lanjut
        </Link>
      </div>
    </article>
  );
}
