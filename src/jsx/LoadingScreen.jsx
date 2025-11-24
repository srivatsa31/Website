import { useEffect } from "react";
import { useState } from "react";

const messages = [
    "[PLACEHOLDER: Loading message 1]",
    "[PLACEHOLDER: Loading message 2]",
    "[PLACEHOLDER: Loading message 3]",
    "[PLACEHOLDER: Loading message 4]",
    "[PLACEHOLDER: Loading message 5]",
    "[PLACEHOLDER: Loading message 6]",
    "[PLACEHOLDER: Loading message 7]",
    "[PLACEHOLDER: Loading message 8]",
    "[PLACEHOLDER: Loading message 9]",
    "[PLACEHOLDER: Loading message 10]",
    "[PLACEHOLDER: Loading message 11]",
    "[PLACEHOLDER: Loading message 12]",
    "[PLACEHOLDER: Loading message 13]",
    "[PLACEHOLDER: Loading message 14]",
    "[PLACEHOLDER: Loading message 15]"
]

function LoadingScreen({loaded}) {

    const [timer, setTimer] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 5000)

        return (() => clearInterval(interval));
    }, [])

    return (
        <div hidden={loaded} className='h-screen w-screen z-50 pointer-events-none'>
            <div className='flex items-center justify-center text-3xl text-white h-full'>
                {messages.length > timer ? messages[timer] : messages[messages.length - 1]}
            </div>
        </div>
    )
}

export default LoadingScreen;