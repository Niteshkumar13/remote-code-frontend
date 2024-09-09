import {Tldraw} from 'tldraw';
import 'tldraw/tldraw.css';

const Draw = () => {  
    return (
        <div className='w-screen h-[calc(100vh-3rem)] mt-12 fixed inset-0'>
            <Tldraw
                defaultName="Editor"
                className="z-0"
                components={{ DebugPanel: null}}
                persistenceKey="code-editor-key-for-db"
            />
        </div>
    )
}

export default Draw;

