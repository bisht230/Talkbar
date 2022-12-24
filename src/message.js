import React from 'react'
import './message.css'
import Avatar from '@mui/material/Avatar';
const Message = () => {
  return (
    <div className='message'>
       <Avatar />
       <div className='message__info'>
          <h4>Deepanshu Bisht
          <span className='message__timestamp'>this is a time span</span>
          </h4>
          <p>This is a message</p>
       </div>
    </div>
  )
}

export default Message