import React, { useState } from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import CommentsBox from "../CommentBox/CommentBox"




const CommentButton = () => {
const [showCommentBox,setShowCommentBox]= useState(false) 
const onClick = () => setShowCommentBox(true)

  return (
      
      <div id="commentButton">
        <FontAwesomeIcon className= "FAcomments" size="3x" icon={faComment} onClick={onClick} />
        {showCommentBox? <CommentsBox/>:null}
    </div>
   
    
  )
}

export default CommentButton