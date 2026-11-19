import { useEffect } from 'react';
import type { LightboxImage } from '../types/portfolio';
import { PortfolioImage } from './PortfolioImage';

interface ImageLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!image) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-sm flex flex-col items-center justify-center p-space-md lg:p-space-xl"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl bg-surface flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container-low border-b border-architectural-hairline">
          <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-on-surface truncate pr-space-md">
            {image.caption}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-primary text-on-primary hover:bg-secondary transition-colors font-label-mono-xs text-label-mono-xs uppercase tracking-wider shrink-0 cursor-pointer"
          >
            <span>CLOSE</span>
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
        <div className="relative w-full max-h-[80vh] bg-surface-container-high overflow-hidden flex items-center justify-center">
          <PortfolioImage
            src={image.src}
            alt={image.alt}
            className="w-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
