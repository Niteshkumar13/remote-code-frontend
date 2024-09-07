import React, { FC } from 'react';
import { useTheme } from '../context/themeContext';
import { FaArrowRight } from "react-icons/fa6";
import Logo from '../image/logo';
import { Link, useLocation } from 'react-router-dom';
import useChangeTheme from '../module/changeTheme';
import { MdOutlineWbSunny,MdDarkMode} from "react-icons/md";


const Header: FC = React.memo(() => {
  const { allTheme } = useTheme();
  const location = useLocation();
  const [change] = useChangeTheme();
  const newPath = location.pathname === "/draw"?
  {
    path:'/',text:'Home',
  }:
  {
    path:'/draw',text:'Draw',
  }
  return (
    <header className='absolute w-screen h-12 top-0 flex justify-center items-center backdrop-blur-lg border-b px-2.5 md:px-20' style={{backgroundColor:allTheme.header,color: allTheme.textColor}}>
      <div className='flex items-center gap-1 select-none'>
        <Logo color={allTheme.textColor} />
        <span className="logo text-2xl">Code</span>
      </div>
      <div className='w-[98%] h-9 flex justify-end items-center mr-2 gap-2'>
      <button className='py-1 px-2 rounded-md' onClick={change}>
          {allTheme.textColor==="white"?<MdOutlineWbSunny size={22} />:<MdDarkMode size={22}/>}
        </button>
        <Link className={`flex items-center border py-1 px-2 rounded-md ${allTheme.textColor==="white"&&'border-[#49494d] '}`}
          to={newPath.path}>
          {
            newPath.text
          }
           <FaArrowRight className='h-4 w-4 ml-1.5' />
        </Link>
      </div>
    </header>
  );
})

export default Header;
