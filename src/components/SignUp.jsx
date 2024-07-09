import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../src/firebase';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <div className='sign-in-container'>
            <form onSubmit={signUp}>
                <h1>SignUp</h1>
                <input type='email' placeholder='Digite seu e-maik' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;