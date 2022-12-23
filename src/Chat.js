import React from 'react'
import './chat.css'
import ChatHeader from './chatHeader'
const Chat = () => {
  return (
    <div className='chat'>
        <ChatHeader />
        <div className='chat__messages'>

        </div>
        <div className='chat__input'>

        </div>
        </div>
  )
}

export default Chat