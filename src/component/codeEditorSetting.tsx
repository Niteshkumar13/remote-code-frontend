import { memo } from 'react';
import { CiSettings } from "react-icons/ci";
import { Props } from '../interfaces/interface';
import { RxCross1 } from "react-icons/rx";
import { ProfileProps } from './setting';
const family = [
    '"Playwrite ES Deco", cursive',
    '"Noto Sans JP", sans-serif',
    '"Alegreya", serif',
    '"Lato", sans-serif',
    '"Oswald", sans-serif'
]
interface newPropse extends Props, ProfileProps { }
const size = [15, 16, 17, 18, 19, 20];
const CodeEditorSetting = memo(({ editData, setEditData, updateThedata, toggleOptions }: newPropse) => {
    return (
        <div className='w-full min-h-52 border-2 shadow-md rounded-md overflow-hidden'>
            <div className='flex justify-between items-center pr-3 py-1'>
                <span className='flex items-center text-2xl m-1'><CiSettings size={30} />Editor Setting</span>
                <button onClick={toggleOptions} className='hover:bg-slate-200 rounded-full p-1'>< RxCross1 size={20} /></button>
            </div>
            <hr className='border-[orange] border' />
            <div className='flex flex-wrap flex-col items-start px-2 py-2  max-sm:w-full gap-3'>
                <div className='flex max-w-[80%] gap-9  items-center '>
                    <label className='text-lg leading-none '>Font family</label>
                    <select className=" rounded-md border-none px-4  outline-blue-500 py-[3px] text-black  outline-none" name="fontfamily" onChange={e => setEditData({ ...editData, [e.target.name]: e.target.value })}>
                        {
                            family.map((item, index) => <option key={index} value={item} style={{ fontFamily: item,fontSize:12 }}>{item
                            }</option>)
                        }
                    </select>
                </div>
                <div className='flex max-w-[80%] gap-9  items-center '>
                    <label className='text-lg leading-none w-'>Font size</label>
                    <div>
                    <select className="rounded-md border-none px-4  outline-blue-500 py-[3px] text-black  outline-none" name="fontsize" onChange={e => setEditData({ ...editData, [e.target.name]: e.target.value })}>
                        {
                            size.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </select>
                    </div>
                </div>
                {/* <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                    Save 
                </button> */}
                <button className='text-white rounded-md px-8 py-[6px] flex items-center justify-between bg-[#8559F9]' onClick={e => updateThedata()}>Save</button>
            </div>
        </div>
    )
})
export default CodeEditorSetting
