export interface fileType{
    name:string,
    downloadUrl?:string,
}

export interface file{
    allFile:fileType[],
    selecttedFile: fileType
}

export interface fileState{
    userFile:file, 
    setUserFile:React.Dispatch<file>,
    addNew:(name:string)=> string
    selectFile:(data:fileType)=>void,
    Delete:(data:fileType)=>void,
}

