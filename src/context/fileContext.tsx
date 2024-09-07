import React, { FC, ReactNode, createContext, useContext, useState} from "react";
import { file, fileState, fileType } from "../interfaces/file.context.type"
const Files = createContext<fileState | null>(null);
export const useFile = () => {
    const context = useContext(Files)
    if (!context) {
        throw new Error("useLanguage must be used within a LanaguageProvider")
    }
    return context
};
const FileContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [userFile, setUserFile] = useState<file>({
        allFile: [{ name: 'index.js', downloadUrl: '#' }, { name: 'main.py', downloadUrl: '#' }, { name: 'index.ts', downloadUrl: '#' }, { name: 'hello.c', downloadUrl: '#' }, { name: 'firstCpp.cpp', downloadUrl: '#' }],
        selecttedFile: { name: '', downloadUrl: '' }
    })
    // adding new file in the array
    const addNew = (name: string) => {
        let num: number = 1;
        let fileExists = userFile.allFile.some((file) => file.name === name);
        while (fileExists) {
            name = `${name}(${num++})`
            fileExists = userFile.allFile.some((file) => file.name === name)
            if (!fileExists) break
        }
        setUserFile(({
            ...userFile,
            allFile: [...userFile.allFile, { name, downloadUrl: '#' }],
        }));
        return name
    }
    // select the file and read the code
    const selectFile = (data:fileType):void =>{
        const {name,downloadUrl} = data;
        console.log("data has been clicked ",data)
        setUserFile(({
            ...userFile,
            selecttedFile:{name,downloadUrl}
        }));
    }
    // delete the file from array 
    const Delete = (data:fileType):void=>{
        const filteredArray = userFile.allFile.filter(item => item.name !== data.name);
        setUserFile({...userFile,allFile:filteredArray})
    }
    return (
        <Files.Provider value={{ userFile, setUserFile, addNew,selectFile,Delete}}>
            {children}
        </Files.Provider>
    )
}
export default FileContext;