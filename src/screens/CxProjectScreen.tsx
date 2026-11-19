import {
  HOTLINKED_IMAGES,
  type LightboxImage,
  type PagePath,
} from '../types/portfolio';
import { PortfolioImage } from '../components/PortfolioImage';

interface CxProjectScreenProps {
  onNavigate: (path: PagePath) => void;
  onOpenLightbox: (image: LightboxImage) => void;
}

export function CxProjectScreen({
  onNavigate,
  onOpenLightbox,
}: CxProjectScreenProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="px-margin lg:px-margin-desktop py-space-md bg-surface-bright flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className="group inline-flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-muted-subtext hover:text-primary transition-colors tracking-widest uppercase cursor-pointer"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span>03 PROJECTS</span>
        </button>
        <div className="flex items-center gap-space-sm font-label-mono-xs text-label-mono-xs text-muted-subtext tracking-widest uppercase">
          <span className="text-primary font-semibold">CASE REF: 05/08</span>
          <span>·</span>
          <span>CX DIVISION</span>
        </div>
      </div>

      <section className="px-margin lg:px-margin-desktop pt-space-xl pb-space-lg bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-lg">
            <div className="max-w-3xl space-y-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="px-2 py-0.5 bg-primary text-surface font-label-mono-xs text-label-mono-xs uppercase tracking-widest">
                  CX PROJECT
                </span>
                <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext tracking-widest uppercase">
                  CUSTOMER EXPERIENCE DESIGN
                </span>
              </div>
              <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-primary tracking-tight font-extrabold uppercase">
                우렁각시
              </h1>
              <p className="font-headline-md text-headline-md text-on-surface-variant font-medium">
                욕실 바닥 관리 로봇청소기
              </p>
            </div>
            <div className="lg:max-w-md pb-2">
              <p className="font-body-lg text-body-lg text-muted-subtext leading-relaxed">
                고객의 욕실 청소 경험을 분석해 반복적인 관리 부담을 줄이는 자동화 제품 제안 프로젝트
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin lg:px-margin-desktop pb-space-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-container-high">
            <PortfolioImage
              src={HOTLINKED_IMAGES.cxDetail}
              alt="우렁각시 — 욕실 바닥 관리 로봇청소기"
              onClick={() =>
                onOpenLightbox({
                  src: HOTLINKED_IMAGES.cxDetail,
                  alt: '우렁각시 — 욕실 바닥 관리 로봇청소기',
                  caption:
                    'FIG 01. 우렁각시 — 자동 욕실 바닥 청소 로봇 디바이스 및 충전 스테이션',
                })
              }
              className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.01] cursor-zoom-in"
            />
            <div className="absolute top-space-md left-space-md bg-surface/90 backdrop-blur-sm px-3 py-1.5 font-label-mono-xs text-label-mono-xs tracking-widest text-primary uppercase pointer-events-none">
              PERSPECTIVE / 01 ARCHITECTURAL VIEW
            </div>
          </div>
          <div className="pt-space-sm flex flex-col md:flex-row md:items-center justify-between gap-2 font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase tracking-widest">
            <span>
              FIG 01. 우렁각시 — 자동 욕실 바닥 청소 로봇 디바이스 및 충전 스테이션
            </span>
            <span>SPEC: WET/DRY HYBRID SENSORS · SLAM NAVIGATION</span>
          </div>
        </div>
      </section>

      <section className="px-margin lg:px-margin-desktop pb-space-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-space-md">
              <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest block">
                PROJECT OVERVIEW
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                문제 분석 및 자동화 솔루션
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                사용자의 일상 속 가장 피로도가 높은 영역인 습식 공간의 관리 루틴을 해체하고, 능동적 자율 구동 구조를 바탕으로 실질적인 라이프스타일 해방감을 부여합니다.
              </p>
            </div>
            <div className="mt-space-xl p-space-lg bg-surface-container-low">
              <div className="flex items-center gap-2 mb-space-sm">
                <span className="w-2 h-2 bg-primary" />
                <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-primary font-bold">
                  나의 역할 / MY ROLE
                </span>
              </div>
              <p className="font-headline-md text-headline-md text-primary font-semibold leading-snug">
                아이디어 도출, 기획, 데이터 수집 및 분석
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between text-muted-subtext font-label-mono-xs text-label-mono-xs">
                <span>DISCIPLINE</span>
                <span className="text-primary font-semibold">
                  CX RESEARCH &amp; PRODUCT STRATEGY
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            {/* Phase 01 */}
            <div className="p-space-lg bg-surface-container-lowest">
              <div className="flex items-start justify-between mb-space-md">
                <span className="font-label-mono-sm text-label-mono-sm text-muted-subtext tracking-widest uppercase">
                  PHASE 01 / PAIN POINT
                </span>
                <span className="font-display-xl text-headline-lg text-muted-subtext/40 font-bold">
                  01
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-space-sm">
                문제 발견
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                물기, 물때, 반복적인 청소 등 욕실 바닥 관리 과정에서 발생하는 고객 불편
              </p>
              <div className="mt-space-md flex flex-wrap gap-space-xs font-label-mono-xs text-label-mono-xs">
                <span className="px-2 py-1 bg-surface-container text-on-surface-variant">
                  습기 누적
                </span>
                <span className="px-2 py-1 bg-surface-container text-on-surface-variant">
                  타일 오염
                </span>
                <span className="px-2 py-1 bg-surface-container text-on-surface-variant">
                  물때 억제 부담
                </span>
                <span className="px-2 py-1 bg-surface-container text-on-surface-variant">
                  반복 노동
                </span>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="p-space-lg bg-surface-container-lowest">
              <div className="flex items-start justify-between mb-space-md">
                <span className="font-label-mono-sm text-label-mono-sm text-muted-subtext tracking-widest uppercase">
                  PHASE 02 / EMPIRICAL RESEARCH
                </span>
                <span className="font-display-xl text-headline-lg text-muted-subtext/40 font-bold">
                  02
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-space-sm">
                조사 및 분석
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                네이버 카페·블로그 게시글을 수집·정제하고, 주요 키워드 및 언급 빈도를 분석하여 욕실 바닥 관리와 관련된 고객의 불편 요소를 파악
              </p>
              <div className="mt-space-lg p-space-md bg-surface-container-low flex flex-col md:flex-row gap-space-md justify-between items-start md:items-center">
                <div className="flex flex-col">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                    DATA SOURCES EXTRACTED
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                    12,400+ ENTRIES
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                    PRIMARY STRESS INDEX
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                    78.4% (물기·미끄럼)
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                    CYCLE FREQUENCY
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    DAILY REPETITION
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="p-space-lg bg-surface-container-lowest">
              <div className="flex items-start justify-between mb-space-md">
                <span className="font-label-mono-sm text-label-mono-sm text-muted-subtext tracking-widest uppercase">
                  PHASE 03 / RESOLUTION STRATEGY
                </span>
                <span className="font-display-xl text-headline-lg text-muted-subtext/40 font-bold">
                  03
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-space-sm">
                해결 방향
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                물기 제거와 오염 관리를 자동화하는 욕실 바닥 관리 로봇 제안
              </p>
              <div className="mt-space-lg grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="p-space-md bg-surface">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext block mb-1">
                    MODULE A
                  </span>
                  <h4 className="font-headline-md text-[18px] text-primary font-semibold mb-1">
                    고압 흡입 &amp; 스퀴지
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    타일 틈새의 잔여 수분을 98% 건조시키는 듀얼 메커니즘 구성
                  </p>
                </div>
                <div className="p-space-md bg-surface">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext block mb-1">
                    MODULE B
                  </span>
                  <h4 className="font-headline-md text-[18px] text-primary font-semibold mb-1">
                    자외선 살균 방역
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    물때 및 곰팡이 포자 발생을 사전 억제하는 UV-C 하부 모듈
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-margin lg:px-margin-desktop py-space-xl">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="group inline-flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-primary hover:text-secondary transition-colors uppercase tracking-wider cursor-pointer"
          >
            <span className="transform group-hover:-translate-x-1.5 transition-transform duration-200">
              ←
            </span>
            <span>03 PROJECTS 목록으로 돌아가기</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('project-dx')}
            className="group inline-flex items-center gap-space-md px-space-md py-space-sm bg-primary text-surface hover:bg-secondary transition-all cursor-pointer"
          >
            <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-widest">
              NEXT: DX PROJECT (시니어 스마트가이드)
            </span>
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
              →
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
