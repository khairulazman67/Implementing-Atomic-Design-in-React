import { useRouteError } from "react-router-dom"
const ErrorPage = ()=>{
    const error = useRouteError();
    return (
        <div className="flex justify-center min-h-screen items-center flex-col bg-blue-200"> 
            <h1 className="font-bold text-3xl">Oops!</h1> 
            <p className="my-2">Sorry, an unexpected error has occured</p>  
            <p className="font-semibold">{error.statusText || error.message}</p>
            <p className="font-semibold">{error.status}</p>
        </div>
    )
}

export default ErrorPage