import { useCallback } from 'react';
import { useTheme } from '../context/themeContext';

const useChangetheme = (): [() => void] => {
  const { allTheme, setAllTheme } = useTheme();

  const change = useCallback(() => {
    try {
      const newTheme = allTheme.body === "white"
        ? {
            ...allTheme,
            header: "rgb(22,26,32)",
            body: "#030712",
            slider: "rgb(43,58,70)",
            textColor: "white",
            output: '#1d1e23',
          }
        : {
            ...allTheme,
            header: "white",
            body: "white",
            slider: "#f8fafc",
            textColor: "black",
            output: "#f9fafb",
           
          };

      setAllTheme(newTheme);
      localStorage.setItem("codeEditorTheme", JSON.stringify(newTheme));
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }, [allTheme, setAllTheme]);

  return [change];
};

export default useChangetheme;

