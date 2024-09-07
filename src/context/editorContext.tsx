import React, { FC, ReactNode, createContext, useContext, useState } from "react";
import { codeStyle,Code } from "../interfaces/editor.context.type";
const EditorStyle = createContext<Code | null>(null);
export const useEditorStyle = () => {
    const context = useContext(EditorStyle)
    if (!context) {
        throw new Error("useLanguage must be used within a LanaguageProvider")
    }
    return context
};
const EditorContext: FC<{ children: ReactNode }> = ({ children }) => {
    const localItem: string | null = localStorage.getItem("codeEditorStyle");
    const { fontfamily,fontsize }: codeStyle = localItem ? JSON.parse(localItem) : {};
    const [codeStyles,SetcodeStyle] = useState({
        fontfamily:fontfamily||'',
        fontsize:fontsize||14,
    })
    const ChangeEditorStyle = (fontfamily:string,fontsize:number)=>{
        SetcodeStyle({...codeStyles,fontfamily,fontsize});
        localStorage.setItem("codeEditorStyle",JSON.stringify({fontfamily,fontsize}));
    }
    return (
        <EditorStyle.Provider value={{codeStyles,SetcodeStyle,ChangeEditorStyle}}>
            {children}
        </EditorStyle.Provider>
    )
}
export default EditorContext;