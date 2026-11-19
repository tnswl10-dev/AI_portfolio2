export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-lg">
      <div className="w-full px-margin lg:px-margin-desktop flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
        <div className="flex items-center gap-space-md">
          <span className="text-on-surface font-label-mono-sm text-label-mono-sm">
            © 2026 PORTFOLIO ALL RIGHTS RESERVED
          </span>
          <span>INDEX / 01–08</span>
        </div>
        <div className="flex items-center gap-space-lg">
          <span className="hover:text-on-surface transition-colors">
            ARCHITECTURAL CASEWORK
          </span>
          <span className="text-on-surface">EDITION 2026.1</span>
        </div>
      </div>
    </footer>
  );
}
