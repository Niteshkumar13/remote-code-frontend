import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './themeContext';
import LanguageContext from './selectLanguage';
import FileContext from './fileContext';
import EditorContext from './editorContext';
import { SocketContext } from './webSocket.context';
const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <BrowserRouter>
                <FileContext>
                    <LanguageContext>
                        <ThemeContext>
                                <EditorContext>
                                    <SocketContext>
                                        {children}
                                    </SocketContext>
                                </EditorContext>
                        </ThemeContext>
                    </LanguageContext>
                </FileContext>
            </BrowserRouter>
        </>
    )
}

export default Provider
