import { useEffect } from "react";
import { useState } from "react";
import { getScrollPercent } from "../utils/scroll";
import Typewritter from "./Typewritter";

window.s = getScrollPercent;
function Header() {

    const menu = [
        { title: "GitHub", url: "https://github.com/srivatsa31" },
        { title: "LinkedIn", url: "www.linkedin.com/in/srivatsa-r" },
        { title: "X", url: "https://x.com/SrivatsaRatako1" },
        { title: "Substack", url: "[PLACEHOLDER: MacBook Air Model URL]" },
        { title: "Projects", url: "[PLACEHOLDER: Portfolio Projects URL]" },
    ];

    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(0);

    const updateHidden = () => {
        // ugly but necessary evil
        setHidden(document.getElementById("root").children[0].children[0].children[0].getBoundingClientRect().y < window.innerHeight*(-0.15));
    }

    useEffect(() => {
        document.getElementById("root").children[0].addEventListener("scroll", updateHidden);
        return (() => document.getElementById("root").children[0].removeEventListener("scroll", updateHidden));
    }, []);
    
    return (
        <div className={"w-3/4 select-none max-w-6xl text-center mx-auto p-5 h-6 flex items-center place-content-between absolute bottom-32 lg:bottom-48 inset-x-0 rounded-lg shadow-inner shadow-content-default/10 bg-background-default border-2 border-content-greyed z-90 transition-all duration-200 " + (hidden ? "opacity-0" : "opacity-1°0")}>
            <div>
                <h1 className="w-1/6 lg:inline">Sri’s Quantverse</h1>
                <Typewritter className="hidden lg:inline" textClassName="text-sm text-content-greyed" cursorClassName="text-content-greyed" options={{delete: false}}> | Don’t be shy… scroll + quack ↓ </Typewritter>
            </div>
            <div className="w-1/6">
                <ul className="bg-background-default border-y border-content-greyed absolute left-0 lg:left-auto -top-10 lg:w-1/6 w-full py-4 float-right -translate-y-full" hidden={!open}>
                    <li className="underline underline-offset-8 font-bold mb-2" >Quick Links</li>
                    { menu.map(entry => {
                        return (
                            <li key={"nav-button-" + entry.title}>
                                <a target="_blank" rel="noreferrer noopener" href={entry.url}>
                                    {entry.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <button className="w-full font-bold" onClick={() => setOpen(!open)}>{ open ? "</>" : "< >" }</button>
            </div>
        </div>
    )
}

export default Header;
