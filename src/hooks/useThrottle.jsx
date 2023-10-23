import { useRef } from "react";

function useThrottle(callbackFn, limit) {
  const lastRun = useRef(Date.now());

  return function () {
    if (Date.now() - lastRun.current >= limit) {
      callbackFn();
      lastRun.current = Date.now();
    }
  };
}

export default useThrottle;
