import type { PagePath } from '../types/portfolio';

interface AiExperienceScreenProps {
  onNavigate: (path: PagePath) => void;
}

export function AiExperienceScreen({ onNavigate }: AiExperienceScreenProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Top Progress & Dossier Status Header */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-md border-b border-architectural-hairline flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-surface-bright">
        <div className="flex items-center gap-space-md font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext">
          <span className="text-on-surface font-semibold">
            [ SECTION 07 // EXPLORATION ]
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">
            STATUS: RECEPTACLE ARCHIVE (IN PROGRESS)
          </span>
        </div>
        <div className="flex items-center gap-space-md font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
          <span className="inline-block w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-on-surface">SYNTHESIS LAB : STAGE 07</span>
          <span>INDEX REF 2026.AI</span>
        </div>
      </section>

      {/* Hero Editorial Banner */}
      <section className="w-full px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-3 flex flex-col gap-space-xs">
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-secondary font-medium tracking-widest">
              07 / AI EXPERIENCE
            </span>
            <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
              COMPUTATIONAL DESIGN &amp; WORKFLOWS
            </span>
          </div>
          <div className="lg:col-span-9 flex flex-col gap-space-md">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-display-xl lg:font-display-xl text-on-surface tracking-tight leading-[1.05]">
              LG DX 커리큘럼 기반
              <br className="hidden sm:inline" /> 실무 워크플로우와 인공지능 탐구
            </h1>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-muted-subtext font-label-mono-xs text-label-mono-xs uppercase tracking-widest">
              <span>BX BUSINESS EXPERIENCE</span>
              <span>/</span>
              <span>CX CUSTOMER EXPERIENCE</span>
              <span>/</span>
              <span>DX DIGITAL EXPERIENCE</span>
              <span>/</span>
              <span className="text-secondary font-medium">
                PRACTICAL SYNTHESIS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Dossier Frame */}
      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
        <div className="border border-architectural-hairline bg-surface-container-low p-space-md lg:p-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-architectural-hairline gap-space-xs mb-space-lg">
            <div className="flex items-center gap-space-sm font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext">
              <span className="w-2 h-2 bg-secondary rounded-full inline-block animate-pulse" />
              <span className="font-semibold text-on-surface">
                APPLICATION DOSSIER // PRACTICAL PROJECT APPLICATION
              </span>
              <span>|</span>
              <span>실제 프로젝트 적용 및 실무 활용</span>
            </div>
            <span className="border border-architectural-hairline px-2 py-0.5 bg-surface text-secondary font-label-mono-xs text-label-mono-xs uppercase tracking-widest font-medium self-start sm:self-auto">
              PROJECT SYNTHESIS VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <span className="font-label-mono-xs text-label-mono-xs uppercase text-muted-subtext tracking-widest">
                METHODOLOGY INTEGRATION
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight leading-tight">
                커리큘럼 학습 역량의
                <br />
                포트폴리오 실무 투영
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                LG DX 과정을 통해 체득한 데이터 수집, 인공지능 머신러닝/딥러닝 모델링, 풀스택 서비스 구축 아키텍처를 실제 고객 중심 프로덕트 개발에 유기적으로 연결하였습니다.
              </p>
              <div className="flex items-center gap-space-xs text-muted-subtext font-label-mono-xs text-label-mono-xs uppercase pt-space-xs border-t border-architectural-hairline">
                <span>STATUS: CROSS-PROJECT DEPLOYMENT</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <button
                type="button"
                onClick={() => onNavigate('project-cx')}
                className="bg-surface p-space-md border border-architectural-hairline flex flex-col justify-between group hover:border-primary transition-colors text-left cursor-pointer"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext mb-space-xs uppercase">
                    <span>PROJECT 01 // CX FOCUS</span>
                    <span className="text-secondary font-medium">
                      DCX + AI
                    </span>
                  </div>
                  <h4 className="font-headline-md text-[20px] text-on-surface tracking-tight group-hover:text-secondary transition-colors">
                    우렁각시 : 가사 도우미 서비스
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    5D 프로세스 기반 고객 여정 맵핑 및 텍스트마이닝을 활용한 VOC 분석. 고객 리뷰 데이터 전처리 및 감성 분석을 통해 도우미 매칭 신뢰도 알고리즘 프로토타입 설계.
                  </p>
                  <div className="py-space-xs px-space-sm bg-surface-container-low border border-architectural-hairline font-label-mono-xs text-label-mono-xs text-muted-subtext">
                    <span className="text-on-surface font-medium block mb-0.5">
                      [프로젝트 적용 상세]
                    </span>
                    <span>
                      고객 경험 데이터 정제 · 텍스트마이닝 감성 분류 모델 연계 실증
                    </span>
                  </div>
                </div>
                <div className="pt-space-sm border-t border-architectural-hairline mt-space-md flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase w-full">
                  <span>CASE REFERENCE: CX-01</span>
                  <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    DEPLOYED →
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('project-dx')}
                className="bg-surface p-space-md border border-architectural-hairline flex flex-col justify-between group hover:border-primary transition-colors text-left cursor-pointer"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext mb-space-xs uppercase">
                    <span>PROJECT 02 // DX FOCUS</span>
                    <span className="text-secondary font-medium">
                      SPRING + FLUTTER + AI
                    </span>
                  </div>
                  <h4 className="font-headline-md text-[20px] text-on-surface tracking-tight group-hover:text-secondary transition-colors">
                    시니어 스마트가이드
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    고령층 디지털 소외 해소를 위한 음성/비전 인공지능 기반 직관 인터페이스 구현. Java Spring 백엔드와 Flutter 프론트엔드 연동, 클라우드 환경 배포 파이프라인 적용.
                  </p>
                  <div className="py-space-xs px-space-sm bg-surface-container-low border border-architectural-hairline font-label-mono-xs text-label-mono-xs text-muted-subtext">
                    <span className="text-on-surface font-medium block mb-0.5">
                      [프로젝트 적용 상세]
                    </span>
                    <span>
                      경량 딥러닝 인터페이스 · AWS 클라우드 웹·앱 인터랙션 구현
                    </span>
                  </div>
                </div>
                <div className="pt-space-sm border-t border-architectural-hairline mt-space-md flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase w-full">
                  <span>CASE REFERENCE: DX-02</span>
                  <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    DEPLOYED →
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Editorial Curriculum Grid */}
      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
        <div className="border-t border-architectural-hairline pt-space-lg mb-space-lg flex items-baseline justify-between gap-space-sm flex-wrap">
          <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-muted-subtext">
            LG DX CURRICULUM ARCHITECTURE &amp; SYLLABUS SPECIFICATION
          </span>
          <span className="font-label-mono-xs text-label-mono-xs uppercase text-secondary font-medium">
            [ 03 DISCIPLINARY DOMAINS ]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-architectural-hairline divide-y md:divide-y-0 md:divide-x divide-architectural-hairline">
          {/* Module 01 */}
          <div className="flex flex-col justify-between p-space-md lg:p-space-lg bg-surface hover:bg-surface-container-low transition-colors min-h-[300px]">
            <div>
              <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext mb-space-lg uppercase">
                <span>CURRICULUM // 01</span>
                <span className="material-symbols-outlined text-[16px]">
                  query_stats
                </span>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm uppercase text-secondary tracking-widest block mb-space-xs">
                01. BX | BUSINESS EXPERIENCE
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-xs">
                데이터 활용 기초
              </h2>
              <p className="font-body-sm text-body-sm text-muted-subtext mb-space-md">
                비즈니스 문제 정의 및 체계적 데이터 수집·시각화 인프라 이해
              </p>
              <div className="py-space-md px-space-md bg-surface-container-low border border-architectural-hairline">
                <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-wider text-muted-subtext block mb-space-xs">
                  CORE SYLLABUS
                </span>
                <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    5D Process
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    Python 프로그래밍
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    웹 크롤링 &amp; 데이터 수집
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    데이터 시각화 (Visualization)
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    데이터베이스(DB) 기초 &amp; SQL
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg border-t border-architectural-hairline mt-space-lg flex items-center justify-between text-muted-subtext font-label-mono-xs text-label-mono-xs uppercase">
              <span>BUSINESS ARCHITECTURE</span>
              <span>MODULE.01</span>
            </div>
          </div>

          {/* Module 02 */}
          <div className="flex flex-col justify-between p-space-md lg:p-space-lg bg-surface hover:bg-surface-container-low transition-colors min-h-[300px]">
            <div>
              <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext mb-space-lg uppercase">
                <span>CURRICULUM // 02</span>
                <span className="material-symbols-outlined text-[16px]">
                  psychology
                </span>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm uppercase text-secondary tracking-widest block mb-space-xs">
                02. CX | CUSTOMER EXPERIENCE
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-xs">
                데이터 기반 고객 경험 분석 및 설계
              </h2>
              <p className="font-body-sm text-body-sm text-muted-subtext mb-space-md">
                정량·정성 고객 데이터 분석을 통한 인사이트 도출과 AI 알고리즘 접목
              </p>
              <div className="py-space-md px-space-md bg-surface-container-low border border-architectural-hairline">
                <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-wider text-muted-subtext block mb-space-xs">
                  CORE SYLLABUS
                </span>
                <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    DCX 고객 경험 설계 프레임워크
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    텍스트마이닝 &amp; 자연어 처리
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    머신러닝 및 딥러닝 기초
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    데이터 전처리 및 탐색적 분석(EDA)
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    고객 경험 데이터 기반 인사이트 도출
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg border-t border-architectural-hairline mt-space-lg flex items-center justify-between text-muted-subtext font-label-mono-xs text-label-mono-xs uppercase">
              <span>ANALYTICS &amp; COGNITION</span>
              <span>MODULE.02</span>
            </div>
          </div>

          {/* Module 03 */}
          <div className="flex flex-col justify-between p-space-md lg:p-space-lg bg-surface hover:bg-surface-container-low transition-colors min-h-[300px]">
            <div>
              <div className="flex items-center justify-between font-label-mono-xs text-label-mono-xs text-muted-subtext mb-space-lg uppercase">
                <span>CURRICULUM // 03</span>
                <span className="material-symbols-outlined text-[16px]">
                  terminal
                </span>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm uppercase text-secondary tracking-widest block mb-space-xs">
                03. DX | DIGITAL EXPERIENCE
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-xs">
                서비스 구현 기술 학습
              </h2>
              <p className="font-body-sm text-body-sm text-muted-subtext mb-space-md">
                현대 웹·앱 아키텍처 및 클라우드 인프라를 아우르는 엔드투엔드 개발
              </p>
              <div className="py-space-md px-space-md bg-surface-container-low border border-architectural-hairline">
                <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-wider text-muted-subtext block mb-space-xs">
                  CORE SYLLABUS
                </span>
                <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    Java 프로그래밍 &amp; 객체지향 설계
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    Spring Framework 백엔드 구축
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    Flutter 크로스플랫폼 앱 개발
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    딥러닝 모델 서빙 &amp; 추론
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    클라우드 및 AWS 인프라 배포
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    웹·앱 실무 서비스 통합 구현
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg border-t border-architectural-hairline mt-space-lg flex items-center justify-between text-muted-subtext font-label-mono-xs text-label-mono-xs uppercase">
              <span>ENGINEERING &amp; DEPLOYMENT</span>
              <span>MODULE.03</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Manifesto & Human-AI Collaboration Note */}
      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
        <div className="bg-primary-container text-on-primary p-space-lg lg:p-space-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  height="40"
                  id="ai-draft-grid"
                  patternUnits="userSpaceOnUse"
                  width="40"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect fill="url(#ai-draft-grid)" height="100%" width="100%" />
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-3 flex flex-col justify-between gap-space-md border-b lg:border-b-0 lg:border-r border-on-primary-container/20 pb-space-md lg:pb-0 lg:pr-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-mono-xs text-label-mono-xs uppercase tracking-widest text-on-primary-container">
                  MANIFESTO ENTRY
                </span>
                <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-primary tracking-wider">
                  COLLABORATION LOG
                </span>
              </div>
              <div className="font-label-mono-xs text-label-mono-xs text-on-primary-container uppercase">
                PARADIGM: HUMAN AGENCY + SYNTHETIC SPEED
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-space-lg">
              <blockquote className="font-headline-md text-headline-md lg:text-headline-lg lg:font-headline-lg tracking-tight leading-snug text-on-primary font-light">
                “인공지능은 창작의 주체를 대체하는 것이 아니라, 사고의 스케일을 확장하고 실험의 한계를 허무는 가장 정밀한 지적 컴패니언입니다. 인간의 직관과 기계의 연산이 만나는 지점에서 전례 없는 디자인 솔루션이 시작됩니다.”
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-md border-t border-on-primary-container/20 font-label-mono-xs text-label-mono-xs text-on-primary-container uppercase tracking-wider">
                <span>— HUMAN-AI SYMBIOSIS PROTOCOL 2026</span>
                <div className="flex items-center gap-space-md">
                  <span>LATENT DENSITY: 100%</span>
                  <span className="inline-block w-1.5 h-1.5 bg-secondary-fixed rounded-full" />
                  <span className="text-on-primary">VERIFIED DISCIPLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Bottom Navigation */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl border-t border-architectural-hairline bg-surface">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="group flex items-center gap-space-md py-space-sm px-space-md border border-architectural-hairline hover:border-primary transition-colors text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <div className="flex flex-col text-left">
              <span className="font-label-mono-xs text-label-mono-xs text-muted-subtext uppercase">
                RETURN SEQUENCE
              </span>
              <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider font-semibold">
                ← 03 PROJECTS
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-space-xs font-label-mono-xs text-label-mono-xs text-muted-subtext tracking-widest uppercase">
            <span>ARCHIVE PAGE 07 / 08</span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('closing')}
            className="group flex items-center justify-between sm:justify-end gap-space-md py-space-sm px-space-md bg-primary text-surface hover:bg-secondary transition-colors cursor-pointer"
          >
            <div className="flex flex-col text-left sm:text-right">
              <span className="font-label-mono-xs text-label-mono-xs text-surface/70 uppercase">
                NEXT SEQUENCE
              </span>
              <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider font-semibold">
                NEXT: 08 CLOSING →
              </span>
            </div>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
