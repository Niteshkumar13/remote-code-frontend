import {Tldraw,Editor} from 'tldraw';
import 'tldraw/tldraw.css';
import { useState } from 'react';
const CustomPreferences = () => {
    // Render preferences without the theme option
    return (
      <div>
        {/* Other preferences options without the theme selector */}wsws
      </div>
    );
  };
const Draw = () => {
    // const [editor, setEditor] = useState<Editor | null>(null);
   window.addEventListener("keydown",(e: KeyboardEvent)=>{
    if (e.ctrlKey && e.key === '/') {
        console.log('Ctrl + / was pressed.');
        e.preventDefault();
    }
   })
  
    return (
        <div className='w-screen h-[calc(100vh-3rem)] mt-12 fixed inset-0'>
            <Tldraw
                defaultName="Editor"
                // onMount={(editor) => setEditor(editor)}
                className="z-0"
                components={{ DebugPanel: null}}
                persistenceKey="code-editor-key-for-db"
            />

        </div>
    )
}

export default Draw;

