import SignIn from '../../components/Signin'
import SignUp from '../../components/SignUp'
import AuthDetails from '../../components/AuthDetails'

function Login() {
    return (
        <div className='Login'>
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    )
}

export default Login;