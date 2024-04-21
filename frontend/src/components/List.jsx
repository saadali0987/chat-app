import React from 'react'
import UserInfo from './UserInfo'
import ChatList from './ChatList'

const List = () => {
  return (
    <div className='flex-1 flex flex-col overflow-scroll'>
        <UserInfo />
        <ChatList />
    </div>
  )
}

export default List