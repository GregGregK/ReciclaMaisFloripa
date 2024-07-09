import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../src/firebase';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/'); // Redireciona para a página home
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log in</h1>
                <input type='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}

export default SignIn;
