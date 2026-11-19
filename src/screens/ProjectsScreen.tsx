import {
  HOTLINKED_IMAGES,
  type PagePath,
  type PortfolioData,
} from '../types/portfolio';
import { PortfolioImage } from '../components/PortfolioImage';

interface ProjectsScreenProps {
  data: PortfolioData;
  onNavigate: (path: PagePath) => void;
}

export function ProjectsScreen({ data, onNavigate }: ProjectsScreenProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Top Curatorial Banner & Index Meta */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-lg lg:py-space-xl bg-surface">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-2xl">
            <div className="flex items-center gap-space-sm font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext">
              <span className="inline-block w-2 h-2 bg-secondary" />
              <span>INDEX / 03</span>
              <span>·</span>
              <span>CURATED MONOGRAPH</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              03 / SELECTED PROJECTS
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              BX, CX, DX 프로젝트 아카이브 — 브랜드 아이덴티티 수립부터 사용자 경험(CX) 제품 기획, 인공지능 기반 디지털 전환(DX) 플랫폼에 이르는 선별된 실무 디자인 여정입니다.
            </p>
          </div>

          {/* Quick Metrics / Spec Strip */}
          <div className="flex items-center gap-space-lg font-label-mono-sm text-label-mono-sm uppercase text-muted-subtext">
            <div className="flex flex-col">
              <span className="text-on-surface font-semibold text-headline-md">
                03
              </span>
              <span>ARCHIVED ENTRIES</span>
            </div>
            <div className="h-8 w-px bg-architectural-hairline" />
            <div className="flex flex-col">
              <span className="text-on-surface font-semibold text-headline-md">
                2026
              </span>
              <span>EDITION VER.</span>
            </div>
            <div className="h-8 w-px bg-architectural-hairline" />
            <div className="flex flex-col">
              <span className="text-secondary font-semibold text-headline-md">
                BX·CX·DX
              </span>
              <span>DISCIPLINES</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-architectural-hairline" />

      {/* Project 01: BX PROJECT */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface group transition-colors duration-500 hover:bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-stretch">
          <button
            type="button"
            onClick={() => onNavigate('project-bx')}
            className="lg:col-span-7 flex flex-col justify-between bg-surface-container-highest min-h-[380px] lg:min-h-[460px] p-space-lg relative overflow-hidden transition-transform duration-300 text-left cursor-pointer"
          >
            <div className="flex items-center justify-between w-full font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
              <span className="tracking-widest">BX / SPECIMEN FILE_01</span>
              <span className="bg-surface px-space-xs py-0.5 text-on-surface">
                {data.bxImageUrl ? 'STATUS: UPLOADED' : 'STATUS: [추후 업로드]'}
              </span>
            </div>

            {data.bxImageUrl ? (
              <div className="my-space-md flex-1 w-full overflow-hidden bg-surface">
                <PortfolioImage
                  src={data.bxImageUrl}
                  alt={data.bxTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="my-auto flex flex-col items-center justify-center text-center space-y-space-md py-space-xl w-full">
                <div className="w-20 h-20 bg-surface flex items-center justify-center text-on-surface shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <span className="material-symbols-outlined text-[32px] text-muted-subtext">
                    architecture
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
                    [ 브랜드 경험 시각화 대기 ]
                  </p>
                  <p className="font-label-mono-xs text-label-mono-xs text-muted-subtext tracking-widest uppercase">
                    DIMENSIONS · GRID SYSTEM · TYPOGRAPHIC MANUAL
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between w-full pt-space-md font-label-mono-xs text-label-mono-xs text-muted-subtext">
              <span>IDENTITY SYSTEM — BRAND ARCHITECTURE</span>
              <span className="group-hover:text-primary flex items-center gap-1 font-label-mono-sm">
                OPEN REPOSITORY →
              </span>
            </div>
          </button>

          <div className="lg:col-span-5 flex flex-col justify-between py-space-xs">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between font-label-mono-sm text-label-mono-sm">
                <span className="text-secondary font-semibold">[ 01 ]</span>
                <span className="uppercase tracking-widest text-muted-subtext">
                  DISCIPLINE: BX DESIGN
                </span>
              </div>
              <div className="space-y-space-xs">
                <div className="inline-block px-space-xs py-0.5 bg-surface-container font-label-mono-xs text-label-mono-xs uppercase text-on-surface-variant">
                  IDENTITY &amp; STRATEGY
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {data.bxTitle}
                </h2>
                <p className="font-label-mono-sm text-label-mono-sm text-muted-subtext uppercase tracking-wider">
                  {data.bxSubtitle}
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                고유한 브랜드 철학과 비전을 바탕으로 시각 언어, 가이드라인 및 오프라인/디지털 접점을 총괄 설계한 브랜드 아이덴티티 프로젝트입니다. 명확한 메시지와 조형적 규격으로 장기적인 브랜드 일관성을 수립합니다.
              </p>
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Visual Guidelines
                </span>
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Grid System
                </span>
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Touchpoints
                </span>
              </div>
            </div>

            <div className="pt-space-lg">
              <button
                type="button"
                onClick={() => onNavigate('project-bx')}
                className="inline-flex items-center justify-between w-full lg:w-auto gap-space-md bg-primary text-surface px-6 py-3 font-label-mono-sm text-label-mono-sm uppercase tracking-wider hover:bg-secondary transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <span>VIEW BX CASE STUDY</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-architectural-hairline" />

      {/* Project 02: CX PROJECT (우렁각시) */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface-bright group transition-colors duration-500 hover:bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-stretch">
          <button
            type="button"
            onClick={() => onNavigate('project-cx')}
            className="lg:col-span-7 flex flex-col bg-surface overflow-hidden relative group/img shadow-sm text-left cursor-pointer"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
              <PortfolioImage
                src={HOTLINKED_IMAGES.cxCard}
                alt="우렁각시 — 욕실 바닥 관리 로봇청소기"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-surface font-label-mono-xs text-label-mono-xs px-2.5 py-1 uppercase tracking-widest">
                CX CASE · ROBOTICS
              </div>
            </div>
            <div className="p-space-md bg-surface-container-low flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext w-full">
              <span className="text-on-surface font-medium uppercase">
                FIG. 02 — WET TILE NAVIGATION SYSTEM &amp; SENSOR ARRAY
              </span>
              <span className="uppercase">HARDWARE &amp; ERGONOMICS</span>
            </div>
          </button>

          <div className="lg:col-span-5 flex flex-col justify-between py-space-xs">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between font-label-mono-sm text-label-mono-sm">
                <span className="text-secondary font-semibold">[ 02 ]</span>
                <span className="uppercase tracking-widest text-muted-subtext">
                  DISCIPLINE: CX PRODUCT DESIGN
                </span>
              </div>
              <div className="space-y-space-xs">
                <div className="inline-block px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-mono-xs text-label-mono-xs uppercase font-medium">
                  욕실 바닥 관리 로봇청소기
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  우렁각시
                </h2>
                <p className="font-label-mono-sm text-label-mono-sm text-muted-subtext uppercase tracking-wider">
                  AUTOMATED BATHROOM FLOOR SANITATION SYSTEM
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                고객의 욕실 청소 경험을 심층 분석해 반복적인 관리 부담과 습기 스트레스를 획기적으로 줄이는 자동화 제품 제안 프로젝트입니다. 물기 감지 라이다 센서, 항균 건조 롤러, 미끄럼 방지 휠 트랙 및 벽면 거치 도킹 스테이션의 사용자 여정을 빈틈없이 설계했습니다.
              </p>

              <div className="bg-surface-container p-space-md space-y-space-xs">
                <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                  <span>CUSTOMER PAIN POINT RESOLUTION</span>
                  <span className="text-secondary">INDEX 94%</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface font-medium">
                  “욕실 물때 관리의 물리적 노동을 0으로 수렴시키는 자동 청소 루틴 구축”
                </p>
              </div>

              <div className="flex flex-wrap gap-space-xs">
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  CX Journey Map
                </span>
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Physical Prototyping
                </span>
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Waterproof CMF
                </span>
              </div>
            </div>

            <div className="pt-space-lg">
              <button
                type="button"
                onClick={() => onNavigate('project-cx')}
                className="inline-flex items-center justify-between w-full lg:w-auto gap-space-md bg-primary text-surface px-6 py-3 font-label-mono-sm text-label-mono-sm uppercase tracking-wider hover:bg-secondary transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <span>EXPLORE CX CASE STUDY</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-architectural-hairline" />

      {/* Project 03: DX PROJECT (시니어 스마트가이드) */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface group transition-colors duration-500 hover:bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-stretch">
          <button
            type="button"
            onClick={() => onNavigate('project-dx')}
            className="lg:col-span-7 flex flex-col bg-surface overflow-hidden relative group/img shadow-sm text-left cursor-pointer"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
              <PortfolioImage
                src={HOTLINKED_IMAGES.dxCard}
                alt="시니어 스마트가이드 — AI 기반 국내 자유여행 코스 추천 서비스"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-surface font-label-mono-xs text-label-mono-xs px-2.5 py-1 uppercase tracking-widest">
                DX CASE · AI TRAVEL
              </div>
            </div>
            <div className="p-space-md bg-surface-container-low flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext w-full">
              <span className="text-on-surface font-medium uppercase">
                FIG. 03 — MULTIMODAL ITINERARY GENERATOR UI &amp; ACCESSIBLE UX
              </span>
              <span className="uppercase">AI ENGINE · TABLET UI</span>
            </div>
          </button>

          <div className="lg:col-span-5 flex flex-col justify-between py-space-xs">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between font-label-mono-sm text-label-mono-sm">
                <span className="text-secondary font-semibold">[ 03 ]</span>
                <span className="uppercase tracking-widest text-muted-subtext">
                  DISCIPLINE: DX &amp; AI PLATFORM
                </span>
              </div>
              <div className="space-y-space-xs">
                <div className="inline-block px-space-xs py-0.5 bg-surface-container font-label-mono-xs text-label-mono-xs uppercase text-on-surface-variant font-medium">
                  AI 기반 국내 자유여행 코스 추천 서비스
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  시니어 스마트가이드
                </h2>
                <p className="font-label-mono-sm text-label-mono-sm text-muted-subtext uppercase tracking-wider">
                  INTELLIGENT SENIOR MOBILITY &amp; ITINERARY CURATION
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                TV 방송 및 영상 미디어에서 발견한 명소를 AI 멀티모달 모델로 실시간 분석하고, 고령 사용자의 보행 능력, 대중교통 접근성, 식단 선호도 등 개인 조건을 반영하여 최적화된 맞춤형 국내 여행 코스를 자동 생성하는 지능형 디지털 서비스입니다.
              </p>

              <div className="bg-surface-container p-space-md space-y-space-xs">
                <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                  <span>SYSTEM MODALITY</span>
                  <span className="text-secondary">VISION &amp; RAG LLM</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface font-medium">
                  “시니어 친화적 UI, 음성 지원 내비게이션, 맞춤형 완충 휴식 일정 자동 배치”
                </p>
              </div>

              <div className="flex flex-wrap gap-space-xs">
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Senior-Centric UX
                </span>
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Multimodal AI
                </span>
                <span className="font-label-mono-xs text-label-mono-xs px-2 py-1 bg-surface-container text-on-surface uppercase">
                  Route Optimization
                </span>
              </div>
            </div>

            <div className="pt-space-lg">
              <button
                type="button"
                onClick={() => onNavigate('project-dx')}
                className="inline-flex items-center justify-between w-full lg:w-auto gap-space-md bg-primary text-surface px-6 py-3 font-label-mono-sm text-label-mono-sm uppercase tracking-wider hover:bg-secondary transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <span>EXPLORE DX CASE STUDY</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Navigation Bar to Next Chapter */}
      <section className="w-full bg-soft-charcoal text-surface py-space-xl lg:py-space-2xl px-margin lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="space-y-space-xs max-w-xl">
            <div className="font-label-mono-xs text-label-mono-xs text-surface-tint uppercase tracking-widest">
              UP NEXT · SECTION 07
            </div>
            <h3 className="font-headline-md text-headline-md text-surface tracking-tight">
              AI EXPERIENCE ARCHITECTURE
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed-dim">
              생성형 AI와 사용자 인터랙션 모델의 융합 사례, 설계 방법론 및 미래 프로덕트 비전 탐색.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('ai-experience')}
            className="group flex items-center gap-space-md bg-surface text-primary px-8 py-4 font-label-mono-sm text-label-mono-sm uppercase tracking-wider hover:bg-secondary hover:text-surface transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>07 AI EXPERIENCE</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
