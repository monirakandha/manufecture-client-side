import React from 'react';
import { Link } from 'react-router-dom';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
  <h2 className="text-center text-2xl font-bold">Login</h2>
  <p><small>New to Manufacture Website <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
<div className="divider">OR</div>
<button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
</div>
</div>
</div>
    );
};

export default Login;