export type PagePath =
  | 'cover'
  | 'about-me'
  | 'projects'
  | 'project-bx'
  | 'project-cx'
  | 'project-dx'
  | 'ai-experience'
  | 'closing';

export interface PortfolioData {
  creatorName: string;
  oneLiner: string;
  bxTitle: string;
  bxSubtitle: string;
  bxSynopsis: string;
  bxRole: string;
  bxPhase1: string;
  bxPhase2: string;
  bxPhase3: string;
  bxImageUrl: string;
  phone: string;
  email: string;
}

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  creatorName: '',
  oneLiner: '',
  bxTitle: '[추후 입력]',
  bxSubtitle: '브랜드 경험 디자인 프로젝트 [추후 입력]',
  bxSynopsis:
    '[프로젝트 소개: 브랜드 경험의 정체성을 재정의하고 시각 언어를 통합하는 종합 케이스스터디 - 추후 입력]',
  bxRole: '[추후 입력]',
  bxPhase1: '[내용 수정 중 - 추후 입력]',
  bxPhase2: '[내용 수정 중 - 추후 입력]',
  bxPhase3: '[내용 수정 중 - 추후 입력]',
  bxImageUrl: '',
  phone: '[추후 입력]',
  email: '[추후 입력]',
};

export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
}

export const HOTLINKED_IMAGES = {
  cxCard:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB5l_7ZUREfFPv1VfXIPvtDBGnQd_qL2JX4-atCn-SdNoivOv6tuS6Bv2fURgwclVr0l6wMOCXCG8JlLM5WsxiEd5ow7G98kl0QmI8TcmSHSKipi8saTV4rGTwTg6izX7WV8XCrKGKIozKeYvBE_851ymCK4a9d_eZKeLaTfYFW8e2udqqjxOvKqj-Ho055m8bmqcoNay0fhgqYoucmkbO2jkQlcBlqApl5i-hXQGc',
  cxDetail:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDf3VsiNbQpFMrI-kAWWI7gWGvXqzCsB6V90LMbZ5mEBQ28f7mjyNYF3FigXh2N4qb1ywVrz28J-loSvQ4vctN83k_5JFhT2xTFU3dhejwvfYidqFi5_L0X2GJgJHpK_O9oK5kk9hHACrdxZ51Ru8PHiXKa5gEWMEcTMjm5953v2sJKSR57SjsjQ6pz8B_Fo-e7yRwCehWjKE4GYY0QNL1UO8-i7vvbMEXfCaYbBH8',
  dxCard:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCXiSDZSfxvDgbL2VyDu9efF_5yXLuQ5E1ybOaDygJmuWj7mGdbVlGzyvmZiA6YroQ_q4kH0c4QqZvhPpRIHMzDzmnWuohNR8GoXNv3JPytjHT3yKz_LgAEDPo7GRtX_eE7LiidIrbOQshXBvQoEA8m3y-Hc3J6dJbit4VIiyv3RF7MGUVUTLKQpWWKq7HcnSWYNrrYYNkMKjsdIwdT_lU9lXcsluIXq5PPtoCtogQ',
  dxDetail:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBXPYCK_TLDR_bmaAzOeH7BW9GABYiWnm2P0xQXAkNbejiXxN8HpSqf4g4_DGFUOzq0ybzYmF6JpM8uFXhSesZ4RaStafB8Udh2jKG2KZu4iRfy82TYUfE3hgu5tEuk7krbiNbiHoGcCdnWcptmCAxP9yD74DAni96qPlNZyEwbJs_G3sU5qUmiJgSid2XRPs1EdW4Rb9HoRY0xB53haUquyeIN0b1cauNnAhejWA8',
} as const;
