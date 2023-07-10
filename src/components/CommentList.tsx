import React from 'react'

type comentListProps = {
    comments: any[]
}
const CommentList = (props: comentListProps) => {
    const {comments} = props
  return (
    <div>
        {comments.map((comment) => {
            console.log(comment)
            return (
                <div>
                    {comment.data.body}
                </div>
            )
        })}
    </div>
  )
}

export default CommentList