import React, { useState,useRef} from 'react';
import { MdDelete } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFileArrowUp } from "react-icons/fa6";
import {useFile} from '../context/fileContext'
import { useTheme } from '../context/themeContext'
import EditFile from './editFile';
import {HiPencil  } from "react-icons/hi2";
import { fileType } from '../interfaces/file.context.type';
import { ReadFile } from '../module/readfile';
const Slider = () => {
    const { allTheme } = useTheme();
    const {ReadContent} = ReadFile()
    const {userFile, addNew,selectFile,Delete} = useFile();
    const [edit, setEdit] = useState<string | null>(null)
    const rename = (id: string) => {
        setEdit(id)
    }
    const clicker = useRef<HTMLDivElement>(null);
    const addNewFile = ()=>{
        let getId = addNew("Untitled")
        setEdit(getId)
    }
    const changeItem = (item:fileType)=>{
        if(clicker.current){
            if(clicker.current.innerText !== item.name){
                selectFile(item)
            }
        }            
    }

    return (
        <div className='absolute w-[270px] h-full z-[3] left-0 rounded-tr-sm border-r-2' style={{backgroundColor:`${allTheme.slider}`}}>
            <div className='h-[calc(100%-120px)] w-full grid gap-[3px]  justify-center overflow-y-auto'>
               <div> {userFile.allFile.map((item,index)=>{
                return (
                    <div ref={clicker} key={index} className={`flex justify-between w-[250px] rounded-lg h-9 demo border-2 border-[#8da5c1] items-center px-2 mt-1`} style={{color:`${allTheme.textColor}`}}>
                        <FaFileArrowUp size={20} />
                        {edit === item.name?
                        <EditFile key={index} name={item.name} setEdit={setEdit}/>
                        :<><p className='line-clamp-1 flex-grow cursor-pointer text-[19px] pl-1 w-[10px]' onClick={e=>changeItem(item)}>{item.name}</p>
                        <span>
                            <button onClick={e=>rename(item.name)}> <HiPencil  size={19}  /></button>
                            <button onClick={e=>Delete(item)}><MdDelete size={19}  /></button>
                        </span>
                      </>}
                    </div>
                )})}
                </div>
            </div>
            <div className='w-full px-2 h-[120px] font-semibold grid gap-1 cursor-pointer custum-button pb-1 border-t-2 py-1'>
                <button className='rounded-lg px-2 text-[14px] border-[#8da5c1] border'><label htmlFor='file-input' className='flex gap-1 items-center cursor-pointer'><FaFileArrowUp size={15}/> Open File</label></button>
                <input type='file' id="file-input" className='hidden'  accept=".js,.ts,.py,.c,.cpp,.java"  onChange={ReadContent}/>
                <button className='rounded-lg  px-2 border-[#8da5c1] border'><label className='flex gap-1 items-center cursor-pointer'><MdOutlineFileDownload size={18}/> Download File</label></button>
                <button className='rounded-lg border-[#8da5c1] border ' onClick={addNewFile}>New File</button>
            </div>
        </div >
    )
}

export default Slider
