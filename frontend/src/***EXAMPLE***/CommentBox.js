import React, {useState} from "react";					// MODIFIED
import CommentList from "./CommentList";
import Comment from "./Comment";

const CommentBox = () => {

  const [comments, setComments] = useState([
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => setComments(data))
  ])

  // const fetchUsers = function(){
  //   const request = fetch("'http://localhost:8080/users'")
  //   .then(response => console.log(response))
  //   .then(data => setComments(data.message))
  // }

    //   const fetchDog =  function(){
    //   fetch('http://localhost:8080/users')
    //   .then(response => response.json())
    //   .then(data => setUsers(data))
    // }

  return (
    <>
      <h2>Users</h2>
      <CommentList comments={comments} />
    </>
  );

}

export default CommentBox;