const Button = (props) => {
    const {children='Login',classname='bg-red-500', onClick = ()=>{}, type='button'} = props
    console.log('onClick' ,typeof(onClick) )
    return(
        <button 
            className={`h-10 px-6 font-semibold rounded-md ${classname} hover:bg-gray-700  text-white`} 
            type={type}
           onClick={()=>onClick()}
        >
            {children}
        </button>
    )
}

export default Button