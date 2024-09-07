export interface ApiData{
    output:string,
    language:string,
    error?:string
}
// update the setting 
export interface EditData {
    fontfamily: string;
    fontsize: number;
}
// types of props passed inside child comp of  setting component
export interface Props {
    editData: EditData;
    setEditData: React.Dispatch<React.SetStateAction<EditData>>;
    updateThedata: () => void;
}
