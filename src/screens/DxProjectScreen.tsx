import {
  HOTLINKED_IMAGES,
  type LightboxImage,
  type PagePath,
} from '../types/portfolio';
import { PortfolioImage } from '../components/PortfolioImage';

interface DxProjectScreenProps {
  onNavigate: (path: PagePath) => void;
  onOpenLightbox: (image: LightboxImage) => void;
}

export function DxProjectScreen({
  onNavigate,
  onOpenLightbox,
}: DxProjectScreenProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full px-margin lg:px-margin-desktop py-space-md flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className="group flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm uppercase text-muted-subtext hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          <span>03 PROJECTS</span>
        </button>
        <div className="flex items-center gap-space-sm font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
          <span className="px-2 py-0.5 bg-surface-container-high text-on-surface">
            CASE STUDY / 06
          </span>
          <span className="hidden md:inline">INDEX 2026 ARCHIVE</span>
        </div>
      </div>

      <section className="w-full px-margin lg:px-margin-desktop pt-space-lg pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <div className="lg:col-span-8 flex flex-col justify-start">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="w-2 h-2 bg-secondary inline-block" />
              <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-secondary font-medium">
                DX PROJECT · DIGITAL TRANSFORMATION
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg lg:text-display-xl lg:font-display-xl text-primary tracking-tight mb-space-sm">
              시니어 스마트가이드
            </h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant font-medium">
              AI 기반 국내 자유여행 코스 추천 서비스
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end pt-space-md lg:pt-0">
            <div className="bg-surface-container-low p-space-md flex flex-col gap-space-sm">
              <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase tracking-widest">
                [ PROJECT OVERVIEW ]
              </span>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                TV에서 발견한 여행지를 AI로 분석하고, 개인의 취향과 조건에 맞는 여행 코스를 생성하는 서비스
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
        <div className="w-full relative bg-surface-container overflow-hidden">
          <div className="aspect-[16/9] w-full max-h-[700px] overflow-hidden bg-surface-container-high">
            <PortfolioImage
              src={HOTLINKED_IMAGES.dxDetail}
              alt="시니어 스마트가이드 태블릿 디바이스 인터페이스와 여행 플래너"
              onClick={() =>
                onOpenLightbox({
                  src: HOTLINKED_IMAGES.dxDetail,
                  alt: '시니어 스마트가이드 태블릿 디바이스 인터페이스와 여행 플래너',
                  caption:
                    'FIG 02. 시니어 스마트가이드 — AI 영상 분석 기반 맞춤형 여행 일정 생성 및 태블릿 인터페이스',
                })
              }
              className="w-full h-full object-cover object-center grayscale-[15%] contrast-[1.05] hover:grayscale-0 hover:scale-[1.01] transition-all duration-700 ease-out cursor-zoom-in"
            />
          </div>
          <div className="p-space-md bg-surface-container-lowest flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xs font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase tracking-wider">
            <div className="flex items-center gap-space-xs text-on-surface">
              <span className="font-bold text-primary">FIG 02.</span>
              <span>
                시니어 스마트가이드 — AI 영상 분석 기반 맞춤형 여행 일정 생성 및 태블릿 인터페이스
              </span>
            </div>
            <div className="flex items-center gap-space-md">
              <span>SOURCE: KOREA JOURNEY RESEARCH</span>
              <span>REF: 2026.DX.04</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 flex flex-col gap-space-xs">
              <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase tracking-widest">
                DISCIPLINE PHASES
              </span>
              <span className="font-headline-md text-headline-md text-primary">
                01 — 03
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                정성/정량 데이터 수집부터 사용자 취향 추론 아키텍처 제안까지의 프로세스
              </p>
            </div>
          </div>

          <div className="lg:col-span-9 flex flex-col gap-space-xl">
            {/* Phase 01 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                <span className="text-primary font-bold">[ PHASE 01 ]</span>
                <span>DIAGNOSIS</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">
                1. 문제 발견
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                여행 콘텐츠를 통해 관심 있는 여행지를 발견해도, 실제 자유여행을 위한 장소 검색 및 일정 구성 과정에서 겪는 시니어의 어려움
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                <div className="bg-surface-container-lowest p-space-sm">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext block mb-1">
                    SEARCH HURDLE
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    검색 플랫폼 파편화
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext block mb-1">
                    COGNITIVE LOAD
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    동선 계산의 복잡성
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext block mb-1">
                    MOBILITY BARRIER
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    신체적 제약 조건 누락
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                <span className="text-primary font-bold">[ PHASE 02 ]</span>
                <span>FIELD RESEARCH &amp; ANALYSIS</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">
                2. 조사 및 분석
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                유튜브 댓글 및 여행 영상 데이터를 수집·분석하고, 온라인 설문을 통해 시니어의 여행 경험과 자유여행 준비 과정에서의 불편 요소를 파악
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                    DATA HARVESTING
                  </span>
                  <p className="font-body-md text-body-md text-on-surface font-medium mt-space-sm">
                    주요 여행 채널 12개 대상 4,200+ 댓글 텍스트 마이닝 및 장소 연관 키워드 추출
                  </p>
                  <div className="mt-space-md font-label-mono-sm text-label-mono-sm text-secondary font-bold">
                    01. YOUTUBE NLP MINING
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between">
                  <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                    SURVEY SAMPLE
                  </span>
                  <p className="font-body-md text-body-md text-on-surface font-medium mt-space-sm">
                    55세-72세 대상 심층 설문 150부 분석: &quot;가고 싶으나 이동 계획 수립 포기&quot; 68% 응답
                  </p>
                  <div className="mt-space-md font-label-mono-sm text-label-mono-sm text-secondary font-bold">
                    02. SENIOR SURVEY SAMPLING
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                <span className="text-primary font-bold">[ PHASE 03 ]</span>
                <span>STRATEGY &amp; RESOLUTION</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">
                3. 해결 방향
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                유튜브 영상 속 여행 장소를 찾고, 사용자가 선택한 여행 조건, 취향을 반영해 AI가 맞춤형 여행 코스를 추천하는 시니어 스마트가이드 제안
              </p>
              <div className="bg-surface-container-lowest p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                <div className="flex flex-col">
                  <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
                    CORE VALUE
                  </span>
                  <span className="font-headline-md text-headline-md text-primary">
                    AI 영상 매핑 &amp; 개인화 코스 엔진
                  </span>
                </div>
                <span className="px-space-md py-space-xs bg-primary text-surface font-label-mono-sm text-label-mono-sm uppercase tracking-wider">
                  VALIDATED MODEL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
        <div className="bg-primary text-on-primary p-space-lg lg:p-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-4 flex flex-col gap-space-xs">
              <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-on-primary-container">
                CONTRIBUTION &amp; SCOPE
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                나의 역할
              </h3>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <p className="font-headline-md text-headline-md text-on-primary font-normal leading-snug">
                기획, 데이터 수집 및 분석, PPT 제작, PPT 애니메이션 제작
              </p>
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <span className="px-space-sm py-1 bg-primary-container text-on-primary font-label-mono-xs text-label-mono-xs uppercase tracking-wider">
                  SERVICE PLANNING
                </span>
                <span className="px-space-sm py-1 bg-primary-container text-on-primary font-label-mono-xs text-label-mono-xs uppercase tracking-wider">
                  DATA ANALYSIS
                </span>
                <span className="px-space-sm py-1 bg-primary-container text-on-primary font-label-mono-xs text-label-mono-xs uppercase tracking-wider">
                  DECK ARCHITECTURE
                </span>
                <span className="px-space-sm py-1 bg-primary-container text-on-primary font-label-mono-xs text-label-mono-xs uppercase tracking-wider">
                  MOTION ANIMATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest text-primary hover:bg-surface-container-highest transition-colors font-label-mono-sm text-label-mono-sm uppercase tracking-wider cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">view_list</span>
            <span>03 PROJECTS 목록으로 돌아가기</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('ai-experience')}
            className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary text-surface hover:bg-secondary transition-colors font-label-mono-sm text-label-mono-sm uppercase tracking-wider cursor-pointer"
          >
            <span>NEXT: 07 AI EXPERIENCE</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
