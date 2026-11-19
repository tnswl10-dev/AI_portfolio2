import { useState } from 'react';
import {
  DEFAULT_PORTFOLIO_DATA,
  type PagePath,
  type PortfolioData,
} from '../types/portfolio';

interface ClosingScreenProps {
  data: PortfolioData;
  onChange: (updated: Partial<PortfolioData>) => void;
  onNavigate: (path: PagePath) => void;
}

export function ClosingScreen({
  data,
  onChange,
  onNavigate,
}: ClosingScreenProps) {
  const [editingField, setEditingField] = useState<'phone' | 'email' | null>(
    null,
  );
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(
    null,
  );

  const handleCopy = async (field: 'phone' | 'email', value: string) => {
    if (!value || value === '[추후 입력]') return;
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1800);
    } catch {
      // Clipboard unavailable in restricted context
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl flex flex-col justify-between min-h-[calc(100vh-10rem)]">
        <div className="w-full flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
          <div className="flex items-baseline gap-space-sm">
            <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-widest text-primary font-bold">
              08
            </span>
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-muted-subtext tracking-widest">
              / CLOSING REMARKS
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
              ARCHIVAL RECORD
            </span>
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-on-surface tracking-wider">
              SEC. FINALE — 2026
            </span>
          </div>
        </div>

        <div className="w-full my-space-xl lg:my-space-2xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-8 flex flex-col">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest mb-space-sm block">
              EPILOGUE / SALUTATION
            </span>
            <h1 className="font-display-xl text-display-xl-mobile sm:text-display-xl text-primary uppercase tracking-tight select-none">
              THANK YOU
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-space-md sm:gap-space-lg mt-space-xs">
              <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-semibold tracking-tight">
                감사합니다.
              </p>
              <span className="font-label-mono-sm text-label-mono-sm text-muted-subtext uppercase tracking-widest sm:border-l sm:border-architectural-hairline sm:pl-space-md">
                END OF TRANSMISSION · RETROSPECTIVE
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
                  COMMUNICATION CODES
                </span>
                <span className="material-symbols-outlined text-primary text-[16px]">
                  alternate_email
                </span>
              </div>

              <div className="flex flex-col gap-space-sm pt-space-xs">
                {/* 01 Phone */}
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
                      01 · 연락처 (PHONE)
                    </span>
                    {data.phone !== DEFAULT_PORTFOLIO_DATA.phone && (
                      <button
                        type="button"
                        onClick={() => handleCopy('phone', data.phone)}
                        className="font-label-mono-xs text-label-mono-xs uppercase text-secondary hover:underline cursor-pointer"
                      >
                        {copiedField === 'phone' ? 'COPIED' : 'COPY'}
                      </button>
                    )}
                  </div>
                  {editingField === 'phone' ? (
                    <input
                      autoFocus
                      type="text"
                      value={
                        data.phone === DEFAULT_PORTFOLIO_DATA.phone
                          ? ''
                          : data.phone
                      }
                      onChange={(e) =>
                        onChange({
                          phone:
                            e.target.value || DEFAULT_PORTFOLIO_DATA.phone,
                        })
                      }
                      onBlur={() => setEditingField(null)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') setEditingField(null);
                      }}
                      placeholder="010-0000-0000"
                      className="font-body-md text-body-md text-on-surface tracking-wide bg-surface px-space-sm py-space-xs outline-none border border-primary"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setEditingField('phone')}
                      title="클릭하여 연락처 입력"
                      className="text-left font-body-md text-body-md text-on-surface tracking-wide bg-surface px-space-sm py-space-xs inline-block hover:bg-surface-container-highest transition-colors cursor-text"
                    >
                      {data.phone}
                    </button>
                  )}
                </div>

                {/* 02 Email */}
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
                      02 · 이메일 (DISPATCH)
                    </span>
                    {data.email !== DEFAULT_PORTFOLIO_DATA.email && (
                      <button
                        type="button"
                        onClick={() => handleCopy('email', data.email)}
                        className="font-label-mono-xs text-label-mono-xs uppercase text-secondary hover:underline cursor-pointer"
                      >
                        {copiedField === 'email' ? 'COPIED' : 'COPY'}
                      </button>
                    )}
                  </div>
                  {editingField === 'email' ? (
                    <input
                      autoFocus
                      type="email"
                      value={
                        data.email === DEFAULT_PORTFOLIO_DATA.email
                          ? ''
                          : data.email
                      }
                      onChange={(e) =>
                        onChange({
                          email:
                            e.target.value || DEFAULT_PORTFOLIO_DATA.email,
                        })
                      }
                      onBlur={() => setEditingField(null)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') setEditingField(null);
                      }}
                      placeholder="name@example.com"
                      className="font-body-md text-body-md text-on-surface tracking-wide bg-surface px-space-sm py-space-xs outline-none border border-primary"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setEditingField('email')}
                      title="클릭하여 이메일 입력"
                      className="text-left font-body-md text-body-md text-on-surface tracking-wide bg-surface px-space-sm py-space-xs inline-block hover:bg-surface-container-highest transition-colors cursor-text"
                    >
                      {data.email}
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-space-sm flex items-center justify-between text-muted-subtext">
                <span className="font-label-mono-xs text-label-mono-xs tracking-wider">
                  RESPONSE TIMEFRAME
                </span>
                <span className="font-label-mono-xs text-label-mono-xs text-on-surface font-semibold">
                  &lt; 24H STANDARD
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-space-lg pt-space-xl">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext">
              COLLABORATIVE HORIZON
            </span>
            <p className="font-headline-md text-headline-md text-on-surface font-normal">
              2026 PERSONAL PORTFOLIO — BX · CX · DX · AI
            </p>
            <p className="font-body-sm text-body-sm text-muted-subtext mt-space-xs">
              Synthesizing architectural design systems, multidimensional brand experience, and predictive intelligence into tactile human interfaces.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-md">
            <button
              type="button"
              onClick={() => onNavigate('cover')}
              className="group inline-flex items-center gap-space-sm bg-surface-container-low hover:bg-primary text-on-surface hover:text-on-primary px-space-md py-space-sm transition-colors duration-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:-translate-x-1">
                west
              </span>
              <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider">
                RETURN TO 01 COVER
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="group inline-flex items-center gap-space-sm bg-primary text-on-primary hover:bg-secondary px-space-md py-space-sm transition-colors duration-200 cursor-pointer"
            >
              <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider">
                VIEW ALL PROJECTS (03)
              </span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                east
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
              DISCIPLINE 01
            </span>
            <span className="font-body-md text-body-md text-on-surface font-medium">
              Brand Experience (BX)
            </span>
            <p className="font-body-sm text-body-sm text-muted-subtext">
              Systemic identity architecture and visceral physical-digital cohesion.
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
              DISCIPLINE 02
            </span>
            <span className="font-body-md text-body-md text-on-surface font-medium">
              Customer Experience (CX)
            </span>
            <p className="font-body-sm text-body-sm text-muted-subtext">
              Holistic narrative mapping, user empathy models, and journey resonance.
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
              DISCIPLINE 03
            </span>
            <span className="font-body-md text-body-md text-on-surface font-medium">
              Digital Experience (DX)
            </span>
            <p className="font-body-sm text-body-sm text-muted-subtext">
              High-density interfaces, tactile micro-gestures, and editorial grids.
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
              DISCIPLINE 04
            </span>
            <span className="font-body-md text-body-md text-on-surface font-medium">
              Artificial Intelligence (AI)
            </span>
            <p className="font-body-sm text-body-sm text-muted-subtext">
              Predictive logic synthesis, adaptive layouts, and generative workflows.
            </p>
          </div>
        </div>
        <div className="mt-space-xl pt-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
              DOCUMENT METRICS
            </span>
            <span className="font-label-mono-xs text-label-mono-xs bg-surface px-space-xs py-1 text-on-surface">
              PAGES 01—08 COMPLETE
            </span>
          </div>
          <div className="flex items-center gap-space-sm font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
            <span>CURATED EDITION</span>
            <span>/</span>
            <span className="text-on-surface">SEOUL · GLOBAL ACCESS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
