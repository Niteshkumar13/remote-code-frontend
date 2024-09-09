import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './themeContext';
import LanguageContext from './selectLanguage';
import EditorContext from './editorContext';
const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <BrowserRouter>
                    <LanguageContext>
                        <ThemeContext>
                                <EditorContext>
                                        {children}
                                </EditorContext>
                        </ThemeContext>
                    </LanguageContext>
            </BrowserRouter>
        </>
    )
}

export default Provider
