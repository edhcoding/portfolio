import useMediaQuery from "@mui/material/useMediaQuery";
import {
  mobileMaxWidthMediaQuery,
  tabletMaxWidthMediaQuery,
} from "@/styles/theme";

// useDeviceQuery - 미디어 쿼리 감지해 모바일, 태블릿 여부 반환
export default function useDeviceQuery() {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
  const isTablet = useMediaQuery(tabletMaxWidthMediaQuery);

  return {
    isMobile,
    isTablet,
  };
}
