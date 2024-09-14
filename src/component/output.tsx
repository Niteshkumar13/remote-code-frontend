import { useTheme } from '../context/themeContext';
import { useEditorStyle } from '../context/editorContext';
import { useLanguage } from '../context/selectLanguage';
const Output = () => {
  const { allTheme } = useTheme();
  const { codeStyles } = useEditorStyle()
  const { lan } = useLanguage()
  const decide = allTheme.body === "white" ? { bordercol: 'border-slate-300', bg: "rgb(3,105,161,1)" } : { bordercol: 'border-slate-700', bg: "#2c2e35" }
  return (
    <div className='w-full pt-2 h-[calc(100vh-264px)] max-sm:h-full max-md:w-1/2'>
      <div className='h-[28px] pl-2 select-none' style={{ color: allTheme.textColor }}><span>Output</span></div>
      <textarea value={lan.Output.output} readOnly className={`w-full h-[calc(100%-28px)] overflow-y outline-none border-2 ${decide.bordercol} resize-none p-2 rounded-md`} style={{ color: allTheme.textColor, fontFamily: codeStyles.fontfamily, background: allTheme.output }}></textarea>
    </div>
  )
}
export const Inputbox = () => {
  const { allTheme } = useTheme()
  const { lan, setLan } = useLanguage()
  const decide = allTheme.body === "white" ? { bordercol: 'border-slate-300', bg: "rgb(3,105,161,1)" } : { bordercol: 'border-slate-700', bg: "#2c2e35" }
  return (
    <div className='w-full h-[180px] p-1 flex flex-col gap-1  max-md:w-1/2  max-md:h-full'>
      <textarea onChange={e => setLan({ ...lan, userInput: e.target.value })} className={`w-full h-full resize-none rounded-md p-1  border-2 ${decide.bordercol} focus:border-sky-600 focus:outline-none`} placeholder='Enter input here' style={{ background: allTheme.output, color: allTheme.textColor }}></textarea>
      <h1 className='w-full py-2 px-1 text-sm text-blue-100 rounded-md' style={{ background: decide.bg }}>If your code takes input, add it in the above box before running.</h1>
    </div>
  )
}
export default Output
