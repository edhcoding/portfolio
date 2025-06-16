import type { ProjectItemType } from "@/types";

export const projectsData: ProjectItemType[] = [
  // 0
  {
    title: "DevLink",
    description: `나만의 커스텀 프로필 링크를 만들고 공유할 수 있는 서비스`,
    details: [
      { content: "Next.js App Router", type: "subtitle" },
      {
        content:
          "서버 컴포넌트를 활용한 데이터 패칭 및 서버 사이드 렌더링 구현으로 로딩 성능 최적화",
        type: "text",
      },
      {
        content:
          "서버 액션을 사용해 서버 측에서 폼 데이터 및 비동기 데이터 안전하게 처리",
        // API 엔드포인트 없이, 함수 호출만으로 클라이언트에서 서버 사이드 로직 처리 가능
        // 상태 관리 및 폼 처리에 유용 - 폼 제출시 API 라우트 없이도 서버에서 폼 데이터 처리 가능
        // 보안 - 클라이언트에서 직접 API 요청을 보낼 필요가 없기에, 민감한 데이터 노출 위험이 줄어든다.
        // 굳이 서버 액션을 사용하는 이유가 뭘까?
        // - Server Action는 (회사 내에서 만든) 자체 API를 사용할 때 fetch를 사용하지 않고도 효율적인 방식으로 가져올 수 있는 것이고, 외부 API를 불러올 때는 기존 방식과 동일하게 fetch 또는 axios 를 사용해야한다.
        type: "text",
      },
      {
        content:
          "generateMetadata를 활용해 사용자 프로필에 따른 동적 메타데이터 생성 및 SEO 최적화",
        type: "text",
      },

      { content: "인증 및 보안", type: "subtitle" },
      {
        content: "미들웨어를 통한 인증 상태 확인 및 보호된 라우트 접근 제어",
        type: "text",
      },
      {
        content:
          "Row Level Security (RLS)로 데이터베이스 접근 권한 제어 및 Aho-Corasick 알고리즘을 활용한 욕설 필터링 구현",
        type: "text",
      },
      {
        content:
          "React Hook Form과 Zod를 활용한 타입 안전한 폼 처리 및 커스텀 에러 메시지 구현",
        type: "text",
      },
      {
        content: "Google, GitHub OAuth 인증 지원",
        type: "text",
      },

      { content: "사용자 경험 (UX)", type: "subtitle" },
      {
        content:
          "ShadcnUI를 활용한 직관적이고 부드러운 애니메이션 구현 및 토스트 메시지를 통한 상황별 사용자 피드백 제공",
        type: "text",
      },
      {
        content:
          "시스템 설정에 따른 자동 테마 전환 지원 및 링크 복사, QR 코드 생성 및 다운로드, QR Scanner 기능 구현",
        type: "text",
      },

      { content: "로딩 및 에러 처리", type: "subtitle" },
      {
        content: "Suspense와 Skeleton UI를 활용한 자연스로운 데이터 로딩 처리",
        type: "text",
      },
      {
        content: "ErrorBoundary와 Error 페이지 구현을 통한 전역 에러 처리",
        type: "text",
      },
      {
        content: "404 페이지 및 인증 오류 페이지 구현으로 사용자 경험 개선",
        type: "text",
      },
    ],
    image: "/images/projects/devlink.webp",
    link: "https://github.com/edhcoding/DevLink",
    skills: [
      "ReactJS",
      "NextJS App Router",
      "TypeScript",
      "ShadcnUI",
      "TailwindCSS",
      "React Hook Form",
      "Zod",
      "QR Code & QR Scanner",
    ],
    cateTag: "사이드 프로젝트",
  },
  // 1
  {
    title: "Manchui(만취)",
    description: `만명이 함께하는 취미 활동 모임 플랫폼`,
    details: [
      { content: "프로젝트 세팅", type: "subtitle" },
      {
        content:
          "팀장 역할을 맡아 프로젝트 세팅 및 Notion을 활용한 문서화, 일정 관리 등 문서화하여 팀 협업 효율과 개발 생산성을 향상",
        // 프로젝트 초기 세팅을 주도했으며, Notion을 활용한 컨벤션 정의 및 프로젝트 일정 관리, 문서화 진행
        // 특히 ESLint, Prettier 규칙을 커스텀하여 일관된 코드 품질과 스타일 유지 및 JSDoc을 활용한 컴포넌트 문서화로 DX(개발자 경험) 향상
        type: "text",
      },
      {
        content:
          "ESLint, Prettier, Tailwind CSS 등 다양한 툴을 커스텀하여 일관된 코드 품질/스타일과 JSDoc을 활용한 컴포넌트 문서화로 DX(개발자 경험) 향상",
        // 기존 Tailwind CSS 설정에서 폰트, 색상, 미디어 쿼리 등 커스텀해 일관된 디자인 시스템 구축
        type: "text",
      },

      { content: "주요 기능 개발", type: "subtitle" },
      {
        content:
          "SSE(Server-Sent-Event)와 WebSocket을 활용한 실시간 알림, 채팅 구현",
        /**
         * 실시간 알림과 채팅을 위해 SSE와 WebSocket을 각각 활용했습니다. SSE는 단방향 알림에 적합하고, WebSocket은 양방향 채팅에 적합하다는 점을 고려하여 선택했습니다.
         * SSE
         * - 서버에서 클라이언트로 단방향 실시간 데이터 스트리밍을 가능하게 하는 기술입니다.
         * - HTTP 프로토콜을 기반으로 하며, 서버가 클라이언트에게 자동으로 데이터를 푸시할 수 있습니다.
         * - 만취 프로젝트에서는 SSE를 실시간 알림 시스템에 활용했습니다. 사용자가 새로운 알림을 받았을 때, 서버가 클라이언트에게 자동으로 알림 데이터를 전송하고, 클라이언트는 이를 실시간으로 알림을 렌더링하는 방식으로 구현했습니다.
         *
         * WebSocket
         * - 클라이언트와 서버 간의 양방향 실시간 통신을 가능하게 하는 프로토콜입니다.
         * - HTTP와 달리 한 번의 연결로 지속적인 양방향 통신이 가능합니다.
         * - 만취 프로젝트에서는 WebSocket을 실시간 채팅 시스템에 활용했습니다. 사용자들이 모임 채팅방에서 메시지를 주고받을 때, 서버와 클라이언트 간의 지속적인 양방향 통신이 필요했기 때문입니다.
         */
        type: "text",
      },
      {
        content:
          "실시간 데이터 변동에 대응하기 위해, 기존 Offset 기반에서 Cursor 기반 페이지네이션으로 제안 및 변경. 이를 통해 데이터 변동에도 안정적인 무한 스크롤 구현",
        /**
         * Offset 기반 페이지네이션
         * - 데이터베이스에서 특정 위치(offset) 부터 일정 개수(limit)만큼 데이터를 가져오는 방식입니다.
         * - 장점은 구현이 간단하고 직관적이지만 단점으로 데이터가 삭제/추가가 발생할 때 중복이나 누락이 발생 가능함
         * Cursor 기반 페이지네이션
         * - 특정 기준점(cursor)을 기준으로 그 이후의 데이터를 가져오는 방식입니다.
         * - 장점으로는 실시간 데이터 변동에 안정적이고 무한 스크롤 구현에 적합합니다. 단점으로는 구현이 상대적으로 복잡하다는 단점이 있습니다.
         */
        type: "text",
      },
      {
        content:
          "Zustand를 활용한 모임 관련 상태를 전역에서 관리하여 상태 로직을 모듈화하고 유지보수성 향상",
        /**
         * Zustand를 선택한 이유
         * - 빠른 프로토타입 개발을 하기 위해 러닝 커브가 비교적 낮고 보일러플레이트 코드가 없음(provider), 더 작은 번들 사이즈(Redux, recoil 보다 작음), 커뮤니티 생태계가 크기에 더 많은 자료 존재
         */
        type: "text",
      },
      {
        content:
          "컴포넌트와 루트 레벨에 ErrorBoundary를 이용하여 API 에러 처리 및 에러 페이지 구현으로 UX 개선",
        type: "text",
      },
      {
        content:
          "Tanstack Query onError 콜백과 Toastify 기반의 Toast 컴포넌트를 구현해 사용자 친화적인 에러 알림과 에러 로깅으로 UX와 DX 동시 개선",
        type: "text",
      },
      {
        content:
          "찜하기 버튼, 알림 삭제 버튼에 낙관적 업데이트 패턴 도입 및 제스처 기반 알림삭제 기능 개발로 UX 개선 및 크로스 플랫폼 호환을 위해 고민",
        // MouseEvent, TouchEvent를 통합 관리하는 커스텀 훅을 구현하여 제스처 기반 알림삭제 기능 개발 및 크로스 플랫폼 호환을 위해 고민
        /**
         * 사용자 경험을 개선하기 위해 낙관적 업데이트 패턴을 적용하였습니다.
         *
         * useMutaion의 onMutate 콜백을 통해 (mutation이 실행되기 전)
         * - cancelQueries로 진행 중인 쿼리 요청을 취소
         * - getQueryData로 현재 상태를 저장해두어 롤백이 필요할 때 사용할 수 있게 했고
         * - setQueryData로 UI를 즉시 업데이트하여 사용자에게 즉각적인 피드백을 제공하였습니다.
         *
         * 에러가 발생할 경우 onError 콜백에서
         * - setQueryData를 통해 context(3번째 파라미터)에 저장해둔 이전 상태를 사용해 롤백 처리를 구현했습니다.
         *
         * onSettled 콜백에서 (mutation이 실행된 후 - 실패/성공 여부 상관없이 실행)
         * - invalidateQueries(캐시 무효화)를 호출하여 서버와 클라이언트의 데이터를 동기화했습니다.
         *
         * 이렇게 구현함으로써 사용자는 즉각적인 피드백을 받으면서도, 데이터의 정확성도 유지할 수 있게 되었습니다.
         */
        type: "text",
      },
      {
        content: "검색 기능에 Debounce 패턴을 적용해 무분별한 API 호출 방지",
        // 사용자가 검색어 입력할 때마다 API 호출 발생 -> 검색어 입력 후 엔터키를 누르면 검색 결과 호출하는 방식 고민(UX 측면에서 좋지 않음) -> debounce 패턴을 적용해 일정 시간 지난 후에 API 호출 하는 방식 선택(사용자 경험과 성능 측면에서 모두 개선된다고 판단)
        /**
         * 디바운스(Debounce)와 쓰로틀(Throttle)은 둘 다 함수의 연속적인 실행을 제한하는 목적을 갖고서 설계
         * Debounce
         * - 사용자가 연속적으로 이벤트를 발생시킬 때, 마지막 이벤트가 발생한 후 일정 시간이 지난 후에 한 번만 실행되도록 하는 개념입니다.
         * - 검색어 입력 시 API 호출, 윈도우 리사이즈 이벤트, 폼 입력 유효성 검사
         *
         * Throttle
         * - 일정 시간 간격으로 이벤트를 실행하는 개념입니다.
         * - 첫 이벤트가 발생하면 실행하고, 그 후 일정 시간 동안은 추가 이벤트를 무시합니다.
         * - 스크롤 이벤트 무시, 연속적인 키 입력 제한, API 호출 제한
         */
        type: "text",
      },
      {
        content:
          "createPortal을 활용한 모달 컴포넌트 제작 및 useModal 커스텀 훅 개발로 재사용성 향상 및 로직 모듈화",
        type: "text",
      },
      {
        content:
          "외부 라이브러리 없이 React Hook과 Date 객체를 활용한 캘린더 컴포넌트 구현 및 단일/범위 선택 기능 지원하도록 구현",
        type: "text",
      },
      {
        content:
          "Framer Motion의 AnimatePresence 컴포넌트의 exit 속성을 통해 페이지 전환 시 부드러운 페이지 전환 애니메이션 구현",
        // AnimatePresence - exit 속성을 통해 React 컴포넌트가 DOM에서 제거될 때 애니메이션을 처리하는 컴포넌트
        type: "text",
      },

      { content: "성능 최적화 (Lighthouse 60점 -> 96점)", type: "subtitle" },
      /**
       * bundle-analyzer 툴을 이용해 번들 사이즈를 확인하고 코드 스플리팅 및 lottie-react에서 react-lottie-light로 교체해 번들 사이즈 약 32% 감소
       * 라이프사이클 최적화를 통해 React 컴포넌트의 생명주기를 최적화하고 불필요한 리렌더링을 방지하여 성능 향상
       * - 메모이제이션(memo, useMemo, useCallback) 진행, 코드 스플리팅(Dynamic import), 이미지 최적화(webp 변환, blur(blurDataURL) 적용으로 이미지 로딩시 블러 효과 적용 후 원본 이미지 로딩)
       */
      {
        content:
          "bundle-analyzer 툴을 이용해 번들 사이즈 분석 및 코드 스플리팅, lottie-react에서 react-lottie-light로 교체해 번들 사이즈 약 32% 감소",
        type: "text",
      },
      {
        content:
          "초기 로딩 속도 개선을 위한 라이프사이클 최적화, 이미지 최적화 작업을 통해 초기 로딩 시간을 2.8s -> 1.3s(53%)로 단축",
        type: "text",
      },
      {
        content:
          "Suspense와 Skeleton UI를 조합해 데이터 로딩 상태를 최적화하고, CLS(Cumulative Layout Shift) 0으로 개선",
        type: "text",
      },
      {
        content:
          "Tanstack Query의 캐싱 전략과 데이터 프리페칭을 통해 초기 로딩 시간 최적화",
        type: "text",
      },
      {
        content:
          "SEO 컴포넌트 개발로 페이지별 메타 태그 관리, Open Graph, Twitter Card 지원해 검색 엔진 최적화",
        type: "text",
      },
    ],
    image: "/images/projects/manchui.webp",
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

  // 2
  {
    title: "Global-Nomad",
    description: `여행을 더욱 특별하게 만들어줄 체험 플랫폼`,
    details: [
      { content: "프로젝트 세팅", type: "subtitle" },
      {
        content:
          "ESLint, Prettier, Tailwind CSS 등 다양한 툴을 커스텀하여 일관된 코드 품질/스타일과 JSDoc을 활용한 컴포넌트 문서화로 DX(개발자 경험) 향상",
        type: "text",
      },

      { content: "주요 기능 개발", type: "subtitle" },
      {
        content:
          "프로젝트 기간 내 빠른 MVP 확보를 위해 번들 사이즈(6.9KB)가 작고 제스처 지원이 우수한 embla-carousel 도입해 Modal 컴포넌트 구현",
        type: "text",
      },
      {
        content:
          "Intersection Observer API를 활용한 useIntersectionObserver 커스텀 훅 개발로 무한 스크롤 구현 및 재사용성 향상",
        type: "text",
      },
      {
        content:
          "usePagination 커스텀 훅과 Pagination 컴포넌트 구현으로 페이지네이션 로직 모듈화 및 재사용성 향상",
        type: "text",
      },
      {
        content:
          "Debounce를 활용한 window.innerWidth 감지 커스텀 훅을 구현하여 디바이스 크기에 따른 데이터 패칭 개수 조절로 UX 개선",
        // debounce : 마지막 작업이 수행된 후 일정 시간이 지난 후 API 호출 (검색어 입력 최적화, 스크롤 이벤트 처리, 리사이즈 이벤트 제어)
        // throttle : 이벤트의 발생 빈도를 일정한 시간 간격으로 제한해 과도한 이벤트 처리 방지 (여러 이벤트 발생해도 하나만 실행 - 스크롤 이벤트 처리, 리사이즈 이벤트 제어)
        type: "text",
      },
      {
        content:
          "createPortal을 활용한 모달 컴포넌트 구현 및 useModal 커스텀 훅 개발로 재사용성 향상 및 로직 분리",
        type: "text",
      },

      { content: "성능 최적화", type: "subtitle" },
      {
        content:
          "라이프 사이클 최적화, 이미지 최적화, Dynamic import를 통해 초기 로딩 시간 2.5s에서 1.3s로 48% 개선",
        type: "text",
      },
      {
        content:
          "Skeleton UI 구현해 UX 개선 및 CLS(Cumulative Layout Shift) 0으로 개선",
        type: "text",
      },
    ],
    image: "/images/projects/globalnomad.webp",
    link: "https://github.com/part4-team9/global-nomad",
    skills: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Tanstack Query",
      "Embla Carousel",
    ],
    cateTag: "부트캠프 프로젝트",
  },

  // 3
  {
    title: "Taskify",
    description: `Kanban 보드를 활용하여 효과적으로 일정을 관리할 수 있는 플랫폼`,
    details: [
      { content: "Tanstack Query 도입 경험", type: "subtitle" },
      {
        content:
          "처음으로 TanStack Query를 도입해 API 호출, 데이터 캐싱, 상태 관리등 장점을 활용하고 사용자 경험을 위해 낙관적 업데이트 기능을 활용",
        // 반복적인 데이터 fetching 코드 감소, 기존 데이터 캐싱, 비동기 작업의 상태 관리, 서버와 클라이언트 단의 데이터 동기화, 데이터 관리 최적화
        type: "text",
      },
      { content: "전역 상태 관리의 필요성", type: "subtitle" },
      {
        content:
          "대시보드 상태를 전역적으로 공유해야할 필요가 있기에, Jotai 도입.\n" +
          "불필요한 리렌더링을 최소화 시키고 개발 생산성과 유지보수성 향상",
        type: "text",
      },
      { content: "컴파운드 패턴 도입 경험", type: "subtitle" },
      {
        content:
          "컴파운드 패턴과 React Context API를 활용해 Modal 컴포넌트 구현, Object.assign으로 컴포넌트 합성을 통해 import 없이도 사용할 수 있도록 하여 재사용성과 DX(개발자 경험) 향상",
        // "컴파운드 패턴과 React Context API를 활용해 Modal 컴포넌트를 구현하고, Object.assign으로 컴포넌트 합성을 통해 import 없이 사용할 수 있도록 DX를 향상시켰습니다."
        // 컴파운드 패턴 : 컴포넌트 간 결합도를 낮추고 재사용성을 높이기 위해 사용하는 패턴
        type: "text",
      },
    ],
    image: "/images/projects/taskify.webp",
    link: "https://github.com/Team2-project/taskify",
    skills: ["ReactJS", "TypeScript", "Tanstack Query", "Jotai", "TailwindCSS"],
    cateTag: "부트캠프 프로젝트",
  },

  // 4
  {
    title: "SurvForm",
    description: `온라인 설문지 생성, 공유 및 수집된 데이터 차트를 통한 분석 플랫폼`,
    details: [
      { content: "프로젝트 환경 구축 (Webpack -> Vite)", type: "subtitle" },
      {
        content:
          "빠른 개발 환경 구축 및 번들러 마이그레이션 경험 얻고자 Webpack에서 Vite로 마이그레이션 진행",
        type: "text",
      },
      {
        content:
          "Tailwind CSS config 커스텀으로 일관된 디자인 시스템 구축 및 유지보수성 향상",
        type: "text",
      },

      { content: "Firebase 도입 경험", type: "subtitle" },
      // 처음에는 Express.js와 fs 모듈로 개발을 시작했는데, 배포 환경에서 fs 모듈은 로컬 파일시스템에 의존하기 때문에, 데이터 관리 문제가 발생했습니다.
      // Firebase는 이러한 문제를 해결해주고, 인증부터 데이터베이스까지 필요한 기능을 모두 제공하기에 개발 시간을 단축할 수 있었습니다.
      // 그리고 실시간 데이터 동기화가 필요했습니다. 설문 응답을 실시간으로 수집하고 차트로 시각화하는 기능이 필요했는데, Firestore Database의 실시간 동기화 기능이 이 요구사항을 완벽하게 충족시켰습니다.
      {
        content: "Firebase Authentication을 활용한 사용자 인증 구현",
        type: "text",
      },
      {
        content:
          "설문 응답 데이터 저장과 실시간 데이터 동기화(응답 결과 차트 시각화)가 필요하여, Firestore Database 도입",
        type: "text",
      },

      { content: "핵심 기능 구현", type: "subtitle" },
      {
        content:
          "프로젝트 특성상 많은 Form 요소가 필요해 React Hook Form을 도입하여 비제어 컴포넌트 방식으로 성능을 최적화하고, register 함수를 통해 모든 input을 하나의 객체로 관리하여 코드 복잡도와 리렌더링을 감소",
        /**
         * 1. 제어 컴포넌트
         * React의 state를 통해 폼 데이터를 관리하는 방식입니다.
         * 사용자의 입력값에 의해 state가 제어되며, state 변경될 때마다 리렌더링이 발생합니다.
         * 이 방식은 실시간 유효성 검사나 입력값 변환이 필요한 경우에 유용하지만, 입력 필드가 많아질수록 불필요한 리렌더링이 발생할 수 있는 단점이 있습니다.
         *
         * 2. 비제어 컴포넌트
         * DOM을 직접 참조하여 폼 데이터를 관리하는 방식입니다.
         * React state가 아닌 ref를 통해 DOM 요소에 직접 접근하여 값을 가져오기 때문에 불필요한 리렌더링을 방지할 수 있습니다.
         * 이 방식은 많은 입력 필드가 있는 폼에 유용합니다.
         * React Hook Form은 이러한 비제어 컴포넌트 방식을 사용하여 폼의 성능을 최적화하고 있습니다.
         */
        type: "text",
      },
      {
        content:
          "실시간으로 수집되는 데이터를 Recharts 도입하여 데이터 시각화 컴포넌트 구현",
        type: "text",
      },
    ],
    image: "/images/projects/survform.webp",
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

  // 5
  {
    title: "Fandom-K",
    description: `아이돌 조공 플랫폼`,
    details: [
      { content: "핵심 기능 구현", type: "subtitle" },
      {
        content: "PC, 태블릿, 모바일 환경을 지원하는 반응형 랜딩 페이지 개발",
        type: "text",
      },
      {
        content: "react-modal 라이브러리를 활용한 모달 컴포넌트 구현",
        type: "text",
      },
      {
        content:
          "데이터 로딩 상태를 위한 Skeleton UI 구현으로 사용자 경험(UX) 개선",
        type: "text",
      },
      {
        content:
          "Layout Navbar 컴포넌트 구현 및 이미지 Webp 포맷 변환을 통한 성능 최적화",
        type: "text",
      },
    ],
    image: "/images/projects/fandomk.webp",
    link: "https://github.com/edhcoding/Fandom-k",
    skills: ["ReactJS", "TypeScript", "Jotai", "SCSS"],
    cateTag: "부트캠프 프로젝트",
  },
];
