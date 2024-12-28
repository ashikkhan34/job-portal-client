import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerAnimation from '../../assets/lottee.json'
import AuthContext from '../../provider/AuthContext';
import SocialLogin from '../social/SocialLogin';

const Register = () => {
    const [error,setError] = useState('')
    const [success,setSuccess] = useState(false)
    const {createNewUser} = useContext(AuthContext)

    const handleRegister = e =>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        setSuccess(false)

        if(!passwordRegex.test(password)){
            setError('At least one uppercase,one lower case and one special character or 8 character longer')
            return;
        }
        console.log(email,password)

        createNewUser(email,password)
        .then(result => {
            console.log(result.user)
            setSuccess(true)
        })
        .catch(error =>{
            console.log(error.massage)
            setSuccess(false)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96 ml-10">
                        <Lottie animationData={registerAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold m-7 mt-4">Register now!</h1>

                        <form onSubmit={handleRegister} className="card-body">
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        {
                            success && <p className='text-green-500'>sign up successful</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;