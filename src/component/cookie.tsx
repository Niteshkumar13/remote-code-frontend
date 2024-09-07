import {memo,FC,useMemo,Fragment} from 'react';
import {useTheme} from '../context/themeContext';
import {ECookie} from '../module/cookie';
const Cookie:FC<{enableCookie:()=>void}> = memo(({enableCookie}) => {
  const { allTheme} = useTheme();
  return (
      <div className={`absolute z-[2] bg-red-200/75 bottom-5 left-1/2 transform -translate-x-1/2 max-w-[375px] w-[90%] flex p-[.5rem] rounded-xl gap-2  items-center  border-2`}>
        <div className=" text-[clamp(0.70rem,calc(0.32rem+1.69vw),0.8125rem)]" style={{color:allTheme.textColor}}>
          🍪 We use cookies to make your experience better.
          <a href="/">{" "}Cookies info</a>
          </div>
        <div className="flex-grow-0" style={{fontFamily:"sans-serif",fontSize:13}}>
        <button className='py-[.4rem] px-[1.3rem] rounded-full border' onClick={enableCookie}>OK</button>
        </div>
      </div>
  )
})


const CookieComponent = () => {
  const {enableCookie,isCookie} = ECookie()
  const isCookieEnabled = useMemo(() => {
    return !isCookie;
  }, [window.location.pathname, isCookie]);

  return (
    <Fragment>
      {isCookieEnabled && <Cookie enableCookie={enableCookie}/>}
    </Fragment>
  );
};

export default CookieComponent;
