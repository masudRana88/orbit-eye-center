import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider , createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";
initializeAuthentication()



const useFirebase = () => {
    const [user, setUser] = useState({})
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [iputPass, setInputPass] = useState('');
    const [isLoding, setIsLoding] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubprovider = new GithubAuthProvider();


     // upadate name 
    const updateUserName = () => {
        updateProfile(auth.currentUser, {
        displayName: inputName
        }).then((result) => {

        }).catch((error) => {
            
        })
    }

    // login with google
    const loginWirhGoogle = () => {
        setIsLoding(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
            
            })
        .finally(()=>setIsLoding(false))
    }
    // login with Github
    const loginWithGithub = () => {
        setIsLoding(true)
        signInWithPopup(auth, gitHubprovider)
            .then((result) => {
             setUser(result.user)
            })
            .catch((error) => {
            })
        .finally(()=>setIsLoding(false))
    }
    // login with emain
    const logInwithEmail = () => {
        setIsLoding(true)
         signInWithEmailAndPassword(auth, inputEmail, iputPass)
        .then((userCredential) => {
            setUser(userCredential.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(()=>setIsLoding(false))
    }

    // sing up with emaill
    const singInWithEmaial = () => {
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, inputEmail, iputPass)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user)
        })
        .catch((error) => {
        console.log(error.code)
            console.log(error.message)
        })
        .finally(() => {
            updateUserName()
            setIsLoding(false)
        })
    }

    // Sing out
    const logOut = () => {
        setIsLoding(true)
         signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        // An error happened.
        })
        .finally(()=>setIsLoding(false))
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
        setIsLoding(false)
    },[])

    return {
        user,
        setInputEmail,
        setInputPass,
        setInputName,
        logOut,
        isLoding,
        singInWithEmaial,
        logInwithEmail,
        loginWirhGoogle,
        loginWithGithub
    }
}

export default useFirebase;