import { programs } from '../../data/programs';

export default function LearningJourney() {
  return (
    <section className="section-card" id="learning-journey">
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Perjalanan Belajar</p>
          <h2 className="section-heading">Langkah teknologi yang jelas untuk setiap usia.</h2>
        </div>

        <div className="space-y-6">
          {programs.map((program, index) => (
            <div key={program.id} className="rounded-[1.75rem] border border-slate-700/70 bg-slate-950/85 p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">{program.ageRange}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{program.name}</h3>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200">{program.positioning}</span>
              </div>
              <p className="mt-4 text-slate-300">
                {program.id === 'junior'
                  ? 'Jelajahi teknologi melalui permainan dan desain sederhana.'
                  : program.id === 'basic'
                  ? 'Bangun dasar mekanika, desain, dan kerja tim yang kuat.'
                  : 'Ciptakan proyek teknologi nyata dengan robotika dan elektronika.'}
              </p>
              {index < programs.length - 1 && (
                <div className="mt-5 flex items-center justify-center text-slate-400" aria-hidden="true">
                  <span className="text-3xl">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
