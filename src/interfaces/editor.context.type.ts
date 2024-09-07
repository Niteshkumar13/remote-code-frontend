export interface codeStyle{
    fontfamily:string,
    fontsize:number,
}
export interface Code{
    codeStyles:codeStyle,
    SetcodeStyle:React.Dispatch<React.SetStateAction<codeStyle>>,
    ChangeEditorStyle:(fontfamily:string,fontsize:number)=>void
}