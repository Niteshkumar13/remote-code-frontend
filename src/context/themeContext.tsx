import React, { createContext, useContext, useState} from "react";
import { ThemeState,ChangeState} from "../interfaces/theme.context.type";
const Theme = createContext<ChangeState | null>(null);
export const useTheme = (): ChangeState => {
    const context = useContext(Theme);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
const ThemeContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const localItem: string | null = localStorage.getItem("codeEditorTheme");
    const { header, body, slider, textColor, output}: ThemeState = localItem ? JSON.parse(localItem) : {};
    const [allTheme, setAllTheme] = useState<ThemeState>({
        header: header || 'white',
        body: body || 'white',
        slider: slider || '#f8fafc',
        textColor: textColor || 'black',
        output:output||'rgba(153,161,179,.2)',
    })
    return (
        <Theme.Provider value={{ allTheme, setAllTheme }}>
            {children}
        </Theme.Provider>
    )
}
export default ThemeContext