import { FC, useState, memo, useRef, useEffect } from 'react';
import { useTheme } from '../context/themeContext';
import { useEditorStyle } from '../context/editorContext';
import toast from 'react-hot-toast';
import CodeEditorSetting from './codeEditorSetting';

export interface ProfileProps {
  toggleOptions: React.MouseEventHandler;
}

const Setting: FC<ProfileProps> = memo(({ toggleOptions }) => {
  const { allTheme } = useTheme();
  const { codeStyles, ChangeEditorStyle } = useEditorStyle()
  const containerRef = useRef<HTMLDivElement>(null);
  const [editData, setEditData] = useState({
    fontfamily: codeStyles.fontfamily,
    fontsize: codeStyles.fontsize,
  });

  const updateData = async () => {
    ChangeEditorStyle(editData.fontfamily, editData.fontsize);
    toast.success("updated")
  };
  const handleClickOutside = (event: any) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      toggleOptions(event)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="absolute z-[10] h-[calc(100vh-5.25rem)] w-screen flex overflow-hidden items-center justify-center px-4">
      <div className='max-w-[500px] w-full overflow-hidden' ref={containerRef}
        style={{
          backgroundColor: allTheme.header,
          color: allTheme.textColor,
        }}>
        <CodeEditorSetting
          editData={editData}
          toggleOptions={toggleOptions}
          setEditData={setEditData}
          updateThedata={updateData}
        />
      </div>
    </div>
  );
});

export default Setting;
