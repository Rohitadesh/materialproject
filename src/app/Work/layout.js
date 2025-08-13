export default function WorkLayout({children}){
    return(
        <div className="h-screen w-screen flex  flex-col  ">
            <div className="h-[30%] w-full border border-black">
                <h1>Hello world!</h1>
            </div>
                {children}
        </div>
    )
}