import React from 'react'
import avatar from '../assets/avatar.png'
import phone from '../assets/phone.png'
import info from '../assets/info.png'
import video from "../assets/video.png"
const Chat = () => {
  return (
    <div className='flex-[2] h-full '>
      <div className='flex items-center justify-between p-3 border-b-2 border-gray-500'>
        <div className='flex items-center space-x-2'>
          <img className='w-16 h-16 rounded-full object-cover' src={avatar} alt="" />
          <div className='flex flex-col'>
            <span className='font-bold'>Alizeh</span>
            <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quia.</p>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <img className='w-5 h-5' src={phone} alt="" />
          <img className='w-5 h-5' src={video} alt="" />
          <img className='w-5 h-5' src={info} alt="" />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Chat