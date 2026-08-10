import type { Program } from '../../types';

const dotColorMap: Record<string, string> = {
  junior: 'bg-cyan',
  basic: 'bg-purple',
  explorer: 'bg-electricBlue'
};

export default function ProgramDetails({ program }: { program: Program }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-6">
        <h3 className="text-xl font-semibold text-white">Apa yang dipelajari</h3>
        <ul className="mt-5 space-y-3 text-slate-300">
          {program.focus.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${dotColorMap[program.id] ?? 'bg-cyan'}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-6">
        <h3 className="text-xl font-semibold text-white">Pengembangan Inti</h3>
        <ul className="mt-5 space-y-3 text-slate-300">
          {program.focus.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${dotColorMap[program.id] ?? 'bg-cyan'}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
