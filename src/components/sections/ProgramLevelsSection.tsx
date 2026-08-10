import { programs } from '../../data/programs';
import ProgramCard from '../ProgramCard';

export default function ProgramLevelsSection() {
  return (
    <section id="program" className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Program Publik</p>
          <h2 className="section-heading">Level yang jelas untuk setiap langkah belajar.</h2>
        </div>
        <p className="max-w-xl text-base text-slate-300">
          Pilih antara Junior, Basic, dan Explorer untuk memulai pengalaman teknologi anak yang terarah dan kreatif.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}
