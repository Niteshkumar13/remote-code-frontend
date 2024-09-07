import {useState} from 'react';
import Header from './component/header';
import Draw from './drawing/draw';
import Body from './component/body';
import { Route, Routes} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Help from './component/help';
import Pagenotfound from './component/pagenotfound';
import CookieComponent from './component/cookie';
import Setting from './component/setting';
function App() {
//   useEffect(() => {
//     const beforeUnloadHandler = (e: any) => {
//         const msg = "Changes you made may not be saved"
//         return (e.returnValue = msg)
//     }

//     window.addEventListener("beforeunload", beforeUnloadHandler)

//     return () => {
//         window.removeEventListener("beforeunload", beforeUnloadHandler)
//     }
// }, [])
const [isSetting,setSetting] = useState(false);
const enableSetting: React.MouseEventHandler = (event:any) => {
  setSetting(prevSetting => !prevSetting);
};
  return (
    <>
    {isSetting?<Setting toggleOptions={enableSetting}/>:''}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: 'white',
            color: 'black',
          },
          success: {
            duration: 1000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <CookieComponent/>
     
      <Header/>
      <Routes>
        <Route path="/" element={<> <Body enableSetting={enableSetting}/></>} />
        <Route path="/help" element={
          <>
            <Help />
          </>
        } />
       
        <Route
          path="*"
          element={
          <>
          <Pagenotfound />
          </>}
        />
          <Route path="/draw" element={
          <> 
            <Draw/>
          </>
        } />
      </Routes>

    </>
  );
}

export default App;
