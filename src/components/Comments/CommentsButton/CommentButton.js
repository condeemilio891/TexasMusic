import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
const CommentButton = () => {
  return (
   
      <div id="commentButton">
        <FontAwesomeIcon className= "FAcomments" size="3x" icon={faComment} />
      </div>
    
  )
}

export default CommentButton