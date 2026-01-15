import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signupWithEmailandPasswordFun = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const sendEmailVerificationFun = (user) => {
        return sendEmailVerification(user)
    }

    const sendPasswordResetEmailFun = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const signInWithEmailAndPasswordFun = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }


    const authInfo = {
        signupWithEmailandPasswordFun,
        sendEmailVerificationFun,
        sendPasswordResetEmailFun,
        signInWithEmailAndPasswordFun,
        user,
        setUser,
        loading,
        setLoading

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Auth state changed:', user);
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();

    }, []);



    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;