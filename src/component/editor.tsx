import { useRef, useEffect, useMemo } from 'react';
import { Editor } from '@monaco-editor/react';
import { useTheme } from '../context/themeContext';
import { useEditorStyle } from '../context/editorContext';
import { useLanguage, def_code } from '../context/selectLanguage'
const Editors = () => {
  const { lan, setLan } = useLanguage()
  const { codeStyles } = useEditorStyle()
  const { allTheme } = useTheme();
  const editorRef = useRef<JSX.Element | null>(null);
  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }
  useEffect(() => {
    const t: string = def_code[`${lan.language}`];
    setLan({ ...lan, snippet: t })
  }, [lan.language]);
  function handleEditorChange(e: any) {
    const newSnippet = e;
    setLan({
      ...lan,
      snippet: newSnippet
    }
    );
  }

  const darkmodeforeditor = useMemo(() => {
    return allTheme.body === "white" ?  "light":"vs-dark" ;
  }, [allTheme]);
  return (
    <div className={`w-[70%] relative z-[1]  h-full max-md:w-screen ${lan.language === "html" ? 'max-md:h-1/2' : 'max-md:h-[60%]'}  border-r-[1px] `}>
      <Editor
        height="100%"
        theme={darkmodeforeditor}
        width="100%"
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: codeStyles.fontsize,
          fontFamily: codeStyles.fontfamily
        }}
        defaultLanguage={lan.language}
        language={lan.language}
        defaultValue={lan.snippet}
        value={lan.snippet}
        onMount={handleEditorDidMount}
        onChange={e => handleEditorChange(e)}
      />
    </div>
  )
}

export default Editors
