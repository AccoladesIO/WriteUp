import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db, auth, provider } from '../firebase';
import {signInWithPopup, signOut} from 'firebase/auth'
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const WriteUpContext = createContext();

const WriteProvider = ({ children }) => {
  const router = useRouter()
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currUser, setCurrUser] =  useState(null)

  const getUnlimitedAccess = () => {
    router.push('/pricing')
  }

  const getUsers = async () => {

    const querySnapshot = await getDocs(collection(db, 'users'));
   const data = querySnapshot.docs.map(snapshotDoc => {
    return {
      id: snapshotDoc.id,
      data: {
        ...snapshotDoc.data()
      }
    }
   });
    
    setUsers(data); 
    // console.log(querySnapshot.docs)
  };
  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'articles'))
    const data = querySnapshot.docs.map((snapshotDoc => {
      return {
        id: snapshotDoc.id,
          data: {
            ...snapshotDoc.data()
          }
      }
    }
    ))
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    getUsers();
  }, []);

  const handleUserSignOut = async () => {
    await signOut(auth);
    setCurrUser(null);
    
    
    toast('Sign Out Successful', {
      position: toast.POSITION.TOP_CENTER
    })
    
    // Redirect to the sign-in page after sign-out
    router.push('/auth');
  };


  const handleUserAuth = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      setCurrUser(user);
      addUserToFirebase(user);
  
      // Redirect to dashboard after successful sign-in
      router.push('/');
  
      // Display toast notification
      toast.success('Sign in successful, redirecting you to home', {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      // Handle sign-in error
      console.error('Error signing in:', error);
      toast.error('Sign in failed. Please try again.', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };
  
  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, 'users', user?.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL, // Corrected typo: should be `photoURL` instead of `PhotoUrl`
      followersCount: 0
    });
  };
   

  return (
    <WriteUpContext.Provider value={{ posts, users, handleUserAuth,  currUser, handleUserSignOut, getUnlimitedAccess}}>
      {children}
    </WriteUpContext.Provider>
  );
};

export { WriteUpContext, WriteProvider };
