import React, {useState} from 'react'
import ChatItem from './ChatItem'
import search from '../assets/search.png'
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"
import avatar from "../assets/avatar.png"

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
  return (
    <div className='flex-1'>
        <div className='flex items-center space-x-2 p-4'>
            <div className='flex-1 flex bg-gray-500 items-center rounded-md p-1 space-x-2'>
                <img className='cursor-pointer w-5' src={search} alt="" />
                <input className='outline-none bg-transparent flex-1' type="text" placeholder='search' />
            </div>
            <img className={`w-6 cursor-pointer ${addMode? "bg-red-500" : "bg-green-500"} rounded-md p-1`} src={addMode ? minus : plus} alt="" onClick={()=>setAddMode(prev=>!prev)} />
        </div>

        

        <ChatItem name="saad" text="hello dear" avatar={avatar} />
        <ChatItem name="saad" text="hello dear" avatar={avatar} />
        <ChatItem name="saad" text="hello dear" avatar={avatar} />


    

        
    </div>
  )
}

export default ChatList