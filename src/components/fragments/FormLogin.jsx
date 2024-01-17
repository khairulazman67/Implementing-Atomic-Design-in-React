import InputForm from '../elements/input/Index';
import Button from '../elements/buttons/index';

const FormLogin = () => {
    return(
        <form action="">
          <InputForm title="Email" htmlfor="email" type="text" placeholder="example@mail.com"/>
          <InputForm title="Password" htmlfor="password" type="password" placeholder="*****"/>
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin