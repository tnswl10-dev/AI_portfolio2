import { useState } from 'react';
import type { PagePath } from '../types/portfolio';

interface HeaderProps {
  currentPath: PagePath;
  onNavigate: (path: PagePath) => void;
  onOpenEditor: () => void;
}

const NAV_ITEMS: { path: PagePath; label: string }[] = [
  { path: 'cover', label: '01 COVER' },
  { path: 'about-me', label: '02 ABOUT' },
  { path: 'projects', label: '03 PROJECTS' },
  { path: 'ai-experience', label: '07 AI EXPERIENCE' },
  { path: 'closing', label: '08 CLOSING' },
];

export function Header({ currentPath, onNavigate, onOpenEditor }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (path: PagePath) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-16 w-full px-margin lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <button
          type="button"
          onClick={() => handleNav('cover')}
          className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface hover:opacity-70 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
        >
          2026 PORTFOLIO
        </button>

        <div className="flex items-center gap-space-md lg:gap-space-lg">
          <nav
            aria-label="Primary Portfolio Navigation"
            className="hidden md:flex items-center gap-space-md"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleNav(item.path)}
                  className={`font-label-mono-sm text-label-mono-sm px-space-xs py-1 transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-surface'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden px-space-xs py-1 font-label-mono-xs text-label-mono-xs uppercase tracking-wider text-on-surface border border-architectural-hairline cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? 'CLOSE' : 'INDEX'}
          </button>

          <button
            type="button"
            onClick={onOpenEditor}
            title="포트폴리오 정보 편집"
            aria-label="포트폴리오 정보 편집 열기"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-secondary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-surface border-t border-architectural-hairline px-margin py-space-md flex flex-col gap-space-xs"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNav(item.path)}
                className={`text-left font-label-mono-sm text-label-mono-sm px-space-sm py-space-xs uppercase tracking-wider cursor-pointer ${
                  isActive
                    ? 'bg-primary text-surface'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
