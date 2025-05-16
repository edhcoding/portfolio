import type { SkillItemType } from "@/types";

export const skillsData: SkillItemType[] = [
  {
    name: "HTML",
    rating: 5,
    image: "/images/stackIcon/HTML.webp",
    description: [
      "시맨틱 마크업을 중요시하며, 웹 접근성과 SEO를 고려한 HTML 구조 설계가 가능합니다.",
      "다양한 HTML5 API를 활용한 웹 애플리케이션 개발 경험이 있습니다.",
      // https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=lool2389&logNo=220916982907
      // https://m.blog.naver.com/PostView.naver?blogId=lool2389&logNo=220917850295&navType=by
    ],
  },
  {
    name: "CSS",
    rating: 5,
    image: "/images/stackIcon/CSS.webp",
    description: [
      "반응형 웹 디자인과 모던 CSS 기능(Flexbox, Grid, Animation 등)을 활용한 레이아웃 구현이 가능합니다.",
      "CSS-in-JS, CSS Modules 등 다양한 스타일링 방식을 프로젝트에 적용해본 경험이 있습니다.",
    ],
  },
  {
    name: "JavaScript",
    rating: 5,
    image: "/images/stackIcon/JavaScript.webp",
    description: [
      "한국어, 영어 다음으로 자신있는 언어입니다.",
      "비동기 핸들링에 능숙하며, Vanilla JS만으로 웹 프로젝트를 구현해본 경험이 있습니다.",
      "Express.js와 fs 모듈을 활용해 간단한 파일 시스템 기반 서버를 구축하고, RESTful API와 CRUD 기능을 직접 구현해본 경험이 있습니다",
    ],
  },
  {
    name: "TypeScript",
    rating: 4,
    image: "/images/stackIcon/TypeScript.webp",
    description: [
      "함수와 api 등에 적절한 타이핑이 가능하며, 타입 건전성을 지키는 안전한 코드를 작성하고 있습니다.",
      "유틸리티 타입(Partial, Pick, Omit, Record 등)을 상황에 맞게 적절히 타이핑하여 복잡한 데이터 구조도 다룰 수 있습니다.",
      // Partial - 복잡한 데이터 구조에서 필요한 부분만 선택하여 사용할 수 있도록 해줌
      // Pick - 특정 타입에서 필요한 프로퍼티만 선택하여 사용할 수 있도록 해줌
      // Omit - 특정 타입에서 특정 프로퍼티를 제외하고 사용할 수 있도록 해줌
      // Record - 키와 값의 쌍으로 이루어진 객체를 생성할 수 있도록 해줌
    ],
  },
  {
    name: "ReactJS",
    rating: 5,
    image: "/images/stackIcon/ReactJS.webp",
    description: [
      "메인 기술 스택입니다.",
      "라이프사이클을 잘 이해하고 있으며, 적절한 훅, 상태관리를 활용하여 렌더링 최적화를 할 수 있습니다.",
      "좋은 유지보수성을 가지는 컴포넌트 설계를 위해 깊게 고민합니다.",
      "UI와 비즈니스 로직을 분리하기 위해 container/presentational 패턴을 적용해보고 비즈니스 로직은 커스텀 훅으로 구현해본 경험이 있습니다.",
      // 컴포넌트를 만들 때, 다양한 상황에서 재사용할 수 있도록 props의 범위를 신중하게 설계하고, 불필요한 의존성을 줄이기 위해 노력했습니다.
      // 상태를 어디에 두는 것이 가장 적절한지 고민했습니다. 불필요하게 상위 컴포넌트로 상태를 끌어올리지 않고, 필요한 범위에서만 관리하려고 했습니다.
    ],
  },
  {
    name: "NextJS",
    rating: 4,
    image: "/images/stackIcon/Nextjs.webp",
    description: [
      "리액트와 더불어 메인으로 다루는 기술스택입니다.",
      "NextAuth를 활용한 인증 구현, dynamic import를 통한 성능개선과 SSR상황에서의 다양한 트러블 슈팅 경험이 있습니다.",
      // ssr 상황 트러블 슈팅
      // - window 객체 접근 시 브라우저 환경 확인 (typeof window !== "undefined" 로 체크)
      // - 데이터 패칭 시 에러 핸들링 try-catch
      // - SSR, CSR 간 데이터 불일치 hydration 오류 (클라이언트 측에서 동일한 데이터 패칭으로 해결 - useEffect)
    ],
  },
  {
    name: "ReactNative",
    rating: 2,
    image: "/images/stackIcon/ReactNative.webp",
    description: [
      "ReactJS 지식을 기반으로 개발 가능합니다.",
      "React Native와 Expo를 활용한 웹뷰를 통한 웹앱 통신(onMessage, postMessage, injectJavaScript), static html을 통한 YouTube API 연동 등 웹앱 개발 경험이 있습니다.",
      "웹앱과의 통신 시, 메시지 객체에 type 필드를 두어 요청의 종류를 구분하고, type에 따라 분기 처리하는 로직을 설계한 경험이 있습니다.",
      // 웹뷰에서 특정 이벤트가 발생하면 postMessage로 앱에 데이터를 전달하고, 앱에서는 onMessage 핸들러로 메시지를 받아 처리했습니다. 반대로 앱에서 웹뷰로 데이터를 보낼 때는 injectJavaScript를 사용해 웹 쪽에 명령을 전달했습니다.
      // YouTube API 연동은 static html을 웹뷰에 로딩한 뒤, JavaScript로 YouTube Player를 제어하는 방식으로 구현했습니다.
      "라이브러리를 활용해 카메라, 마이크 녹음 기능과 같은 네이티브 기능도 구현해본 경험이 있습니다.",
      // native에서는 카메라(react-native-vision-camera), 마이크(react-native-audio-recorder-player), 권한 요청은 react-native-permissions 라이브러리 사용
      // expo에서는 자체 지원하는 카메라, 마이크 라이브러리 사용
      // +) 웹에서는 typeof window != "undefined" && window.ReactNativeWebView != null 로 웹뷰 여부 확인
    ],
  },
  {
    name: "Tailwind CSS",
    rating: 4,
    image: "/images/stackIcon/Tailwind.webp",
    description: [
      "Tailwind CSS config를 프로젝트 요구에 맞게 커스터마이징이 가능합니다.",
      "clsx, tailwind-merge 라이브러리를 이용한 조건부 className처리와 스타일 충돌을 막는 유틸리티 함수를 구현해 DX를 높이고 코드 가독성을 높이는데 기여한 경험이 있습니다.",
    ],
  },
  {
    name: "Tanstack Query",
    rating: 4,
    image: "/images/stackIcon/TanstackQuery.webp",
    description: [
      "API별로 커스텀훅을 만들어 쿼리 키, 에러 처리 등 일관된 데이터 패칭 컨벤션을 지정하여 사용했습니다.",
      // 일관된 데이터 패칭 구조 - API별로 커스텀 훅을 만들어 쿼리 키, 에러 처리 등 공통 규칙을 정해두고, 팀원들이 일관된 방식으로 데이터 패칭을 하도록 컨벤션을 만들었습니다.
      "데이터 특성에 따른 staleTime, 쿼리 무효화, prefetching 등 API 호출 최적화에 대한 고민을 바탕으로 사용했습니다.",
      // 불필요한 요청 방지, 캐싱 - 데이터에 따라 staleTime 설정, 쿼리 무효화(invalidateQueries), prefetching(queryclient.prefetchQuery), 데이터 패칭 상태 관리(QueryPropiver 정의할때 new QueryClient 속성으로 queryCache에 new QueryCache로 성공상태 에러상태 처리(errorResponse.status로 http 상태코드 처리))
    ],
  },
  {
    name: "Material UI",
    rating: 3,
    image: "/images/stackIcon/MUI.webp",
    description: [
      "빠른 개발을 위해 도입했지만 익숙해지기에 많은 시간이 들었습니다. 오래 사용한 만큼, 내부 스타일과 인터페이스를 오버라이드 하는 수준의 커스터마이징이 가능합니다. 이를 통해 디자인 시스템에 대한 이해도를 키웠습니다.",
      // 디자인 시스템 - 일관된 UI/UX를 위해 색상, 폰트, 간격, 컴포넌트, 사용 규칙 등을 체계적으로 정리한 가이드와 컴포넌트 모음
    ],
  },
  {
    name: "Redux",
    rating: 4,
    image: "/images/stackIcon/Redux.webp",
    description: [
      "대규모 상태 관리의 필요성을 느껴 학습 목적으로 사이드 프로젝트에 도입하여 Redux-Toolkit과 Redux Duck Pattern을 활용한 경험이 있습니다.",
      // Rdux-Toolit : Rdux의 문제점인 보일러 플레이트 코드를 줄여주고 쉽게 구축 가능함, 상태 불변성 관리가 어려운 단점도 내부 immer 라이브러리를 통해 불변성 관리를 해줌
      // Duck Pattern: 기존 Redux는 action, reducer를 각각의 파일에서 관리했음, Duck Pattern은 액션 타입, 액션 생성자, 리듀서, 그리고 초기 상태를 한 파일에 그룹화하여 모듈화하는 패턴
      "Redux-Toolkit을 통해 보일러플레이트 코드를 줄이고, Redux Duck Pattern으로 모듈화하여 개발 생산성과 코드 유지보수성을 향상시켰습니다.",
      "비동기 로직 처리를 위해 redux-thunk를 도입하여 API 호출과 상태 관리를 효율적으로 구현했으며, Flux 아키텍처를 통한 단방향 데이터 흐름의 중요성을 이해했습니다.",
      // redux-thunk: Redux에서 비동기 작업을 처리하기 위한 미들웨어임, thunk 함수를 dispatch하고 사전에 수행해야 할 작업을 처리 후 결과 값을 함수 내부에서 다시 dispatch 하여 reducer에게 전달할 수 있다.
      // +) Redux에서 상태값을 변화시키기 위해 useDispatch 함수를 사용하여 액션 객체를 생성하여 reducer 에게 전달하게 되는데
      // +) Redux Thunk를 사용하면 Thunk 함수를 dispatch하고 사전에 수행해야 할 작업을 처리 후 결과 값을 함수 내부에서 다시 dispatch 하여 reducer에게 전달할 수 있다.
    ],
  },
  {
    name: "Zustand",
    rating: 4,
    image: "/images/stackIcon/Zustand.webp",
    description: [
      "Redux의 복잡성을 피하고 간단한 상태 관리가 필요한 사이드 프로젝트에 주로 사용하였습니다.",
      "persist 미들웨어를 활용한 스토리지 관리와 타입스크립트와의 좋은 통합성을 경험했습니다.",
      "selector function을 통한 상태 구독 최적화와 useShallow를 활용하여 불필요한 리렌더링을 방지한 경험이 있습니다.",
      // Zustand는 selector에서 실행된 값을 Object.is로 비교하고 변경되었을 경우 리렌더링을 발생시킴 결국 객체 전체를 구독하는 샘임
      // Zustnad는 React의 useState 처럼 전개(Spread) 연산자를 사용해서 상태를 불변하게 업데이트 할 수 있음
      // useShallow 유틸 함수를 이용하면 실행된 값이 이전과 같으면 리렌더링을 방지시킴

      // Zustand useShallow 유틸 함수 구현 코드
      // import React from 'react';
      // import { shallow } from '../vanilla/shallow.ts';

      // export function useShallow<S, U>(selector: (state: S) => U): (state: S) => U {
      //   const prev = React.useRef<U>();
      //   return (state) => {
      //     const next = selector(state);
      //     return shallow(prev.current, next) ? (prev.current as U) : (prev.current = next);
      //   };
      // }
      // prev는 이전 값을 저장하고, 리렌더링 시에도 값을 유지하기 위해서 useRef로 선언
      // useShallow에서 반환하는 함수 (state) => { ... }는 useShallow가 호출될 때의 prev와 selector를 참조하는 클로저입니다.
      // 클로저가 없다면 useShallow 함수가 호출될 때마다 prev가 새로 선언돼서 이전 값을 잃어버립니다.
      // 이를 막기 위해서 클로저로 동일한 prev 객체를 참조하도록 했습니다.
      // (state) => { ... } 내부에서는 갱신된 상태를 selector를 통해서 next에 저장합니다.
      // 이후 shallow 함수를 통해 prev와 next를 비교해서 값이 같다면 기존 값을 반환하고, 다르다면 prev에 next를 저장하고 저장된 값을 반환합니다.
      // 만약 비교한 값이 같아서 prev를 반환했다면 기존 객체의 참조를 그대로 반환한 것이기 때문에 이를 구독하고 있는 컴포넌트에서 리렌더링이 일어나지 않습니다.
    ],
  },
  {
    name: "Firebase",
    rating: 3,
    image: "/images/stackIcon/Firebase.webp",
    description: [
      "Firebase Authentication을 활용한 소셜 로그인 구현과 Firestore를 통한 실시간 데이터 동기화 경험이 있습니다.",
      "Firebase Storage를 활용하여 이미지 및 파일 업로드 기능을 구현한 경험이 있습니다.",
    ],
  },
  {
    name: "Vite",
    rating: 3,
    image: "/images/stackIcon/Vite.webp",
    description: [
      // https://www.heropy.dev/p/x8iedW
      "빠른 개발 서버 시작 시간과 빌드 속도를 개선하기 위해 webpack에서 Vite로 마이그레이션을 진행했습니다.",
      // Bundler: 여러 개의 JavaScript 파일을 하나로 묶어주는 도구
      // Vite dev 모드에서는 esbuild를 사용하여 빠른 번들링 속도로 개발 경험 향상 시켜줌 - 변경사항 있을 때마다 빠르게 반영, 최적화는 덜 하지만 빠른 속도가 중요
      // Vite Production 모드에서는 Rollup을 사용하여 최적화된 번들링을 지원합니다. - 코드를 최적화하고 압축, 불필요한 코드 제거, 성능 최적화
    ],
  },
];
