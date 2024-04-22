import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import avatar from '../assets/avatar.png'
import phone from '../assets/phone.png'
import info from '../assets/info.png'
import video from "../assets/video.png"
import emoji from '../assets/emoji.png'
import camera from "../assets/camera.png"
import mic from "../assets/mic.png"
import img from "../assets/img.png"



const Chat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmoji = (e) => {
    setMessage(prev=>prev+e.emoji)
  }
  return (
    <div className='flex-[2] h-full flex flex-col border-r-2 border-gray-400 '>
      <div className='flex items-center justify-between p-3 border-b-2 border-gray-500'>
        <div className='flex items-center space-x-2'>
          <img className='w-16 h-16 rounded-full object-cover' src={avatar} alt="" />
          <div className='flex flex-col'>
            <span className='font-bold'>Alizeh</span>
            <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quia.</p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <img className='w-5 h-5' src={phone} alt="" />
          <img className='w-5 h-5' src={video} alt="" />
          <img className='w-5 h-5' src={info} alt="" />
        </div>
      </div>


      <div className='flex-1 p-3'></div>

      <div className='flex border-t-2 border-gray-500 items-center justify-between p-3 gap-4 mt-auto '>
        <div className='flex gap-4 items-center'>
          <img className='w-6 h-6' src={img} alt="" />
          <img className='w-6 h-6' src={camera} alt="" />
          <img className='w-6 h-6' src={mic} alt="" />
        </div>
        <input value={message} className='flex-1 p-3 outline-none bg-gray-100 rounded-md'  type="text" placeholder='type a message...' onChange={e=>setMessage(e.target.value)} />
        <div className='relative'>
          <img className='w-6 h-6 cursor-pointer' src={emoji} alt="" onClick={()=>setOpen(prev=>!prev)} />
          <div className='absolute left-0 bottom-10'>
            <EmojiPicker onEmojiClick={handleEmoji} theme='dark' emojiStyle='google' open={open} />
          </div>
        </div>
        <button className='bg-green-500 cursor-pointer text-white p-2 rounded-md px-3 font-bold'>Send</button>
      </div>
    </div>
  )
}

export default Chat