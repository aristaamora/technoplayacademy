import type { Program } from '../../types';

const progressionMap: Record<string, string[]> = {
  junior: ['Explore', 'Play', 'Discover'],
  basic: ['Explore', 'Build', 'Test'],
  explorer: ['Explore', 'Design', 'Build', 'Test', 'Improve', 'Present']
};

export default function ProgramProgression({ program }: { program: Program }) {
  const steps = progressionMap[program.id] ?? ['Explore', 'Build', 'Create'];

  return (
    <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-6">
      <h3 className="text-xl font-semibold text-white">Progres Belajar</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-3xl border border-slate-700/60 bg-slate-900/90 p-4 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Langkah {index + 1}</p>
            <p className="mt-2 text-lg font-semibold text-white">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
