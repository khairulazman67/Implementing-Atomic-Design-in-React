import AuthLayouts from '../components/layouts/AuthLayouts'
import FormLogin from '../components/fragments/FormLogin';

const LoginPage = () =>{
    return (
        <AuthLayouts title="Login" type="login" message="Welcome to the login page, please enter your email and password">
            <FormLogin/>
        </AuthLayouts>
    )
}
export default LoginPage