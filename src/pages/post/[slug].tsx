import Article from "@/components/Article"
import ReadersNav from "@/components/ReadersNav"
import Recommendation from "@/components/Recommendation"
import Link from "next/link"


const Post = () => {
    return (
        <div className="flex ">
            <ReadersNav>
            <div className="flex flex-col md:flex-row">

            <Article />
            <Recommendation />
            </div>
            </ReadersNav>
        </div>
    )
}
export default Post