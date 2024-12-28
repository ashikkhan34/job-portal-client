import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';

const UseAuth = () => {
    const context = useContext(AuthContext)
    return context;
};

export default UseAuth;