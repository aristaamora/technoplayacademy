export default function ProjectLearning() {
  const phases = ['Eksperimen', 'Desain', 'Bangun', 'Uji', 'Perbaiki', 'Presentasi'];

  return (
    <section className="section-card" id="project-learning">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Pembelajaran Proyek</p>
          <h2 className="section-heading">Belajar lewat proyek nyata, bukan hanya teori.</h2>
          <p className="section-copy">
            Anak-anak belajar siklus kreatif teknologi: mulai dari eksperimen, desain, pembangunan, hingga presentasi hasil.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {phases.map((phase) => (
            <div key={phase} className="rounded-3xl border border-slate-700/70 bg-slate-950/85 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{phase}</p>
              <p className="mt-3 text-lg font-semibold text-white">{phase} dengan rasa ingin tahu</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
