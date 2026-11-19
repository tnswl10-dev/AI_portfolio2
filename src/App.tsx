import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ImageLightbox } from './components/ImageLightbox';
import { ProfileEditorDrawer } from './components/ProfileEditorDrawer';
import { AboutScreen } from './screens/AboutScreen';
import { AiExperienceScreen } from './screens/AiExperienceScreen';
import { BxProjectScreen } from './screens/BxProjectScreen';
import { ClosingScreen } from './screens/ClosingScreen';
import { CoverScreen } from './screens/CoverScreen';
import { CxProjectScreen } from './screens/CxProjectScreen';
import { DxProjectScreen } from './screens/DxProjectScreen';
import { ProjectsScreen } from './screens/ProjectsScreen';
import {
  DEFAULT_PORTFOLIO_DATA,
  type LightboxImage,
  type PagePath,
  type PortfolioData,
} from './types/portfolio';

const STORAGE_KEY = 'portfolio_2026_data_v1';

const VALID_PATHS: PagePath[] = [
  'cover',
  'about-me',
  'projects',
  'project-bx',
  'project-cx',
  'project-dx',
  'ai-experience',
  'closing',
];

function getInitialPath(): PagePath {
  const hash = window.location.hash.replace(/^#\/?/, '') as PagePath;
  return VALID_PATHS.includes(hash) ? hash : 'cover';
}

function loadSavedData(): PortfolioData {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PORTFOLIO_DATA;
    return { ...DEFAULT_PORTFOLIO_DATA, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PORTFOLIO_DATA;
  }
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<PagePath>(getInitialPath);
  const [data, setData] = useState<PortfolioData>(loadSavedData);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(
    null,
  );
  const [editorOpen, setEditorOpen] = useState(false);

  const navigate = useCallback((path: PagePath) => {
    setCurrentPath(path);
    window.history.pushState(null, '', `#${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const next = getInitialPath();
      setCurrentPath(next);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const updateData = useCallback((updated: Partial<PortfolioData>) => {
    setData((prev) => {
      const next = { ...prev, ...updated };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore storage quota errors
      }
      return next;
    });
  }, []);

  const resetData = useCallback(() => {
    setData(DEFAULT_PORTFOLIO_DATA);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface antialiased selection:bg-primary selection:text-surface">
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenEditor={() => setEditorOpen(true)}
      />

      <main className="w-full pt-16 bg-surface flex-1 min-h-[calc(100vh-80px)]">
        {currentPath === 'cover' && (
          <CoverScreen data={data} onChange={updateData} onNavigate={navigate} />
        )}
        {currentPath === 'about-me' && (
          <AboutScreen data={data} onChange={updateData} onNavigate={navigate} />
        )}
        {currentPath === 'projects' && (
          <ProjectsScreen data={data} onNavigate={navigate} />
        )}
        {currentPath === 'project-bx' && (
          <BxProjectScreen
            data={data}
            onChange={updateData}
            onNavigate={navigate}
            onOpenLightbox={setLightboxImage}
          />
        )}
        {currentPath === 'project-cx' && (
          <CxProjectScreen
            onNavigate={navigate}
            onOpenLightbox={setLightboxImage}
          />
        )}
        {currentPath === 'project-dx' && (
          <DxProjectScreen
            onNavigate={navigate}
            onOpenLightbox={setLightboxImage}
          />
        )}
        {currentPath === 'ai-experience' && (
          <AiExperienceScreen onNavigate={navigate} />
        )}
        {currentPath === 'closing' && (
          <ClosingScreen
            data={data}
            onChange={updateData}
            onNavigate={navigate}
          />
        )}
      </main>

      <Footer />

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <ProfileEditorDrawer
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        data={data}
        onChange={updateData}
        onReset={resetData}
        onNavigate={navigate}
      />
    </div>
  );
}
