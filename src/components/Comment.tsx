import React, { useEffect, useState } from 'react'
import { collection, getDocs, doc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth, provider } from '../../firebase';
import { WriteUpContext } from '../../context/WriteUpContext';
import CommentList from './CommentList';
import router from 'next/router';

type commentData = {
    id: string,
    data: {
        commentId: string,
        postId: string,
        author: string
    }
}

const Comment = () => {
    const [body, setBody] = useState<string>('')
    const { currUser, comments } = React.useContext(WriteUpContext)
    const [commentDetails, setCommentDetails] = useState<any>([]);


    useEffect(() => {

        const findComment = comments.find((comment: commentData) => comment.data.commentId === router.query.slug)
        console.log(comments)
        if (findComment) {
            setCommentDetails([findComment])
        }
    }, [comments])
    // add comment to firebase
    const addCommentToFirebase = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            await addDoc(collection(db, 'comments'), {
                postId: currUser.email,
                commentId: router.query.slug,
                body: body,
            })
        } catch (error) {
            console.warn(error)
        } finally {
            setBody('')
        }
    }
    return (
        <div className='w-full mt-4 p-4 flex flex-col items-center sm:items-center justify-center'>
            <h1 className='text-center text-2xl italic my-4'>{currUser ? 'Thank you for reading, Leave a heart or drop a comment below!' : 'SignIn to comment'}</h1>
            {currUser &&
                <form action="" className='flex flex-row' onSubmit={addCommentToFirebase}>
                    <input type="text" value={body} onChange={e => setBody(e.target.value)} placeholder='Add comments' className='border border-purple-500 outline-none rounded-md rounded-r-none text-[16px] p-4' />
                    <input type="submit" value="Comment" className='ml-[-4px] border-none outline-none rounded-md rounded-l-none bg-purple-500 text-[16px] text-white p-4' />
                </form>
            }
            <CommentList commentDetails={commentDetails} />
        </div>
    )
}

export default Comment