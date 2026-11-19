import type { ChangeEvent } from 'react';
import type {
  LightboxImage,
  PagePath,
  PortfolioData,
} from '../types/portfolio';
import { PortfolioImage } from '../components/PortfolioImage';

interface BxProjectScreenProps {
  data: PortfolioData;
  onChange: (updated: Partial<PortfolioData>) => void;
  onNavigate: (path: PagePath) => void;
  onOpenLightbox: (image: LightboxImage) => void;
}

export function BxProjectScreen({
  data,
  onChange,
  onNavigate,
  onOpenLightbox,
}: BxProjectScreenProps) {
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onChange({ bxImageUrl: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Navigation & Index Bar */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-md bg-surface-container-low flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="group flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface hover:text-secondary transition-colors cursor-pointer"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>03 PROJECTS</span>
          </button>
          <span className="text-muted-subtext font-label-mono-xs text-label-mono-xs">
            /
          </span>
          <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
            CASE STUDY ARCHIVE
          </span>
        </div>
        <div className="flex items-center gap-space-sm font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
          <span>SERIES INDEX</span>
          <span className="text-on-surface font-label-mono-sm text-label-mono-sm">
            [ 04 / 08 ]
          </span>
        </div>
      </section>

      {/* Editorial Header Unit */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <div className="inline-flex self-start px-space-xs py-0.5 bg-primary text-surface font-label-mono-xs text-label-mono-xs uppercase tracking-widest">
              BX PROJECT
            </div>
            <p className="font-label-mono-sm text-label-mono-sm text-muted-subtext uppercase tracking-wider">
              BRAND IDENTITY • DESIGN SYSTEM
            </p>
          </div>
          <div className="lg:col-span-9 flex flex-col gap-space-lg">
            <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-on-surface tracking-tighter">
              {data.bxTitle}
            </h1>
            <div className="w-full max-w-3xl">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {data.bxSynopsis}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spec Strip / Metadata Line */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-md bg-surface-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter font-label-mono-xs text-label-mono-xs uppercase">
          <div>
            <span className="text-muted-subtext block">DISCIPLINE</span>
            <span className="text-on-surface font-label-mono-sm text-label-mono-sm">
              BRAND STRATEGY &amp; IDENTITY
            </span>
          </div>
          <div>
            <span className="text-muted-subtext block">MY ROLE</span>
            <span className="text-on-surface font-label-mono-sm text-label-mono-sm">
              {data.bxRole}
            </span>
          </div>
          <div>
            <span className="text-muted-subtext block">TIMELINE</span>
            <span className="text-on-surface font-label-mono-sm text-label-mono-sm">
              2025 – 2026
            </span>
          </div>
          <div>
            <span className="text-muted-subtext block">STATUS</span>
            <span className="text-on-surface font-label-mono-sm text-label-mono-sm">
              {data.bxImageUrl ? 'ASSET LOADED' : 'DOCUMENTATION IN PROGRESS'}
            </span>
          </div>
        </div>
      </section>

      {/* Large 1-Image Showcase Hero Container */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface">
        {data.bxImageUrl ? (
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-surface-container-low overflow-hidden shadow-sm flex flex-col justify-between">
            <PortfolioImage
              src={data.bxImageUrl}
              alt={data.bxTitle}
              onClick={() =>
                onOpenLightbox({
                  src: data.bxImageUrl,
                  alt: data.bxTitle,
                  caption: `FIG 01.0 — ${data.bxTitle}`,
                })
              }
              className="w-full h-full object-cover cursor-zoom-in"
            />
            <div className="absolute bottom-space-md right-space-md flex items-center gap-space-xs">
              <label className="px-space-sm py-1 bg-primary text-surface font-label-mono-xs text-label-mono-xs uppercase tracking-wider cursor-pointer hover:bg-secondary transition-colors">
                REPLACE IMAGE
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-surface-container-low overflow-hidden shadow-sm flex flex-col justify-between p-space-md lg:p-space-lg">
            {/* Background Ambient Graphic Pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg
                className="w-full h-full text-outline"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,0 L100,100 M100,0 L0,100"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="2,4"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between w-full">
              <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext bg-surface px-space-xs py-1">
                FIGURE 01.0 — MAIN SHOWCASE
              </span>
              <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
                [1920 × 820 PX OPTIMAL]
              </span>
            </div>

            <div className="relative z-10 self-center text-center max-w-md py-space-lg">
              <label className="w-12 h-12 mx-auto mb-space-sm bg-surface-container-high flex items-center justify-center shadow-sm cursor-pointer hover:bg-primary hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-[22px]">
                  crop_original
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <div className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-xs">
                [대표 이미지 1개: 추후 업로드]
              </div>
              <p className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
                PRIMARY HERO VISUAL VIEWPORT • CLICK ICON TO UPLOAD
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between w-full font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
              <span>ASPECT RATIO 21:9 • FULL-WIDTH CONTAINER</span>
              <span className="text-on-surface">EDITION 2026 — BX ARCHIVE</span>
            </div>
          </div>
        )}
      </section>

      {/* Editorial Case Study Core Section */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface">
        <div className="flex items-center justify-between pb-space-lg mb-space-xl bg-surface">
          <div className="flex items-center gap-space-sm">
            <span className="w-2.5 h-2.5 bg-primary" />
            <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-widest text-on-surface">
              CASE STUDY FRAMEWORK
            </span>
          </div>
          <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
            STRUCTURED METHODOLOGY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
          {/* 01. 문제 발견 */}
          <div className="flex flex-col bg-surface-container-lowest p-space-lg shadow-sm relative group hover:bg-surface-container-low transition-colors duration-200">
            <div className="flex items-start justify-between mb-space-lg">
              <span className="font-display-xl text-display-xl text-surface-container-highest select-none leading-none">
                01
              </span>
              <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest px-space-xs py-0.5 bg-surface-container-high text-on-surface">
                DISCOVERY
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">
              1. 문제 발견
            </h2>
            <div className="flex-grow flex flex-col justify-between pt-space-sm">
              <div className="bg-surface-container-low p-space-md min-h-[140px] flex items-center justify-center text-center mb-space-md">
                <p className="font-body-md text-body-md text-muted-subtext italic">
                  {data.bxPhase1}
                </p>
              </div>
              <div className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-wider pt-space-xs">
                STAGE / PROBLEM DEFINITION &amp; PAIN POINTS
              </div>
            </div>
          </div>

          {/* 02. 조사 및 분석 */}
          <div className="flex flex-col bg-surface-container-lowest p-space-lg shadow-sm relative group hover:bg-surface-container-low transition-colors duration-200">
            <div className="flex items-start justify-between mb-space-lg">
              <span className="font-display-xl text-display-xl text-surface-container-highest select-none leading-none">
                02
              </span>
              <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest px-space-xs py-0.5 bg-surface-container-high text-on-surface">
                ANALYSIS
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">
              2. 조사 및 분석
            </h2>
            <div className="flex-grow flex flex-col justify-between pt-space-sm">
              <div className="bg-surface-container-low p-space-md min-h-[140px] flex items-center justify-center text-center mb-space-md">
                <p className="font-body-md text-body-md text-muted-subtext italic">
                  {data.bxPhase2}
                </p>
              </div>
              <div className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-wider pt-space-xs">
                STAGE / MARKET RESEARCH &amp; AUDIENCE SYNTHESIS
              </div>
            </div>
          </div>

          {/* 03. 해결 방향 */}
          <div className="flex flex-col bg-surface-container-lowest p-space-lg shadow-sm relative group hover:bg-surface-container-low transition-colors duration-200">
            <div className="flex items-start justify-between mb-space-lg">
              <span className="font-display-xl text-display-xl text-surface-container-highest select-none leading-none">
                03
              </span>
              <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest px-space-xs py-0.5 bg-surface-container-high text-on-surface">
                RESOLUTION
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">
              3. 해결 방향
            </h2>
            <div className="flex-grow flex flex-col justify-between pt-space-sm">
              <div className="bg-surface-container-low p-space-md min-h-[140px] flex items-center justify-center text-center mb-space-md">
                <p className="font-body-md text-body-md text-muted-subtext italic">
                  {data.bxPhase3}
                </p>
              </div>
              <div className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-wider pt-space-xs">
                STAGE / DESIGN STRATEGY &amp; IMPLEMENTATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Contributor & Role Breakdown Block */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-lowest">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-4 flex flex-col gap-space-xs">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext">
              CONTRIBUTION &amp; SCOPE
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              나의 역할
            </h3>
          </div>
          <div className="lg:col-span-8 bg-surface-container-low p-space-lg shadow-sm flex flex-col justify-center min-h-[160px]">
            <p className="font-body-lg text-body-lg text-on-surface mb-space-sm">
              {data.bxRole}
            </p>
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
              KEY RESPONSIBILITIES • DESIGN EXECUTION • SYSTEM GOVERNANCE • CLIENT WORKSHOPPING
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Next Project Link Block */}
      <section className="w-full bg-primary text-surface px-margin lg:px-margin-desktop py-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="flex flex-col gap-space-sm max-w-xl">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-primary-fixed-dim">
              UP NEXT IN PORTFOLIO • CASE 05
            </span>
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-primary-fixed-dim tracking-wider">
              CUSTOMER EXPERIENCE ARCHITECTURE
            </span>
            <button
              type="button"
              onClick={() => onNavigate('project-cx')}
              className="group inline-flex items-center gap-space-md text-surface hover:text-primary-fixed transition-colors text-left cursor-pointer"
            >
              <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight">
                NEXT: CX PROJECT (우렁각시) →
              </span>
            </button>
          </div>
          <div className="flex items-center gap-space-sm">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="px-space-md py-space-xs bg-surface text-primary font-label-mono-sm text-label-mono-sm uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary transition-colors inline-block cursor-pointer"
            >
              RETURN TO OVERVIEW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
