import AuthLayouts from '../components/layouts/AuthLayouts'
import FormRegister from '../components/fragments/FormRegister';

const RegisterPage = () =>{
    return (
        <AuthLayouts title="Register" type="register" message="Welcome to the register page, please enter your data">
            <FormRegister/>
        </AuthLayouts>
    )
}

export default RegisterPage