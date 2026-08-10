import Button from '../Button';

export default function FinalCtaSection() {
  return (
    <section className="section-card" id="final-cta">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Mulai Sekarang</p>
          <h2 className="section-heading">Siap Memulai Petualangan Teknologi?</h2>
          <p className="section-copy">
            Jelajahi program publik kami dan temukan bagaimana anak dapat belajar sambil menciptakan proyek teknologi nyata.
          </p>
        </div>
        <div className="flex items-center justify-start">
          <Button className="w-full min-w-[180px]">Jelajahi Program</Button>
        </div>
      </div>
    </section>
  );
}
