import InputForm from '../elements/input/Index';
import Button from '../elements/buttons/index';

const FormLogin = () => {
    return(
        <form action="">
            <InputForm title="Name" name="name" htmlfor="name" type="text" placeholder="enter your name"/>
            <InputForm title="Date of Birth" name="date" htmlfor="birth" type="date" />
            <InputForm title="Email" htmlfor="email" name="email" type="text" placeholder="example@mail.com"/>
            <InputForm title="Password" htmlfor="password" name="password" type="password" placeholder="*****"/>
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormLogin