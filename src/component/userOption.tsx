import { FC, memo } from 'react';
import { useTheme } from '../context/themeContext';
import { Link,useLocation } from 'react-router-dom';

export const UserOption: FC<{ toggleOptions: () => void}> = memo(({ toggleOptions}) => {
  return (
    <div className='absolute top-[3rem] right-0 w-screen h-[calc(100vh-3rem)] z-[10] overflow-hidden'>
      <div className='h-full w-screen' onClick={toggleOptions}></div>
      <div className='absolute right-0 top-0'>
        <TopOption setShowOption={toggleOptions} />
      </div>
    </div>
  )
})
const options = [
  { path: "/draw", label: "Draw" },
  { path: "/help", label: "Help" },
];

export const TopOption: FC<{ setShowOption: () => void}> = memo(({ setShowOption}) => {
  const { allTheme } = useTheme();
  const hoverColor = allTheme.body !== "rgb(22,26,29)" ? 'hover:bg-slate-100' : 'hover:bg-[rgb(83,98,106)]';
  const {pathname} = useLocation();
  return (
    <div className='absolute z-[1] select-none top-0 right-0 h-auto w-[10rem] overflow-hidden rounded-b-md grid items-center border-x-2 border-b-2' style={{ backgroundColor: allTheme.body, color: allTheme.textColor }}>
      <ul className='text-md cursor-pointer '>
      {options.map((option) => (
        <Link to={pathname === option.path ? "/" : option.path} key={option.path}>
          <li
            className={`px-2 py-1 ${hoverColor}`}
            onClick={setShowOption}
          >
            {pathname === option.path ? "Home" : option.label}
          </li>
        </Link>
      ))}
      </ul>
    </div>
  );
});



export default UserOption
