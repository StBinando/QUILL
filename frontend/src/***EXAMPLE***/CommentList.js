import React from "react";
import Comment from "./Comment";

const CommentList = ({comments}) => {

  const commentNodes = comments.map(comment => {
    return (
    //   <Comment author={comment.author}>{comment.text}</Comment>
    <Comment author={comment.username} key={comment.id}>{comment.password}</Comment>
    );
  });

  return(
    <>
      {commentNodes}
    </>
  )

}

export default CommentList;