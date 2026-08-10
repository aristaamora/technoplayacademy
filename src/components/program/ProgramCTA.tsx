import Button from '../Button';

export default function ProgramCTA() {
  return (
    <section className="section-card" id="program-cta">
      <div className="flex flex-col gap-6 rounded-[2rem] border border-cyan/20 bg-slate-950/90 p-8 text-slate-200 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Aksi berikutnya</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Mulai Petualangan Teknologi</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Hubungi tim Technoplay Academy untuk mendiskusikan program Junior, Basic, atau Explorer dan pilih jalur yang tepat.
          </p>
        </div>
        <Button href="/#program" className="w-full min-w-[180px] sm:w-auto">
          Hubungi Kami
        </Button>
      </div>
    </section>
  );
}
