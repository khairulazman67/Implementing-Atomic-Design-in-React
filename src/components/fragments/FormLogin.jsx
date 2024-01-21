import InputForm from '../elements/input/Index';
import Button from '../elements/buttons/index';
import { useEffect, useRef } from 'react';

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    if(email && password){
      localStorage.setItem('email', event.target.email.value)
      localStorage.setItem('password', event.target.password.value)
      window.location.href = '/products'
    }
  };

  const emailRef = useRef(null)

  useEffect(()=>{
    emailRef.current.focus()
  },[])

  return(
      <form onSubmit={handleLogin}>
        <InputForm title="Email" name="email" htmlfor="email" type="email" placeholder="example@mail.com" ref={emailRef}/>
        <InputForm title="Password" name="password" htmlfor="password" type="password" placeholder="*****"/>
        <Button
          type="submit" 
          classname="bg-blue-600 w-full"
        >Login
        </Button>
      </form>
  )
}

export default FormLogin