import React, { useState } from 'react';
import { useTheme } from '../context/themeContext';
import Editors from './editor';
import { useCodeRunner } from '../module/runCode';
import { PiFiles } from "react-icons/pi";
import { useLanguage, def_code } from '../context/selectLanguage';
import Slider from './slider';
import Output, { Inputbox } from './output';
import { TailSpin } from 'react-loading-icons'
import HtmlOutput from './htmlOutput';
import { CiSettings } from 'react-icons/ci';
interface BodyProps {
  enableSetting: React.MouseEventHandler;
}
const Body: React.FC<BodyProps> = ({ enableSetting })=> {
  const { allTheme } = useTheme();
  const [showSlide, setShowSlide] = useState<boolean>(false)
  const { lan, setLan } = useLanguage()
  const { runTheCode, isloading, setLoading } = useCodeRunner();
  const changeLan = (e: any): void => {
    setLoading(false)
    setShowSlide(false)
    setLan({ ...lan, language: e.target.value, snippet: def_code[e.target.value], Output: { language: '', output: '' } })
  }
  const deicideborder = allTheme.textColor === "white" && 'border-[#49494d] '
  return (
    <>

      {showSlide && <div className='absolute w-screen h-[calc(100vh-5.25rem)] z-[2] left-0 top-[5.25rem] overflow-hidden flex flex-row-reverse'>
        <div className='w-[calc(100vw-270px)] h-full' onClick={e => setShowSlide(false)}></div>
        <div className='w-[270px] h-full'><Slider /></div>
      </div>}
      <section className='h-full w-screen mt-12'>
        <div className='h-9 flex items-center justify-between px-2 md:px-5 gap-1 border-b' style={{ backgroundColor: allTheme.body,color:'#2a67b1' }}>
          <div className='h-full py-1 flex items-center gap-1'>
            <button className={`h-auto py-0.5 px-2 border rounded-sm ${deicideborder} `} onClick={e => setShowSlide(!showSlide)}>
              <PiFiles size={22} />
            </button>
            {lan.language !== "html" && <button onClick={e => { runTheCode(); setShowSlide(false) }} className='px-6 h-auto py-0.5 rounded-sm bg-[#2a67b1] text-white'>
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
    </>
  )
}

export default Body