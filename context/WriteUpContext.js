import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const WriteUpContext = createContext();

const WriteProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

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

  return (
    <WriteUpContext.Provider value={{ posts, users }}>
      {children}
    </WriteUpContext.Provider>
  );
};

export { WriteUpContext, WriteProvider };
