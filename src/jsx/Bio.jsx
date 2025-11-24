import { useEffect, useState } from "react";
import { Macbook, FakeMacbook} from "./Macbook";
import Typewritter from "./Typewritter";

function Bio() {

    // Contact email
    const email = "ratakonda488@gmail.com";

    const stuff = [
        "SOFR/OIS swap pricers",
        "Monte Carlo tail-risk simulators",
        "Python-driven pricing & analytics",
        "MBS OAS & prepayment modelling",
        "Curve bootstrapping and interpolation",
        "Model risk & SR 11-7 governance",
        "DeFi research and crypto risk",
        "Teaching & mentoring in derivatives",
        "Open to risk-driven roles"
    ]

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            navigator.clipboard.writeText(email);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }, [copied]);
    
    return (
        <div className="min-h-screen py-4 w-full flex flex-wrap">
            <div className="my-auto order-2 lg:order-1 w-full lg:w-2/5 pointer-events-none lg:pointer-events-auto">
                <div className="hidden lg:block float-right w-3/4">
                    <Macbook />
                </div>
                <div className="block p-4 lg:hidden w-full">
                    <FakeMacbook />
                </div>
            </div>
            <div className="w-full order-1 lg:order-2 px-2 lg:inline-block lg:w-3/5 lg:float-right my-auto z-10">
                <div className="text-2xl md:text-4xl font-extrabold px-2 py-3 pb-5 lg:pb-3 bg-background-accent w-fit translate-y-2 -translate-x-3">
                    {
                     copied 
                     ? <span className="tracking-tight text-content-greyed">Copied!</span>
                     : <span onClick={() => setCopied(true)} placeholder="Click to select" className="text-content-primary-accent hover:text-content-secondary cursor-pointer">ratakonda488<span className="text-content-default">@</span>gmail.com</span>
                    }
                </div>
                <div className="md:text-2xl w-full lg:w-3/4 font-base bg-background-accent-darker p-3 tracking-tight space-y-2">
                    <p className="w-full">
                        I’m Srivatsa, a recent Master of Quantitative Finance student at Rutgers Business School, with a background in Computer Science and hands-on experience in trading analytics, risk modelling, and DeFi research. <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary to-content-primary-accent"> New York</span> is where I’m based while I work on pricing engines, risk tools, and research notes.
                    </p>
                    <p className="w-full">
                        My work sits at the intersection of markets, math, and code. I enjoy taking a messy real-world problem – like pricing an interest-rate swap off SOFR/OIS curves, or stress-testing multi-year corporate cash flows – and turning it into a clean, reproducible Python workflow that people can actually use. <Typewritter 
                            options={{
                                endCallback: () => setCurrentWordIndex(currentWordIndex === stuff.length-1 ? 0 : currentWordIndex + 1),
                                loop: false,
                                delete: true,
                                waitMs: 1000,
                                showCursor: true
                            }}
                            className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary-accent to-content-primary"
                        >
                            {" " + stuff[currentWordIndex]}
                        </Typewritter>
                    </p>
                    <p className="w-full">
                        Previously, I worked as an Analyst at String Metaverse (BGPL), where I built Python-based dashboards streaming real-time order-book and exposure data, validated multi-token derivatives books, and maintained factor-model pipelines for trading signals. At Rutgers I’ve focused on fixed-income, term-structure modelling, and risk management. This site is where I document projects, research notes, and practical notes on modelling, validation, and DeFi.
                    </p>
                    
                </div>
            </div>
        </div>
       
    )
}

export default Bio;