export default function WhyTechnoplay() {
  return (
    <section className="section-card" id="why-technoplay">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Mengapa Technoplay?</p>
          <h2 className="section-heading">Pendekatan belajar yang terintegrasi dan berbasis proyek.</h2>
          <p className="section-copy">
            Di Technoplay Academy, anak-anak tidak hanya mendengar teori. Mereka merancang, membangun, dan menguji teknologi bersama dalam suasana kreatif.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              label: 'Coding',
              text: 'Logika dan kreativitas menjadi dasar pembuatan aplikasi dan permainan.'
            },
            {
              label: 'Mekatronika',
              text: 'Sensor, aktuator, dan kontrol bergerak dalam proyek nyata.'
            },
            {
              label: 'Desain',
              text: '2D dan 3D digunakan untuk merancang ide sebelum dibangun.'
            },
            {
              label: 'Proyek',
              text: 'Setiap pelajaran berakhir dengan hasil yang bisa ditunjukkan.'
            }
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6">
              <h3 className="text-xl font-semibold text-white">{item.label}</h3>
              <p className="mt-3 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
