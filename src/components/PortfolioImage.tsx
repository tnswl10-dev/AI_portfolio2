import { useState } from 'react';

interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  onClick?: () => void;
}

export function PortfolioImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  onClick,
}: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-full bg-surface-container-high flex flex-col items-center justify-center p-space-lg text-center gap-space-sm">
        <span className="material-symbols-outlined text-[32px] text-muted-subtext">
          image
        </span>
        <p className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext">
          {fallbackLabel || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      onClick={onClick}
      className={className}
    />
  );
}
