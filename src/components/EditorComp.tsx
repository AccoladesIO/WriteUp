import React, {useState, useEffect, useContext} from 'react'
import { WriteUpContext } from '../../context/WriteUpContext'
import { collection, getDocs, doc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth, provider } from '../../firebase';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from 'react-toastify'


const EditorComp = () => {
    const {currUser} = useContext(WriteUpContext)

    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState('')
    const [category, setCategory] = useState('')
    const [postLength, setPostLength] = useState('')
    const [bannerImage, setBannerImage] = useState('')
    const [body, setBody] = useState('')

    const addPostToFirebase = async (e: React.FormEvent<HTMLFormElement>) => {
        
       try {
        e.preventDefault()
        await addDoc(collection(db, 'articles'), {
            bannerImage: bannerImage,
            body: body,
            brief: brief,
            category: category,
            postedOn: serverTimestamp(),
            postLength: Number(postLength),
            title: title,
            author: currUser.email,
        })


        toast.success('Post created successfully', {
            position: toast.POSITION.TOP_CENTER,
        })
       } catch (error) {
        console.log(error)
        toast.error('post could not be created', {
            position: toast.POSITION.TOP_CENTER,
        })
       } finally{
        setTitle('')
        setBody('')
        setBannerImage('')
        setBrief('')
        setCategory('')
        setPostLength('')
       }
    }
  return (
    <div className='w-full p-8 min-h-[100vh] flex flex-col justify-start items-center border-2 overflow-scroll'>
        <p className='rounded-md text-2xl text-purple-800 bg-purple-200 p-4 font-semibold'>
            Create a New Post
        </p>


        <form action="" onSubmit={addPostToFirebase} className='w-full'>
        <div className='max-w-[900px] w-[90%] sm:w-[70%] mt-12 mx-auto flex flex-col items-start justify-center gap-4'>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Title</h2>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Project title' required/>

            </div>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Brief</h2>
                <input type="text" value={brief} onChange={e => setBrief(e.target.value)} name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Project description' required/>

            </div>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Banner Image</h2>
                <input type="text" value={bannerImage} onChange={e => setBannerImage(e.target.value)} name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Banner Image URL' required/>

            </div>
            <div className="flex flex-col sm:flex-row  justiy-between gap-3 w-full">
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Estimated Read Length</h2>
                <input type="text" value={postLength} onChange={e =>  setPostLength(e.target.value)} name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Estimated Read Length' required/>

            </div>
            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Category</h2>
                <input type="text" value={category} onChange={e => setCategory(e.target.value)} name="title" id="" className='w-full p-4 border border-2-purple'placeholder='Project category e.g productivity, coding, career' required/>

            </div>

            </div>

            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <h2 className='text-[16px] text-purple-700'>Article Text</h2>
                <textarea value={body} onChange={e => setBody(e.target.value)} rows={12} id="" className='w-full p-4 border border-2-purple'placeholder='Edit this field to start' />

            </div>

            <div className='flex items-start flex-col gap-2 w-full mx-auto'>
                <input type='submit'  className='w-full bg-purple-200 text-purple-700 hover:bg-purple-700 hover:text-white p-4 border border-2-purple' value={'Submit'} />
                    <ToastContainer />
            </div>

            </div>
        </form>
    </div>
  )
}

export default EditorComp