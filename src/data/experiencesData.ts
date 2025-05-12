import type { ExpItemType } from "@/components/MainSection/ExperienceSection/ExpItem";

export const experiencesData: ExpItemType[] = [
  {
    title: "프론트엔드 부트캠프 6기",
    subtitle: ["CODEIT, 2024.03 - 2024.09 (6개월)", "팀 프로젝트 3회"],
    logoSrc: "/images/logo/codeit.jpeg",
    descs: [
      // 학습
      {
        content: "학습",
        type: "subtitle",
      },
      {
        content: "웹 브라우저 렌더링 원리 이해 (CRP, Reflow • Repaint)",
        type: "text",
      },
      {
        content: "웹 브라우저 저장소 이해 (Cookie, Storage, JWT)",
        type: "text",
      },
      {
        content:
          "JavaScript 학습 (호이스팅, 클로저, 이벤트 루프, 비동기 처리, 이벤트 버블링 • 캡처링)",
        type: "text",
      },
      {
        content: "React 학습 (Virtual DOM, 라이프사이클, Hooks)",
        type: "text",
      },
      {
        content: "TypeScript 학습 (Type, Interface, Generic, Utility Types)",
        type: "text",
      },
      // 프로젝트
      {
        content: "프로젝트",
        type: "subtitle",
      },
      {
        content: "여행 체험 상품 플랫폼 'Global-Nomad' 웹 서비스 프론트 개발",
        type: "text",
      },
      {
        content:
          "Kanban 보드를 활용한 일정 관리 플랫폼 'Taskify' 웹 서비스 프론트 개발",
        type: "text",
      },
      {
        content: '아이돌 조공 플랫폼 "Fandom-K" 웹 서비스 프론트 개발',
        type: "text",
      },
    ],
  },
  {
    title: "프론트엔드 심화과정 4기",
    subtitle: [
      "CODEIT, 2024.09 - 2024.11 (2개월)",
      "협업 프로젝트 1회 (F • B • D)",
    ],
    logoSrc: "/images/logo/codeit.jpeg",
    descs: [
      // 학습
      {
        content: "학습",
        type: "subtitle",
      },
      {
        content:
          "Tailwind CSS 학습 (유틸리티 클래스 기반 스타일링, 커스텀 스타일, 다크모드)",
        type: "text",
      },
      {
        content: "테스트 학습 (Jest, React Testing Library)",
        type: "text",
      },
      {
        content:
          "CI/CD 학습 (자동 빌드 • 배포 시스템, GitHub Actions, Cypress)",
        type: "text",
      },
      // 프로젝트
      {
        content: "프로젝트",
        type: "subtitle",
      },
      {
        content:
          '취미 활동 모임 플랫폼 "Manchui" 웹 프론트 개발 (백엔드 • 디자인팀과의 협업 경험)',
        type: "text",
      },
    ],
  },
];
