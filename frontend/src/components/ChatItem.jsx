import React from 'react'

const ChatItem = ({name, text, avatar}) => {
    return (
        <div className='flex items-center space-x-4 p-4 cursor-pointer border-b-2 border-gray-500'>
            <img className='w-10 rounded-full object-cover' src={avatar} alt="" />
            <div className='flex flex-col'>
                <span>{name}</span>
                <p className='font-bold text-xs'>{text}</p>
            </div>
        </div>
    )
}

export default ChatItem