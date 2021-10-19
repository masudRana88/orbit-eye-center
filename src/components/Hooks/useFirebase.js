import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";
initializeAuthentication()



const useFirebase = () => {
    const [user, setUser] = useState({})
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [iputPass, setInputPass] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // login with google
    const loginWirhGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
            
        })
    }
    // login with emain
    const logInwithEmail = () => {
         signInWithEmailAndPassword(auth, inputEmail, iputPass)
        .then((userCredential) => {
            setUser(userCredential.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    // sing up with emaill
    const singInWithEmaial = () => {
        createUserWithEmailAndPassword(auth, inputEmail, iputPass)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user)
        })
        .catch((error) => {
        console.log(error.code)
        console.log(error.message)
        // ..
    });
    }

    // Sing out
    const logOut = () => {
         signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        // An error happened.
        });
    }
   

    // Observe user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
           setUser({})
        }
        });
    },[])

    return {
        user,
        setInputEmail,
        setInputPass,
        logOut,
        singInWithEmaial,
        logInwithEmail,
        loginWirhGoogle
    }
}

export default useFirebase;