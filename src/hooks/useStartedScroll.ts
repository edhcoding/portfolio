import { useScrollTrigger } from "@mui/material";
import { useEffect, useState, RefObject } from "react";

const useStartedScroll = (containerRef: RefObject<HTMLElement>) => {
  const [target, setTarget] = useState<HTMLElement | undefined>(undefined);
  const trigger = useScrollTrigger({
    target,
  });

  useEffect(() => {
    if (containerRef.current) setTarget(containerRef.current);
  }, [containerRef]);

  return { startedScroll: trigger };
};

export default useStartedScroll;
