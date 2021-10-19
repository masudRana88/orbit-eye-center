import React, { createContext } from 'react';
import useFirebase from '../../components/Hooks/useFirebase';
export const AuthContex = createContext();
const AuthProvider = ({ children }) => {
    const fireBase = useFirebase()
    return (
        <AuthContex.Provider value={fireBase}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;