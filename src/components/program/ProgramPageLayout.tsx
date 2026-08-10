import type { ReactNode } from 'react';

export default function ProgramPageLayout({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="space-y-10 pb-20">
      <div className="section-card">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan">Program Publik</p>
          <h1 className="section-heading">{title}</h1>
          <p className="section-copy text-slate-300">{description}</p>
        </div>
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}
