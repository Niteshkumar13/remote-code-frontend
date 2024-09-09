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
                <div className='flex w-[80%] items-center flex-wrap gap-2'>
                    <label className='text-lg leading-none w-[120px]'>Font family</label>
                    <select className=" rounded-md border-none px-4   py-[3px] text-black outline-none outline-blue-500 outline" name="fontfamily" onChange={e => setEditData({ ...editData, [e.target.name]: e.target.value })}>
                        {
                            family.map((item, index) => <option key={index} value={item} style={{ fontFamily: item, fontSize: 12 }}>{item
                            }</option>)
                        }
                    </select>
                </div>
                <div className='flex w-[80%] items-center flex-wrap gap-2'>
                    <label className='text-lg leading-none w-[120px]'>Font Size</label>
                    <select className=" rounded-md border-none px-4   py-[3px] text-black outline-none outline-blue-500 outline" name="fontsize" onChange={e => setEditData({ ...editData, [e.target.name]: e.target.value })}>
                        {
                            size.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </select>
                </div>
                <button className='text-white rounded-md px-8 py-[6px] flex items-center justify-between bg-[#8559F9]' onClick={e => updateThedata()}>Save</button>
            </div>
        </div>
    )
})
export default CodeEditorSetting
