import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";
initializeAuthentication()



const useFirebase = () => {
    const [user, setUser] = useState({})
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

    // sing in with emaill
    const singInWithEmaial = (password) => {
        const email ="mahim55@gmail.com"
        createUserWithEmailAndPassword(auth, email, password)
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
        logOut,
        singInWithEmaial,
        loginWirhGoogle
    }
}

export default useFirebase;