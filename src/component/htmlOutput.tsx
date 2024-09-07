import { useLanguage } from '../context/selectLanguage';
const HtmlOutput = () => {
    const { lan } = useLanguage();
    return (
        <div className='h-full w-full'>
            <div className="flex bg-[#38444d] py-1 gap-4">
                
                    <div className="localhostbuttoncontainer">
                        <span className='text-[#dc3545] pl-3 text-xl'>⬤</span>
                        <span className='text-[#ffc107] pl-[2px] text-xl'>⬤</span>
                        <span className='text-[#04AA6D] pl-[2px] text-xl'>⬤</span>
                    </div>
                    <div className="w-[60%] overflow-hidden float-left rounded-[20px] text-black bg-[#fff] pl-[10px] text-[15px] py-[2px]">http://127.0.0.1:5500/index.html</div>
               
            </div>
            <iframe className='h-full w-full bg-slate-50'
                srcDoc={lan.snippet}
                title="Output"
                sandbox="allow-scripts"
            />
        </div>
    )
}

export default HtmlOutput;
