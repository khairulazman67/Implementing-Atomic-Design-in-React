import InputForm from '../elements/input/Index';
import Button from '../elements/buttons/index';
import { useEffect, useRef, useState } from 'react';
import { login } from '../../services/auth.service';


const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (event) => {
    event.preventDefault()

      let data = {
        username : event.target.username.value,
        password : event.target.password.value
      }
      login(data, (status,res)=>{
        if(status){
          localStorage.setItem('token',res)
          window.location.href = "/products"
        }else{
          setLoginFailed(res.response.data)
        }
      })
    }

  const usernameRef = useRef(null)

  useEffect(()=>{
    usernameRef.current.focus()
  },[])

  return(
      <form onSubmit={handleLogin}>
        {loginFailed && <p className='text-500 text-red-500 mb-2'>{loginFailed}</p>}
        <InputForm title="Username" name="username" htmlfor="text" type="text" placeholder="Maimunah" ref={usernameRef}/>
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