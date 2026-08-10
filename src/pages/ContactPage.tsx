import { contact } from '../data/contact';
import Button from '../components/Button';

export default function ContactPage() {
  return (
    <section className="space-y-12 pb-20">
      <section className="section-card">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Yuk, Mulai Petualangan Teknologi</p>
            <h1 className="section-heading">Tanyakan tentang program dan jadwal Technoplay Academy.</h1>
            <p className="section-copy text-slate-300">
              Hubungi kami lewat WhatsApp atau email untuk mempelajari lebih lanjut tentang Junior, Basic, dan Explorer.
            </p>
          </div>
          <div className="rounded-[2rem] border border-cyan/10 bg-slate-950/90 p-8 shadow-soft">
            <h2 className="section-heading">Siap bantu</h2>
            <p className="mt-4 text-slate-300">Kami siap menjawab pertanyaan tentang program, materi, dan pengalaman belajar.</p>
          </div>
        </div>
      </section>

      <section className="section-card" id="contact-options">
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-cyan/20 bg-slate-950/90 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">WhatsApp</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Chat via WhatsApp</h2>
            <p className="mt-4 text-slate-300">0822-1128-2024</p>
            <Button href={contact.whatsappUrl} className="mt-6 w-full" target="_blank" rel="noreferrer">
              Chat via WhatsApp
            </Button>
          </div>

          <div className="rounded-[2rem] border border-cyan/20 bg-slate-950/90 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Email</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Kirim Email</h2>
            <p className="mt-4 text-slate-300">{contact.email}</p>
            <Button href={contact.mailto} className="mt-6 w-full">
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      <section className="section-card" id="location">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Lokasi</p>
            <h2 className="section-heading">Temukan kami di Google Maps</h2>
            <p className="section-copy text-slate-300">
              Lokasi resmi Technoplay Academy tersedia melalui Google Maps. Buka peta untuk melihat lokasi secara langsung.
            </p>
            <Button href={contact.mapsUrl} className="mt-6" target="_blank" rel="noreferrer">
              Buka di Google Maps
            </Button>
          </div>
          <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-6 text-slate-300">
            <div className="aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-900/80">
              <div className="flex h-full items-center justify-center p-6 text-center text-slate-400">
                <p>Lokasi ditampilkan melalui Google Maps. Klik tombol untuk membuka lokasi resmi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card" id="final-cta">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-cyan/20 bg-slate-950/90 p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan">Masih punya pertanyaan?</p>
            <h2 className="section-heading">Hubungi kami untuk informasi lebih lanjut.</h2>
            <p className="mt-4 text-slate-300">
              Kami siap membantu memilih program Junior, Basic, atau Explorer yang sesuai.
            </p>
          </div>
          <Button href={contact.whatsappUrl} className="w-full sm:w-auto" target="_blank" rel="noreferrer">
            Chat via WhatsApp
          </Button>
        </div>
      </section>
    </section>
  );
}
