import { useEffect, type ChangeEvent } from 'react';
import {
  DEFAULT_PORTFOLIO_DATA,
  type PagePath,
  type PortfolioData,
} from '../types/portfolio';

interface ProfileEditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onChange: (updated: Partial<PortfolioData>) => void;
  onReset: () => void;
  onNavigate: (path: PagePath) => void;
}

const ALL_PAGES: { path: PagePath; label: string }[] = [
  { path: 'cover', label: '01 COVER' },
  { path: 'about-me', label: '02 ABOUT ME' },
  { path: 'projects', label: '03 PROJECTS' },
  { path: 'project-bx', label: '04 BX DETAIL' },
  { path: 'project-cx', label: '05 CX DETAIL' },
  { path: 'project-dx', label: '06 DX DETAIL' },
  { path: 'ai-experience', label: '07 AI EXPERIENCE' },
  { path: 'closing', label: '08 CLOSING' },
];

export function ProfileEditorDrawer({
  isOpen,
  onClose,
  data,
  onChange,
  onReset,
  onNavigate,
}: ProfileEditorDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div
      className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-xs flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio Editor & Index"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg h-full bg-surface shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-space-lg py-space-md bg-surface-container-low border-b border-architectural-hairline flex items-center justify-between">
          <div>
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext block">
              FOLIO DIRECTORY &amp; CONTENT EDITOR
            </span>
            <h2 className="font-headline-md text-[20px] text-primary tracking-tight">
              포트폴리오 프로필 · 인덱스 설정
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-space-xs bg-primary text-on-primary hover:bg-secondary transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <span className="material-symbols-outlined text-[18px] block">
              close
            </span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-space-lg py-space-lg space-y-space-lg">
          {/* Quick Index Jump 01-08 */}
          <div className="space-y-space-xs">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext block">
              ALL SCREENS (01 — 08)
            </span>
            <div className="grid grid-cols-2 gap-space-xs">
              {ALL_PAGES.map((page) => (
                <button
                  key={page.path}
                  type="button"
                  onClick={() => {
                    onNavigate(page.path);
                    onClose();
                  }}
                  className="text-left px-space-sm py-space-xs bg-surface-container-low hover:bg-primary hover:text-surface transition-colors font-label-mono-xs text-label-mono-xs uppercase tracking-wider cursor-pointer"
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-architectural-hairline" />

          {/* Personal Info Fields */}
          <div className="space-y-space-md">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-secondary block">
              01 &amp; 02 · PERSONAL IDENTITY
            </span>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                이름 (CREATOR NAME)
              </label>
              <input
                type="text"
                value={data.creatorName}
                onChange={(e) => onChange({ creatorName: e.target.value })}
                placeholder="[이름 입력]"
                className="w-full bg-surface-container-low px-space-sm py-space-xs font-body-md text-body-md text-on-surface border border-architectural-hairline focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                나를 표현하는 한 문장 (ONE-LINER)
              </label>
              <input
                type="text"
                value={data.oneLiner}
                onChange={(e) => onChange({ oneLiner: e.target.value })}
                placeholder="[추후 입력]"
                className="w-full bg-surface-container-low px-space-sm py-space-xs font-body-md text-body-md text-on-surface border border-architectural-hairline focus:border-primary outline-none"
              />
            </div>
          </div>

          <div className="h-px bg-architectural-hairline" />

          {/* BX Project Fields */}
          <div className="space-y-space-md">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-secondary block">
              04 · BX PROJECT DETAIL
            </span>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                프로젝트 제목 (BX TITLE)
              </label>
              <input
                type="text"
                value={data.bxTitle === DEFAULT_PORTFOLIO_DATA.bxTitle ? '' : data.bxTitle}
                onChange={(e) =>
                  onChange({
                    bxTitle: e.target.value || DEFAULT_PORTFOLIO_DATA.bxTitle,
                  })
                }
                placeholder="[추후 입력]"
                className="w-full bg-surface-container-low px-space-sm py-space-xs font-body-md text-body-md text-on-surface border border-architectural-hairline focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                프로젝트 소개 (SYNOPSIS)
              </label>
              <textarea
                rows={2}
                value={
                  data.bxSynopsis === DEFAULT_PORTFOLIO_DATA.bxSynopsis
                    ? ''
                    : data.bxSynopsis
                }
                onChange={(e) =>
                  onChange({
                    bxSynopsis:
                      e.target.value || DEFAULT_PORTFOLIO_DATA.bxSynopsis,
                  })
                }
                placeholder="[프로젝트 소개 입력]"
                className="w-full bg-surface-container-low px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface border border-architectural-hairline focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                나의 역할 (MY ROLE)
              </label>
              <input
                type="text"
                value={data.bxRole === DEFAULT_PORTFOLIO_DATA.bxRole ? '' : data.bxRole}
                onChange={(e) =>
                  onChange({
                    bxRole: e.target.value || DEFAULT_PORTFOLIO_DATA.bxRole,
                  })
                }
                placeholder="[추후 입력]"
                className="w-full bg-surface-container-low px-space-sm py-space-xs font-body-md text-body-md text-on-surface border border-architectural-hairline focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                BX 대표 이미지 업로드 (UPLOAD HERO IMAGE)
              </label>
              <div className="flex items-center gap-space-sm">
                <label className="px-space-sm py-space-xs bg-primary text-surface font-label-mono-xs text-label-mono-xs uppercase tracking-wider cursor-pointer hover:bg-secondary transition-colors">
                  IMAGE FILE
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="hidden"
                  />
                </label>
                {data.bxImageUrl && (
                  <button
                    type="button"
                    onClick={() => onChange({ bxImageUrl: '' })}
                    className="px-space-sm py-space-xs bg-surface-container-high text-on-surface font-label-mono-xs text-label-mono-xs uppercase cursor-pointer"
                  >
                    REMOVE
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="h-px bg-architectural-hairline" />

          {/* Contact Info Fields */}
          <div className="space-y-space-md">
            <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-secondary block">
              08 · CLOSING CONTACT
            </span>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                01 · 연락처 (PHONE)
              </label>
              <input
                type="text"
                value={data.phone === DEFAULT_PORTFOLIO_DATA.phone ? '' : data.phone}
                onChange={(e) =>
                  onChange({
                    phone: e.target.value || DEFAULT_PORTFOLIO_DATA.phone,
                  })
                }
                placeholder="[추후 입력]"
                className="w-full bg-surface-container-low px-space-sm py-space-xs font-body-md text-body-md text-on-surface border border-architectural-hairline focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext block mb-1">
                02 · 이메일 (DISPATCH)
              </label>
              <input
                type="email"
                value={data.email === DEFAULT_PORTFOLIO_DATA.email ? '' : data.email}
                onChange={(e) =>
                  onChange({
                    email: e.target.value || DEFAULT_PORTFOLIO_DATA.email,
                  })
                }
                placeholder="[추후 입력]"
                className="w-full bg-surface-container-low px-space-sm py-space-xs font-body-md text-body-md text-on-surface border border-architectural-hairline focus:border-primary outline-none"
              />
            </div>
          </div>
        </div>

        <div className="px-space-lg py-space-md bg-surface-container-low border-t border-architectural-hairline flex items-center justify-between">
          <button
            type="button"
            onClick={onReset}
            className="px-space-sm py-space-xs font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext hover:text-error transition-colors cursor-pointer"
          >
            RESET PLACEHOLDERS
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-space-md py-space-xs bg-primary text-on-primary hover:bg-secondary transition-colors font-label-mono-sm text-label-mono-sm uppercase tracking-wider cursor-pointer"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
}
