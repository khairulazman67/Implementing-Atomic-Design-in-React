import {Link} from 'react-router-dom'
const AuthLayouts = (props)=>{
    const {children, title, message, type} = props
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-5">
                    {message}
                </p>
                {children}
                <Navigation type={type}/>
                {/* <p className='text-center'>
                    {type === 'login'? "Don't have an account? " : "Already have an account? "} 
                    
                    {type === "login" && (
                        <Link to="/register" className="font-bold text-blue-500"> Sign Up</Link>
                    )}

                    {type === "register" && (
                        <Link to="/login" className="font-bold text-blue-500"> Sign In</Link>
                    )} 
                    
                </p> */}
            </div>
        </div>  
    )
}

const Navigation = ({ type }) =>{
    if(type ==="login"){
        return (
            <p className='text-center'>
               Don't have an account?
                <Link to="/register" className="font-bold text-blue-500"> Sign Up</Link>
            </p>
        )
    }else{
        return(
            <p className='text-center'>
                Already have an account? 
                <Link to="/login" className="font-bold text-blue-500"> Sign In</Link>
            </p>
        )
    }
}
export default AuthLayouts