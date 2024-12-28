import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from '../../assets/signin.json'
import AuthContext from '../../provider/AuthContext';
import SocialLogin from '../social/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const{signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state || '/';

    
    const handleSignIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result => {
            console.log(result.user.email)
            const user = {email: email}
            axios.post('http://localhost:4000/jwt',user,{withCredentials:true})
            .then(res =>{
                console.log(res.data)
            })
            // navigate(from)
        })
        .catch(error =>{
            console.log(error.massage)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-10">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold m-10 mt-9">Login now!</h1>

                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;