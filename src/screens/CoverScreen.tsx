import type { PagePath, PortfolioData } from '../types/portfolio';

interface CoverScreenProps {
  data: PortfolioData;
  onChange: (updated: Partial<PortfolioData>) => void;
  onNavigate: (path: PagePath) => void;
}

export function CoverScreen({ data, onChange, onNavigate }: CoverScreenProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between px-margin lg:px-margin-desktop py-space-lg lg:py-space-xl overflow-hidden bg-surface">
        {/* Top Index & Volume Classification System */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md border-b border-architectural-hairline">
          <div className="flex items-center gap-space-lg">
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-primary tracking-widest">
              [ ISSUE 01 / 08 ]
            </span>
            <span className="w-1.5 h-1.5 bg-secondary" />
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest hidden sm:inline-block">
              ARCHIVAL FOLIO EDITION // PRINT RUN 2026.KOR
            </span>
          </div>
          <div className="flex items-center gap-space-md text-right">
            <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-muted-subtext">
              CORE DISCIPLINE:
            </span>
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-primary tracking-widest font-semibold">
              BX · CX · DX · ARTIFICIAL INTELLIGENCE
            </span>
          </div>
        </div>

        {/* Central Hero Composition */}
        <div className="my-auto py-space-xl lg:py-space-2xl flex flex-col relative">
          <div className="hidden sm:block absolute -top-6 left-0 font-label-mono-xs text-label-mono-xs text-muted-subtext select-none">
            + 37.5665° N / 126.9780° E
          </div>
          <div className="hidden sm:block absolute -top-6 right-0 font-label-mono-xs text-label-mono-xs text-muted-subtext select-none">
            [ REF. 2026-SP-CURATION ]
          </div>

          <div className="grid grid-cols-12 gap-gutter lg:gap-gutter-desktop items-baseline">
            {/* Giant Statement Layer */}
            <div className="col-span-12 lg:col-span-9 flex flex-col">
              <div className="overflow-hidden">
                <h1 className="font-display-xl text-display-xl-mobile sm:text-display-xl uppercase text-primary tracking-tighter leading-none select-none transition-transform duration-700 hover:translate-x-2">
                  PORTFOLIO
                </h1>
              </div>
              <div className="flex items-baseline justify-between flex-wrap gap-space-sm -mt-1 sm:-mt-2 lg:-mt-4">
                <span className="font-display-xl text-display-xl-mobile sm:text-display-xl text-primary tracking-tighter leading-none select-none">
                  2026
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-muted-subtext uppercase tracking-widest border border-architectural-hairline px-3 py-1 bg-surface-bright">
                  SELECTED MULTIDISCIPLINARY WORKS
                </span>
              </div>
            </div>

            {/* Vertical Sub-editorial Annotation */}
            <div className="col-span-12 lg:col-span-3 flex lg:flex-col justify-between items-start gap-space-md border-t lg:border-t-0 lg:border-l border-architectural-hairline pt-space-md lg:pt-0 lg:pl-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
                  IDENTITY SYSTEM
                </span>
                <span className="font-body-md text-body-md text-on-surface font-medium leading-snug">
                  Visual, Strategic &amp; Generative Direction
                </span>
              </div>
              <div className="hidden lg:flex flex-col gap-2 mt-auto pt-space-xl">
                <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
                  [ MANIFESTO ]
                </span>
                <p className="font-body-sm text-body-sm text-muted-subtext leading-relaxed">
                  Design disciplined by spatial rhythm, intentional negative space, and algorithmic interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Identity Blocks */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-gutter-desktop border-t border-architectural-hairline pt-space-lg items-end">
          {/* Meta Column 1: Korean Name Field */}
          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary" />
              <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
                CREATIVE PRINCIPAL / IDENTIFIER
              </span>
            </div>
            <div className="group flex items-baseline gap-space-sm border-b border-architectural-hairline pb-2 focus-within:border-primary transition-colors">
              <label
                className="font-body-md text-body-md text-primary font-medium shrink-0 select-none"
                htmlFor="portfolio-creator-name"
              >
                이름:
              </label>
              <input
                aria-label="Creator Name"
                className="w-full bg-transparent font-headline-md text-headline-md text-primary placeholder:text-muted-subtext placeholder:font-normal outline-none border-none p-0 tracking-tight"
                id="portfolio-creator-name"
                placeholder="[이름 입력]"
                type="text"
                value={data.creatorName}
                onChange={(e) => onChange({ creatorName: e.target.value })}
              />
            </div>
            <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext">
              01.01 — REGISTERED CREATOR NAME
            </span>
          </div>

          {/* Meta Column 2: Personal Statement Field */}
          <div className="md:col-span-5 flex flex-col gap-space-xs mt-space-md md:mt-0">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-architectural-hairline" />
              <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
                EDITORIAL STATEMENT / THOUGHT
              </span>
            </div>
            <div className="group flex items-baseline gap-space-sm border-b border-architectural-hairline pb-2 focus-within:border-primary transition-colors">
              <label
                className="font-body-md text-body-md text-primary font-medium shrink-0 select-none"
                htmlFor="portfolio-one-liner"
              >
                나를 표현하는 한 문장:
              </label>
              <input
                aria-label="One-liner statement"
                className="w-full bg-transparent font-body-lg text-body-lg text-primary placeholder:text-muted-subtext placeholder:font-normal outline-none border-none p-0 tracking-tight"
                id="portfolio-one-liner"
                placeholder="[추후 입력]"
                type="text"
                value={data.oneLiner}
                onChange={(e) => onChange({ oneLiner: e.target.value })}
              />
            </div>
            <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext">
              01.02 — PERSPECTIVE &amp; PHILOSOPHICAL POSITION
            </span>
          </div>

          {/* Meta Column 3: Forward Navigation CTA */}
          <div className="md:col-span-3 flex justify-start md:justify-end items-end mt-space-lg md:mt-0">
            <button
              type="button"
              onClick={() => onNavigate('about-me')}
              className="group w-full md:w-auto inline-flex items-center justify-between md:justify-end gap-space-md bg-primary text-on-primary px-space-md py-space-sm transition-all duration-300 hover:bg-secondary focus:outline-none cursor-pointer"
            >
              <div className="flex flex-col text-left">
                <span className="font-label-mono-xs text-label-mono-xs uppercase text-surface/70 group-hover:text-surface">
                  PROCEED SECTION
                </span>
                <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-widest font-semibold">
                  02 ABOUT ME
                </span>
              </div>
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1.5">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Editorial Footer Framing Coordinates */}
        <div className="w-full mt-space-lg pt-space-sm flex items-center justify-between text-muted-subtext font-label-mono-xs text-label-mono-xs border-t border-architectural-hairline/60">
          <div className="flex items-center gap-space-md">
            <span>GRID: 12-COL ASYMMETRIC</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-block">SPACE COORD: SEOUL / GLOBAL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
            <span className="uppercase tracking-widest text-primary">
              PORTFOLIO INDEX READY
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
