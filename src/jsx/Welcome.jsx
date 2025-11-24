
function Welcome() {
    
    return (
    <div className="w-full lg:w-1/2 mx-4 my-16 lg:m-0 lg:grid grid-cols-1 lg:place-content-evenly z-20">
            <div className="place-self-center px-3">
                <h2 className="text-5xl md:text-7xl font-extrabold py-3 pb-5 bg-background-accent w-fit rounded-md px-4">Hello World</h2>
                <div className="md:text-3xl font-bold bg-background-accent/80 p-3 translate-x-2 -translate-y-2 rounded-md">
                    <p className="mb-2">
                       I'm Sri, Welcome to my website, 
                       Feel free to Quack around.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;