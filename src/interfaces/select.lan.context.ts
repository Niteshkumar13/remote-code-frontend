export interface language{
    language:string,
    snippet:string,
    Output:{
        language:string,output:string
    },
    userInput:string|undefined
}
export interface languageState{
    lan:language,
    setLan:React.Dispatch<language>
}
export interface startedSnippet{
    [key: string]: string;
}
