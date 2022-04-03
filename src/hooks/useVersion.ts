import { useCallback, useState } from "react";

export function useVersion() {
  const [version, setVersion] = useState(0);
  const tick = useCallback(() => setVersion((v) => v + 1), []);

  return {
    version,
    tick,
  };
}
