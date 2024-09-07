import { useLanguage } from '../context/selectLanguage';


export function ReadFile() {

    const { lan, setLan } = useLanguage();

    function ReadContent(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            const content = reader.result;
            if (typeof content === 'string') {
                setLan({ ...lan, snippet: content, Output: { output: '', language: '' } });
            }
        };
        reader.onerror = function () {
            console.error('Error reading the file');
        };

        reader.readAsText(file, 'utf-8');
    }
    return { ReadContent }
}