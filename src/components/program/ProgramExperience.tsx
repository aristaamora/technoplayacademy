import type { Program } from '../../types';

export default function ProgramExperience({ program }: { program: Program }) {
  const description =
    program.id === 'junior'
      ? 'Siswa Junior belajar melalui permainan interaktif, eksperimen sederhana, dan aktivitas tim yang merangsang rasa penasaran.'
      : program.id === 'basic'
      ? 'Siswa Basic mengerjakan proyek mekanika dan desain, menguji ide, dan bekerja bersama dalam kelompok kecil.'
      : 'Siswa Explorer mengembangkan proyek robotika, elektronika, dan coding secara kolaboratif sambil menguji dan meningkatkan hasil.';

  return (
    <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft">
      <h3 className="text-xl font-semibold text-white">Pengalaman Belajar</h3>
      <p className="mt-4 text-slate-300">{description}</p>
      <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
        <li className="rounded-3xl border border-slate-700/60 bg-slate-900/90 p-4">Eksperimen langsung</li>
        <li className="rounded-3xl border border-slate-700/60 bg-slate-900/90 p-4">Kerja tim kreatif</li>
        <li className="rounded-3xl border border-slate-700/60 bg-slate-900/90 p-4">Proyek nyata</li>
        <li className="rounded-3xl border border-slate-700/60 bg-slate-900/90 p-4">Meningkatkan ide</li>
      </ul>
    </div>
  );
}
