import Button from '../Button';

export default function HeroSection() {
  return (
    <section className="section-card overflow-hidden bg-gradient-to-br from-slate-950/95 via-deepNavy/90 to-slate-950/95">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            Play, Create, Innovate
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Belajar teknologi dengan membuat proyek, bereksperimen, dan bermain.
          </h1>
          <p className="section-copy text-slate-300">
            Technoplay Academy menggabungkan coding, mekatronika, robotika, elektronika, dan desain 2D/3D dalam pengalaman belajar yang menyenangkan dan nyata.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#program" className="min-w-[180px]">Jelajahi Program</Button>
            <Button variant="ghost" className="min-w-[180px] border-white/10 text-slate-100 hover:border-electricBlue/50">
              Hubungi Kami
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan/10 bg-slate-950/90 p-6 shadow-soft sm:p-8">
          <div className="space-y-5">
            <div className="rounded-[1.75rem] bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan">Metode Terpadu</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Teknologi tidak hanya dipelajari, tetapi dibuat.</h2>
              <p className="mt-3 text-slate-300">
                Setiap anak mengerjakan proyek nyata yang menggabungkan ide, desain, dan teknologi dalam satu perjalanan pembelajaran.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Coding', 'Mekatronika', 'Robotika', 'Desain'].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-4 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item} Kreatif</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
