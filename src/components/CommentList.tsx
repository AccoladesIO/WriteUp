import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Image from 'next/legacy/image';

// type commentData = {
//   id: string,
//   data: {
//     commentId: string,
//     postId: string,
//     author: string,
//     body: string // Include the 'body' property in the commentData type
//   }
// };

type CommentListProps = {
  commentDetails: any[] | undefined;
};

const CommentList = (props: CommentListProps) => {

  const { commentDetails } = props;
  const [authorData, setAuthorData] = useState<any | null>(null);
  
  // useEffect(() => {

  //   commentDetails?.map((comment) =>{
  //     console.log(comment.data.postId);
  //       const getAuthorData = async () => {
  //         setAuthorData(((await getDoc(doc(db, 'users', comment.post.id))).data()))
  //         console.log(authorData)
  //       }
  //   })
  //   // const getAuthorData = async () => {
  //   //   // console.log((await getDoc(doc(db, 'users', post.data.author))).data(), 'update')
  //   //   // const data =  commentDetails?.map((comment) => comment.data.postId)
  //   //   // setAuthorData((await getDoc(doc(db, 'users', data))).data());
  //   // };
  //   // console.log(authorData)
  //   getAuthorData();
  // }, []);  
  // console.log(authorData)

  useEffect(() => {
    const fetchAuthorData = async () => {
      if (commentDetails) {
        const promises = commentDetails.map(async (comment) => {
          const authorSnapshot = await getDoc(doc(db, 'users', comment.data.postId));
          return authorSnapshot.data();
        });
        const authorDataArray = await Promise.all(promises);
        setAuthorData(authorDataArray);
      }
    };

    fetchAuthorData();
  }, [commentDetails]);

  console.log(authorData);

  return (
    <div>
      {commentDetails?.map((comment) => {
        
        return (
          <div key={comment.id} className='w-[300px] mt-2 p-4 border border-b border-t-0 border-l-0 border-r-o flex items-center justify-center'>
            <span className='w-[50px] h-[50px] rounded-full relative gap-2'>
              <Image src={`${authorData.imageUrl}`} width={40} height={40} className='object-cover'/>
            </span>
            <p className='text-[14px] text-gray-500'>
            {comment.data.body} {/* Access the 'body' property directly */}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
