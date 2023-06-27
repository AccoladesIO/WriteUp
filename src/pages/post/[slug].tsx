import Article from "@/components/Article"
import ReadersNav from "@/components/ReadersNav"
import Recommendation from "@/components/Recommendation"
import Link from "next/link"
import Heads from '@/components/Heads'


const Post = () => {
    return (
        <>
      <Heads title='WriteUp' content='Welcome to WriteUp: A Haven for Text-Based Content' />

        <div className="flex ">
            <ReadersNav>
            <div className="flex flex-col md:flex-row">

            <Article /> 
            <Recommendation />
            </div>
            </ReadersNav>
        </div>
        </>
    )
}
export default Post