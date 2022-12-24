import React from 'react'
import './chat.css'
import ChatHeader from './chatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import Message from './message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  return (
    <div className='chat'>
        <ChatHeader />
        <div className='chat__messages'>
            <Message />
            <Message />
            <Message />

        </div>
        <div className='chat__input'>
        <AddCircleIcon />
        <form>
            <input placeholder={`Message #test`}></input>
            <button className='chat__inputButton' type='submit'>Send Message</button>
        </form>
        <div className='chat__inputIcons'>
           <CardGiftcardIcon fontSize='large' />
           <GifIcon fontSize='large' />
           <EmojiEmotionsIcon fontSize='large'/>
        </div>
        </div>
        </div>
  )
}

export default Chat