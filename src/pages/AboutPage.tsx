import Button from '../components/Button';

export default function AboutPage() {
  return (
    <section className="space-y-12 pb-20">
      <section className="section-card">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Play, Create, Innovate</p>
            <h1 className="section-heading">Teknologi mulai dari permainan dan berkembang menjadi proyek nyata.</h1>
            <p className="section-copy text-slate-300">
              Technoplay Academy adalah tempat belajar terintegrasi untuk coding, mekatronika, robotika, elektronika, dan desain 2D/3D. Di sini, siswa menemukan teknologi melalui eksplorasi, membangun ide lewat praktik, dan menciptakan karya yang bermakna.
            </p>
            <Button href="/#program">Jelajahi Program</Button>
          </div>
          <div className="rounded-[2rem] border border-cyan/10 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="section-heading">Identitas Pembelajaran</h2>
            <p className="mt-4 text-slate-300">
              Pendekatan kami bukan hanya mengajarkan satu disiplin. Ini adalah pengalaman teknologi yang menggabungkan logika, mekanika, desain, dan kerja tim.
            </p>
          </div>
        </div>
      </section>

      <section className="section-card" id="what-is">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Apa itu Technoplay Academy?</p>
          <h2 className="section-heading">Belajar teknologi dengan cara yang terhubung dan kreatif.</h2>
          <p className="section-copy text-slate-300">
            Technoplay Academy menggabungkan coding, mekatronika, robotika, elektronika, 2D desain, 3D desain, pembelajaran berbasis proyek, dan kerja tim dalam satu pengalaman yang menarik untuk anak-anak.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Coding',
              'Mekatronika',
              'Robotika',
              'Elektronika',
              'Desain 2D',
              'Desain 3D',
              'Proyek',
              'Kerja Tim'
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-700/70 bg-slate-950/85 p-5 text-slate-200">
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card" id="method">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Technoplay Method</p>
          <h2 className="section-heading">Explore → Build → Create</h2>
          <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-8">
            <div className="space-y-6">
              {[
                {
                  title: 'Explore',
                  description: 'Siswa menemukan teknologi melalui rasa ingin tahu, permainan, eksperimen, dan panduan awal.'
                },
                {
                  title: 'Build',
                  description: 'Siswa mulai mengubah ide menjadi kreasi nyata menggunakan coding, mekanika, elektronik, robotika, dan desain.'
                },
                {
                  title: 'Create',
                  description: 'Siswa menyatukan keterampilan untuk membangun proyek, memecahkan masalah, memperbaiki, dan membagikan hasilnya.'
                }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-700/70 bg-slate-900/90 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan">{item.title}</p>
                  <p className="mt-3 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-card" id="integrated">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Teknologi Terpadu</p>
            <h2 className="section-heading">Coding, Mekatronika, dan Desain bekerja bersama.</h2>
            <p className="section-copy text-slate-300">
              Di Technoplay, coding memberi otak logis, mekatronika memberi perangkat bergerak, dan desain memberi bentuk. Ketiganya bersatu dalam proyek yang nyata.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Coding', text: 'Logika, algoritma, dan interaksi digital.' },
              { title: 'Mekatronika', text: 'Sensor, aktuator, dan kontrol dalam proyek bergerak.' },
              { title: 'Desain', text: 'Ide visual dan 3D yang dilahirkan menjadi produk.' }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-700/70 bg-slate-950/85 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card" id="project-learning">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Pembelajaran Proyek</p>
          <h2 className="section-heading">Explore → Design → Build → Test → Improve → Present</h2>
          <p className="section-copy text-slate-300">
            Siswa mengikuti siklus belajar yang menekankan eksperimen, pembuatan, pengujian, dan perbaikan untuk menciptakan hasil nyata.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Explore', 'Design', 'Build', 'Test', 'Improve', 'Present'].map((step) => (
              <div key={step} className="rounded-3xl border border-slate-700/70 bg-slate-950/85 p-5">
                <p className="font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card" id="skills">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Keterampilan</p>
          <h2 className="section-heading">Keterampilan yang dikembangkan</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Berpikir logis',
              'Berpikir komputasional',
              'Kreativitas',
              'Pemecahan masalah',
              'Desain berpikir',
              'Kolaborasi',
              'Komunikasi',
              'Pengembangan proyek'
            ].map((skill) => (
              <div key={skill} className="rounded-3xl border border-slate-700/70 bg-slate-950/85 p-5 text-slate-200">
                <p className="font-semibold text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card" id="mindset">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Sikap Belajar</p>
            <h2 className="section-heading">Kesalahan dan eksperimen adalah bagian dari proses.</h2>
            <p className="section-copy text-slate-300">
              Di Technoplay Academy, setiap ide diuji dan diperbaiki. Kesalahan membantu siswa memahami teknologi lebih baik dan menjadi lebih percaya diri.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-8 text-slate-200">
            <p className="text-lg font-semibold text-white">Sikap yang didorong</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Berani mencoba</li>
              <li>• Tetap penasaran</li>
              <li>• Terbuka memperbaiki</li>
              <li>• Tumbuh lewat kerja sama</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-card" id="final-cta">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-cyan/20 bg-slate-950/90 p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Akhir</p>
            <h2 className="section-heading">Setiap ide bisa menjadi sebuah karya.</h2>
            <p className="mt-4 text-slate-300">
              Temukan bagaimana Junior, Basic, dan Explorer membantu siswa mengubah rasa ingin tahu menjadi proyek teknologi nyata.
            </p>
          </div>
          <Button href="/#program">Jelajahi Program</Button>
        </div>
      </section>
    </section>
  );
}
