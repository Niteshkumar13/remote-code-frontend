import { useState, useCallback} from "react";

export function ECookie(): { enableCookie: () => void, isCookie: boolean } {
  const [isCookie, setCookie] = useState<boolean>(() => {
    const cookie = localStorage.getItem("Cookies:accepted");
    return cookie === "true";
  });

  const enableCookie = useCallback(() => {
    setCookie(true);
    localStorage.setItem("Cookies:accepted", "true");
  }, []);

  return { enableCookie, isCookie };
}