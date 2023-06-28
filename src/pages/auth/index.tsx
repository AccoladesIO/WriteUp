import React, { useContext } from 'react'
import { WriteUpContext } from '../../../context/WriteUpContext';
import Navbar from '@/components/Navbar';
import { ToastContainer } from 'react-toastify';
const SignInPage = () => {

  const {handleUserAuth, currUser} = useContext(WriteUpContext)


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-400 p-8">
      <ToastContainer />
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-center">{currUser && 'Sign in to get premium content'}</h1>
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-xl mb-4">Sign in with Google</h2>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleUserAuth}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
