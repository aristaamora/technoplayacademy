export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-deepNavy/95 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <p className="text-base font-semibold text-white">Technoplay Academy</p>
          <p className="text-sm text-slate-400">Belajar teknologi dan desain dengan cara yang menyenangkan.</p>
          <div className="space-y-1 text-sm text-slate-300">
            <p>WhatsApp: <a href="https://wa.me/6282211282024" className="text-cyan hover:text-white">0822-1128-2024</a></p>
            <p>Email: <a href="mailto:technoplayacademy@gmail.com" className="text-cyan hover:text-white">technoplayacademy@gmail.com</a></p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span>© {new Date().getFullYear()}</span>
          <span>Semua hak dilindungi</span>
          <span>Program publik 4–14 tahun</span>
        </div>
      </div>
    </footer>
  );
}
