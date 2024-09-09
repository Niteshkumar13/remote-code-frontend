import React from 'react';
import { useTheme } from '../context/themeContext';
import Editors from './editor';
import { useCodeRunner } from '../module/runCode';
import { FaFileArrowUp } from "react-icons/fa6";
import { useLanguage, def_code } from '../context/selectLanguage';
import Output, { Inputbox } from './output';
import { TailSpin } from 'react-loading-icons'
import HtmlOutput from './htmlOutput';
import { CiSettings } from 'react-icons/ci';
import { ReadFile } from '../module/readfile';
interface BodyProps {
  enableSetting: React.MouseEventHandler;
}
const Body: React.FC<BodyProps> = ({ enableSetting })=> {
  const { allTheme } = useTheme();
  const {ReadContent} = ReadFile()
  const { lan, setLan } = useLanguage()
  const { runTheCode, isloading, setLoading } = useCodeRunner();
  const changeLan = (e: any): void => {
    setLoading(false)
    setLan({ ...lan, language: e.target.value, snippet: def_code[e.target.value], Output: { language: '', output: '' } })
  }
  const deicideborder = allTheme.textColor === "white" && 'border-[#49494d] '
  return (
      <section className='h-full w-screen mt-12'>
        <div className='h-9 flex items-center justify-between px-2 md:px-5 gap-1 border-b' style={{ backgroundColor: allTheme.body,color:'#2a67b1' }}>
          <div className='h-full py-1 flex items-center gap-1'>
            <button className={`h-auto py-0.5 px-2 border rounded-sm ${deicideborder}`}>
              <label htmlFor='file-input' className='flex gap-1 items-center cursor-pointer'><FaFileArrowUp size={22}/></label>
            </button>
            <input type='file' id="file-input" className='hidden'  accept=".js,.ts,.py,.c,.cpp,.java"  onChange={ReadContent}/>
            {lan.language !== "html" && <button onClick={e => { runTheCode()}} className='px-6 h-auto py-0.5 rounded-sm bg-[#2a67b1] text-white'>
              {isloading ? <TailSpin width="23px" height="23px" /> : 'Run'}
            </button>}
          </div>
          <div className='h-full py-1 flex items-center gap-1'>
            <select onChange={changeLan} name="language" className={`h-auto py-0.5 border outline-none rounded-sm text-sm font-bold bg-transparent ${deicideborder}`}>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="html">HTML</option>
            </select>
            <button className='rounded-full p-0.5 hover:bg-slate-200' onClick={enableSetting}>
              <CiSettings size={25} />
            </button>
          </div>
        </div>
        <div className='h-[calc(100vh-5.25rem)] w-screen flex flex-wrap '>
          <Editors />
          <div className={`w-[30%] flex-wrap flex h-full max-md:w-screen ${lan.language === "html" ? 'max-md:h-1/2' : 'max-md:h-[40%]'}  overflow-hidden`} style={{background:allTheme.body}}>
            {lan.language === "html" ? <HtmlOutput /> : <><Inputbox /><Output /></>}
          </div>
        </div>
      </section>
  )
}

export default Body