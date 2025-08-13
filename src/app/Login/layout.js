const LoginLayout = ({children}) =>{
    return(
        <div className="h-full w-full border border-black flex flex-col justify-center items-center">
                <div className="h-[30%] w-full border border-black">
                    <h1>Login header</h1>
                </div>
                {
                    children
                }
        </div>
    )
}