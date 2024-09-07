import toast from 'react-hot-toast';
import { useState} from 'react';
import { useLanguage } from '../context/selectLanguage';
import { ApiData } from '../interfaces/interface';
const envVar = `${process.env.REACT_APP_API_URL}/run`;
const getLanguageExtension = (language: string): (string | null) => {
    switch (language) {
        case 'python':
            return 'py';
        case 'javascript':
            return 'js';
        case 'c':
            return 'c';
        case 'cpp':
            return 'cpp';
        case 'typescript':
            return 'ts';
        case 'java':
            return 'java';
        default:
            return null;
    }
};
function useCodeRunner() {
    const { lan, setLan } = useLanguage();
    const [isloading, setLoading] = useState<boolean>(false);
    const ex = getLanguageExtension(lan.language);
    const controller:AbortController = new AbortController();
    const signal = controller.signal;   
    async function runTheCode() {
        try {
            if (envVar) {
                if (!ex) {
                    toast.error('Unsupported language');
                    return;
                }
                setLoading(true)
                const response = await fetch(envVar, {
                    signal,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        'language': ex,
                        'code': lan.snippet,
                        'userInput':lan.userInput
                    })
                });
                const data: ApiData = await response.json();
                console.log(data)
                if (data.error) {
                    setLan({ ...lan, Output: { output: data.error, language:'' } });
                }
                else {
                    setLan({ ...lan, Output: { output: data.output, language: data.language } });
                    setLoading(false)
                }
            }
        }
        catch (e: any) {
            toast.error(e.message)
            console.log("error is ", e.message);
        }
        finally {
            setLoading(false)
        }
    }


    return { runTheCode, isloading, setLoading };
};

export { useCodeRunner };
