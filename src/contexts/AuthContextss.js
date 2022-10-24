import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


const auth = getAuth(app)
export const userContext = createContext();


export const AuthContext = createContext();

const AuthProvidersss = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  const logOutHandle = () => {
    setLoading(true);
    return signOut(auth)
  }

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const handleGithubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (user === null || currentUser.emailVerified) {
        setUser(currentUser)
      }
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    createUser,
    logOutHandle,
    loginUser,
    verifyEmail,
    handleGoogleLogIn,
    handleGithubLogin,
  }


  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvidersss;