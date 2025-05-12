import type { ProjectItemType } from "@/types";

export const projectsData: ProjectItemType[] = [
  {
    title: "Manchui(만취)",
    description: `만명이 함께하는 취미 활동 모임 플랫폼`,
    details: [
      { content: "프로젝트 세팅", type: "subtitle" },
      {
        content:
          "ESLint, Prettier 규칙을 커스텀하여 코드 품질 자동화 및 개발자 경험(DX) 향상",
        type: "text",
      },
      {
        content:
          "Tailwind CSS config 커스텀으로 일관된 디자인 시스템 구축 및 유지보수성 향상",
        type: "text",
      },
      { content: "성능 최적화 (Lighthouse 60점 -> 96점)", type: "subtitle" },
      {
        content:
          "Code Splitting과 이미지 최적화를 적용하여 초기 로딩 시간 2.8s~0.2s(90%) 단축",
        type: "text",
      },
      {
        content:
          "bundle-analyzer를 통한 프로젝트 번들 크기 최적화 진행, lottie-light-react와 같은 가벼운 라이브러리 교체 및 트리 쉐이킹, type only import를 통한 번들 사이즈 25% 감소",
        type: "text",
      },
      {
        content:
          "페이지별 SEO 관리를 위한 재사용 가능한 메타 태그 컴포넌트 구현 및 SEO 최적화",
        type: "text",
      },
      {
        content:
          "Tanstack Query의 캐싱 전략과 데이터 프리페칭을 통해 초기 로딩 시간 감소",
        type: "text",
      },
      { content: "메인 페이지", type: "subtitle" },
      {
        content:
          "실시간 모임 데이터를 위해 Offset 기반에서 Cursor 기반 페이지네이션으로 전환하여 데이터 중복, 누락등의 문제 개선 및 무한 스크롤 구현",
        type: "text",
      },
      {
        content: "검색창 최적화를 통해 무분별한 API 호출 억제",
        type: "text",
      },
      {
        content: "JavaScript Date를 이용한 캘린더 컴포넌트 개발",
        type: "text",
      },
      {
        content: "효율적인 상태 관리를 위해 Zustand 도입 및 전역 상태 관리",
        type: "text",
      },
      {
        content:
          "즉각적인 피드백 위해 낙관적 업데이트 패턴 도입 찜하기 기능 구현",
        type: "text",
      },
      { content: "GNB", type: "subtitle" },
      {
        content:
          "실시간 알림 시스템 기능을 위한 SSE(Server-Sent-Event) 기반 데이터 스트리밍 구현",
        type: "text",
      },
      {
        content:
          "모바일 사용성 개선을 위해 제스처(스와이프) 기반 알림 삭제 기능 구현",
        type: "text",
      },
      {
        content: "즉각적인 피드백 위해 낙관적 업데이트 패턴 적용",
        type: "text",
      },
      { content: "모임 상세 페이지", type: "subtitle" },
      {
        content: "실시간 소통을 위한 Websocket 기반 채팅 시스템 구축",
        type: "text",
      },
      {
        content: "사용자 경험을 위한 익숙한 kakao 기반 채팅 디자인 시스템 구현",
        type: "text",
      },
      { content: "애니메이션 및 페이지 전환", type: "subtitle" },
      {
        content:
          "Next.js getLayout 패턴을 활용한 페이지별 레이아웃 컴포넌트 구현",
        type: "text",
      },
      {
        content: "Framer Motion을 활용한 부드러운 페이지 전환 애니메이션 구현",
        type: "text",
      },
    ],
    image: "/images/projects/manchui.png",
    link: "https://github.com/Manchui/Frontend",
    skills: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Tanstack Query",
      "WebSocket",
      "SSE",
      "Framer Motion",
    ],
    cateTag: "협업 프로젝트",
  },
  {
    title: "Global-Nomad",
    description: `여행을 더욱 특별하게 만들어줄 체험 플랫폼`,
    details: [
      { content: "프로젝트 세팅", type: "subtitle" },
      {
        content:
          "초기 프로젝트 세팅 시 ESLint, Prettier 규칙을 커스텀하여 코드 품질 자동화 및 개발자 경험(DX) 향상",
        type: "text",
      },
      {
        content:
          "Tailwind CSS config 확장 관리로 일관된 디자인 시스템 구축 및 유지보수성 향상",
        type: "text",
      },
      { content: "성능 최적화", type: "subtitle" },
      {
        content:
          "Tanstack Query의 캐싱 전략과 데이터 프리페칭을 통해 초기 로딩 시간 2.5s에서 0.9s로 64% 개선",
        type: "text",
      },
      {
        content:
          "Next.js Image, Dynamic import를 활용한 이미지 최적화로 LCP(Largest Contentful Paint) 5.2s에서 0.9s로 83% 단축",
        type: "text",
      },
      {
        content:
          "스켈레톤 UI 도입으로 사용자 체감 로딩 시간 개선 및 CLS 0으로 수렴",
        type: "text",
      },
      {
        content:
          "React.memo, useCallback 등을 활용한 메모이제이션으로 불필요한 리렌더링 최소화",
        type: "text",
      },
      { content: "메인페이지", type: "subtitle" },
      {
        content:
          "번들 사이즈(~7KB)가 작고 제스처 지원이 우수한 embla-carousel 도입으로 성능과 사용자 경험 최적화",
        type: "text",
      },
      {
        content:
          "Zustand를 활용한 전역 상태 관리로 검색, 필터링, 정렬 기능 모듈화",
        type: "text",
      },
      {
        content:
          "Offset 기반 페이지네이션으로 무한 스크롤 구현 대량의 체험 데이터 효율적 로딩",
        type: "text",
      },
      {
        content:
          "디바이스 크기에 따른 동적 데이터 페칭으로 불필요한 API 호출 최소화 (window.innerWidth 감지 커스텀 훅 제작)",
        type: "text",
      },
      { content: "그 외 구현", type: "subtitle" },
      {
        content:
          "createPortal을 활용한 모달 컴포넌트 제작 및 useModal 커스텀 훅 개발로 재사용성 향상",
        type: "text",
      },
      {
        content:
          "모달 컴포넌트를 활용한 후기 작성 시스템 구현으로 사용자 경험 개선",
        type: "text",
      },
      {
        content:
          "JSDoc을 활용한 컴포넌트 및 커스텀 훅 문서화로 코드 가독성과 유지보수성 향상",
        type: "text",
      },
    ],
    image: "/images/projects/globalnomad.png",
    link: "https://github.com/part4-team9/global-nomad",
    skills: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Tanstack Query",
      "Embla Carousel",
    ],
    cateTag: "부트캠프 프로젝트",
  },
  {
    title: "Taskify",
    description: `Kanban 보드를 활용하여 효과적으로 일정을 관리할 수 있는 플랫폼`,
    details: [
      { content: "재사용 가능한 컴포넌트 구현", type: "subtitle" },
      {
        content:
          "합성 컴포넌트 패턴 도입 Button, Modal 등 공통 컴포넌트의 불필요한 리렌더링 최소화, 재사용성 향상",
        type: "text",
      },
      {
        content:
          "TypeScript 활용해 컴포넌트의 타입을 명확히 정의하여 타입 안정성 확보",
        type: "text",
      },
      { content: "할 일 관리 시스템 구현", type: "subtitle" },
      {
        content: "할 일 카드의 생성/수정 기능 구현 및 반응형 UI/UX 설계",
        type: "text",
      },
      {
        content:
          "TanStack Query를 활용한 서버 상태 관리로 데이터 캐싱 및 실시간 동기화 구현",
        type: "text",
      },
      {
        content:
          "Jotai를 활용한 효율적인 전역 상태 관리로 컴포넌트 간 데이터 공유 최적화",
        type: "text",
      },
      {
        content:
          "쿼리 무효화 전략을 통한 실시간 데이터 업데이트로 사용자 경험 개선",
        type: "text",
      },
    ],
    image: "/images/projects/taskify.png",
    link: "https://github.com/Team2-project/taskify",
    skills: ["ReactJS", "TypeScript", "Tanstack Query", "Jotai", "TailwindCSS"],
    cateTag: "부트캠프 프로젝트",
  },
  {
    title: "SurvForm",
    description: `온라인 설문지 생성, 공유 및 수집된 데이터 차트를 통한 분석 플랫폼`,
    details: [
      { content: "프로젝트 환경 구축", type: "subtitle" },
      {
        content:
          "Vite를 활용한 빠른 개발 환경 구축 및 TypeScript 설정으로 타입 안정성 확보",
        type: "text",
      },
      {
        content: "Tailwind CSS를 활용한 반응형 디자인 시스템 구축",
        type: "text",
      },
      { content: "핵심 기능 구현", type: "subtitle" },
      {
        content:
          "React Hook Form을 활용한 동적 폼 생성 및 유효성 검사 시스템 구현",
        type: "text",
      },
      {
        content: "Recharts를 활용한 데이터 시각화 및 분석 기능 구현",
        type: "text",
      },
      {
        content:
          "Firebase를 활용한 실시간 데이터 동기화 및 사용자 인증 시스템 구현",
        type: "text",
      },
      { content: "성능 최적화", type: "subtitle" },
      {
        content: "React.memo와 useCallback을 활용한 컴포넌트 최적화",
        type: "text",
      },
      {
        content: "Code Splitting을 통한 초기 로딩 시간 개선",
        type: "text",
      },
    ],
    image: "/images/projects/survform.png",
    link: "https://github.com/edhcoding/SurvForm",
    skills: [
      "ReactJS",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "React Hook Form",
      "Recharts",
      "Firebase",
    ],
    cateTag: "사이드 프로젝트",
  },
  {
    title: "Fandom-K",
    description: `아이돌 조공 플랫폼`,
    details: [
      { content: "프로젝트 환경 구축", type: "subtitle" },
      {
        content: "React와 TypeScript를 활용한 웹 애플리케이션 개발",
        type: "text",
      },
      {
        content:
          "ESLint, Prettier, StyleLint를 통한 코드 품질 관리 및 일관된 코딩 스타일 유지",
        type: "text",
      },
      { content: "핵심 기능 구현", type: "subtitle" },
      {
        content: "Axios 모듈화를 통한 API 통신 최적화 및 재사용성 향상",
        type: "text",
      },
      {
        content:
          "useRequest 커스텀 훅을 통한 비동기 요청 상태 관리 및 에러 핸들링 구현",
        type: "text",
      },
      {
        content:
          "합성 컴포넌트 패턴을 활용한 Button, Modal 등 재사용 가능한 UI 컴포넌트 구현",
        type: "text",
      },
      {
        content:
          "Jotai를 활용한 전역 상태 관리 및 localStorage 연동으로 크레딧 시스템 구현",
        type: "text",
      },
      { content: "성능 최적화", type: "subtitle" },
      {
        content:
          "Webp 이미지 포맷 변환 및 Intersection Observer API를 활용한 Lazy Loading 구현",
        type: "text",
      },
      {
        content: "Skeleton UI를 통한 로딩 상태 개선 및 사용자 경험 향상",
        type: "text",
      },
      { content: "주요 기능", type: "subtitle" },
      {
        content: "크레딧 충전 및 후원 시스템 구현",
        type: "text",
      },
      {
        content: "이달의 차트 투표 시스템 및 실시간 순위 업데이트",
        type: "text",
      },
      {
        content: "마이페이지에서 관심 있는 아이돌 관리 기능 구현",
        type: "text",
      },
      {
        content: "반응형 디자인을 통한 PC, 태블릿, 모바일 환경 지원",
        type: "text",
      },
    ],
    image: "/images/projects/fandomk.png",
    link: "https://github.com/edhcoding/Fandom-k",
    skills: [
      "ReactJS",
      "TypeScript",
      "Axios",
      "Jotai",
      "SCSS",
      "ESLint",
      "Prettier",
      "StyleLint",
    ],
    cateTag: "부트캠프 프로젝트",
  },
];
