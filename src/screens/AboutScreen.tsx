import { useState } from 'react';
import type { PagePath, PortfolioData } from '../types/portfolio';

interface AboutScreenProps {
  data: PortfolioData;
  onChange: (updated: Partial<PortfolioData>) => void;
  onNavigate: (path: PagePath) => void;
}

export function AboutScreen({ data, onChange, onNavigate }: AboutScreenProps) {
  const [isEditingStatement, setIsEditingStatement] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Top Progress & Structural Context Line */}
      <div className="w-full px-margin lg:px-margin-desktop py-space-sm flex items-center justify-between text-muted-subtext font-label-mono-xs text-label-mono-xs tracking-widest uppercase">
        <div className="flex items-center gap-space-sm">
          <span className="inline-block w-1.5 h-1.5 bg-primary" />
          <span className="text-on-surface">FOLIO SPEC / 2026.1</span>
          <span className="text-muted-subtext">/</span>
          <span>SECTION STATEMENT</span>
        </div>
        <div className="hidden sm:flex items-center gap-space-lg text-muted-subtext">
          <span>LAT 37.5665° N · LON 126.9780° E</span>
          <span className="text-on-surface">P. 02 OF 08</span>
        </div>
      </div>

      {/* Primary Asymmetric Editorial Hero Canvas */}
      <section className="relative w-full px-margin lg:px-margin-desktop min-h-[calc(100vh-140px)] flex flex-col justify-between py-space-xl lg:py-space-2xl">
        {/* Editorial Index Anchor & Vertical Architectural Tag */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-baseline">
          <div className="lg:col-span-3 flex flex-col gap-space-xs">
            <span className="font-label-mono-sm text-label-mono-sm tracking-widest text-primary uppercase">
              [ 02 / ABOUT ME ]
            </span>
            <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase tracking-widest">
              MANIFESTO &amp; IDENTITY
            </span>
          </div>
          <div className="hidden lg:block lg:col-span-9 text-right">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
              ARCHITECTURAL CASEWORK · DISCIPLINARY CORE
            </span>
          </div>
        </div>

        {/* Centerpiece: High-Scale Monolithic Editorial Headline */}
        <div className="w-full my-auto py-space-xl lg:py-space-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-start">
            {/* Left Spatial Lead & Disciplines */}
            <div className="lg:col-span-3 flex flex-col justify-between h-full pt-2">
              <div className="space-y-space-sm">
                <div className="font-label-mono-xs text-label-mono-xs tracking-widest text-muted-subtext uppercase">
                  CORE DISCIPLINE MATRIX
                </div>
                <p className="font-label-mono-sm text-label-mono-sm text-on-surface tracking-wider uppercase leading-relaxed">
                  BX · CX · DX
                  <br />
                  AI EXPERIENCE
                </p>
              </div>
              <div className="mt-space-lg pt-space-md hidden lg:block">
                <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase tracking-widest block mb-space-xs">
                  TYPE SPEC
                </span>
                <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant">
                  SYNE BOLD / HANKEN GROTESK / SPACE MONO
                </span>
              </div>
            </div>

            {/* Right Focal Statement Lockup */}
            <div className="lg:col-span-9 flex flex-col justify-center">
              <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-secondary mb-space-sm">
                THESIS &amp; DIRECTION
              </span>
              <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-primary tracking-tight font-bold leading-none">
                자기소개 한 문장:
                <br className="hidden sm:inline" />{' '}
                {isEditingStatement ? (
                  <input
                    autoFocus
                    type="text"
                    value={data.oneLiner}
                    onChange={(e) => onChange({ oneLiner: e.target.value })}
                    onBlur={() => setIsEditingStatement(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setIsEditingStatement(false);
                    }}
                    placeholder="[추후 입력]"
                    className="mt-2 w-full bg-surface-container-low px-space-sm py-1 text-on-surface font-bold outline-none border-b-2 border-primary"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsEditingStatement(true)}
                    title="클릭하여 한 문장 입력"
                    className="text-left text-on-surface-variant font-medium underline decoration-1 underline-offset-8 decoration-outline-variant hover:text-primary transition-colors cursor-text"
                  >
                    {data.oneLiner.trim() ? data.oneLiner : '[추후 입력]'}
                  </button>
                )}
              </h1>
              <div className="mt-space-lg max-w-xl">
                <p className="font-body-lg text-body-lg text-muted-subtext font-light leading-relaxed">
                  Synthesizing boundary-pushing visual identity, human-centric spatial interaction, and generative artificial intelligence frameworks into clear, enduring digital architecture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Functional Anchor & Next Project Link */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-end pt-space-lg">
          {/* Coordinate Metadata Chips */}
          <div className="lg:col-span-4 flex flex-wrap items-center gap-space-xs">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest px-2 py-1 bg-surface-container-high text-on-surface">
              STATUS: EXPANDING
            </span>
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest px-2 py-1 bg-surface-container-low text-muted-subtext">
              EXP. 2020—2026
            </span>
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest px-2 py-1 bg-surface-container-low text-muted-subtext">
              SEOUL / GLOBAL
            </span>
          </div>

          {/* Center Subtle Philosophy Marker */}
          <div className="hidden lg:flex lg:col-span-4 justify-center">
            <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext tracking-widest uppercase">
              02 // EDITORIAL STATEMENT
            </span>
          </div>

          {/* Action: View Selected Works Navigation */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end mt-space-md lg:mt-0">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="group inline-flex items-center justify-between gap-space-md px-space-md py-space-sm bg-primary text-surface transition-all duration-300 hover:bg-secondary cursor-pointer"
            >
              <span className="font-label-mono-sm text-label-mono-sm tracking-widest uppercase text-surface">
                03 PROJECTS
              </span>
              <span className="font-label-mono-sm text-label-mono-sm tracking-widest uppercase text-surface/80 group-hover:text-surface">
                VIEW SELECTED WORKS
              </span>
              <span className="material-symbols-outlined text-surface text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
