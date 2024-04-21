import React from 'react'
import avatar from '../assets/avatar.png'
import edit from '../assets/edit.png'
import more from '../assets/more.png'
import video from '../assets/video.png'

const UserInfo = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        <div className='flex items-center space-x-4'>
            <img className='w-12 h-12 rounded-full object-cover' src={avatar} alt="" />
            <h2 className='font-bold'>Saad Ali</h2>
        </div>
        <div className='flex space-x-4'>
            <img className='w-4 cursor-pointer' src={more} alt="" />
            <img className='w-4 cursor-pointer' src={video} alt="" />
            <img className='w-4 cursor-pointer' src={edit} alt="" />
        </div>
    </div>
  )
}

export default UserInfo