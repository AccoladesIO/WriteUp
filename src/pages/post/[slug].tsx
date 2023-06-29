import Article from "@/components/Article"
import { useState, useEffect } from 'react'
import ReadersNav from "@/components/ReadersNav"
import Recommendation from "@/components/Recommendation"
import Link from "next/link"
import { useRouter } from "next/router"
import Heads from '@/components/Heads'
import { useContext } from 'react'
import { WriteUpContext } from '../../../context/WriteUpContext'

interface PostData {
    id: string;
    data: {
        author: string;
        // Other properties of a post
    };
    // Other properties of a post
}

interface UserData {
    id: string;
    // Other properties of a user
}

const Post = () => {
    const { posts, users } = useContext(WriteUpContext);
    const [post, setPost] = useState<any[]>([]);
    const [author, setAuthor] = useState<any[]>([]);
    const router = useRouter()

    useEffect(() => {
        if (posts.length === 0) {
          return;
        }
        const foundPost = posts.find((post: PostData) => post.id === router.query.slug);
        if (foundPost) {
          setPost(foundPost);
          setAuthor(users.find((user: UserData) => user.id === foundPost.data.author));
        }
      }, [posts, router.query.slug, users]);

    return (
        <>
            <Heads title='WriteUp' content='Welcome to WriteUp: A Haven for Text-Based Content' />

            <div className="flex ">
                <ReadersNav>
                    <div className="flex flex-col md:flex-row">

                        <Article post={post} author={author} />
                        <Recommendation author={author}/>
                    </div>
                </ReadersNav>
            </div>
        </>
    )
}
export default Post