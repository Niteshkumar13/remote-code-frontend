import { useTheme } from '../context/themeContext';
import page404 from '../image/404-error-illustration.png'
import { Link } from 'react-router-dom'
const Pagenotfound = () => {
    const { allTheme } = useTheme();
  return (
    <div className='h-[calc(100vh-3rem)] mt-12 w-screen grid justify-center items-center overflow-hidden'  style={{backgroundColor:allTheme.body,color:allTheme.textColor}}>
      <div className='grid h-80  w-screen place-items-center px-6'>
        <img src={page404} className='max-h-52 select-none' alt='page-not-found'/>
        <span className='font-semibold text-2xl leading-[30px] text-center'>The page you are looking for can’t be found. Go to our <Link to='/' className='font-mono underline'>home page</Link></span>
      </div>
    </div>
  )
}

export default Pagenotfound
