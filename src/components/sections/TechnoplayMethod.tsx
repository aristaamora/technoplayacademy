import { programs } from '../../data/programs';

export default function TechnoplayMethod() {
  const methodSteps = programs.map((program) => ({
    title: program.positioning,
    label: program.name,
    age: program.ageRange,
    description:
      program.id === 'junior'
        ? 'Eksplorasi awal teknologi melalui permainan dan desain sederhana.'
        : program.id === 'basic'
        ? 'Membangun dasar kreativitas dan mekanika dengan proyek bersama.'
        : 'Menciptakan proyek teknologi nyata dengan coding, robotika, dan elektronik.'
  }));

  return (
    <section className="section-card" id="method">
      <div className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Metode Technoplay</p>
            <h2 className="section-heading">Jalur belajar yang jelas dari Explore ke Create.</h2>
          </div>
          <p className="max-w-xl text-base text-slate-300">
            Setiap level membawa anak dari eksplorasi ke pembangunan dan akhirnya ke penciptaan proyek teknologi.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {methodSteps.map((step, index) => (
            <div key={step.label} className="group rounded-[1.75rem] border border-slate-700/70 bg-slate-950/85 p-6 transition hover:border-cyan/60">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">{step.title}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{step.label}</h3>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200">{step.age}</span>
              </div>
              <p className="mt-4 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
