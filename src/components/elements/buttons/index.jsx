const Button = (props) => {
    const {children='Login',classname='bg-red-500'} = props
    return(
        <button className={`h-10 px-6 font-semibold rounded-md ${classname}  mx-2 text-white`} type="submit">
            {children}
        </button>
    )
}

export default Button