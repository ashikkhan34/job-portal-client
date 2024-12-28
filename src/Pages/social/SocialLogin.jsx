import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';

const SocialLogin = () => {
    const {singInwWithGoogle} = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        singInwWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='m-6'>
            <div className='divider'>OR</div>
            <button onClick={handleGoogleLogin} className='btn w-full'>Continue With <span className='text-xl font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'>Google</span></button>
        </div>
    );
};

export default SocialLogin;