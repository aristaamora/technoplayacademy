import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/90 bg-deepNavy/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-lg font-semibold tracking-[0.02em] text-cyan sm:text-xl">
            Technoplay Academy
          </Link>
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
            Play, Create, Innovate
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200">
          <Link to="/" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-deepNavy">
            Beranda
          </Link>
          <Link to="/#program" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-deepNavy">
            Program
          </Link>
          <Link to="/about" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-deepNavy">
            About
          </Link>
          <Link to="/contact" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-deepNavy">
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
}
