import React from 'react'
import useConversation from '../../zustand/userConversation'
import { useSocketContext } from '../../context/SocketContext'

function User({ conversation }) {

    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id
    const { onlineUsers } = useSocketContext()
    const isOnline = Array.isArray(onlineUsers) && onlineUsers.includes(conversation._id);

    return (
        <div className={`flex gap-4 items-center hover:bg-sky-500 rounded p-2  py-4 cursor-pointer ${isSelected ? "bg-sky-500" : ""} `}
            onClick={() => setSelectedConversation(conversation)}
        >

            <div className={`avatar ${isOnline ? "online" : ""}`} >
                <div className='w-12 rounded-full border-4 border-blue-500'>
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-white text-xl'>{conversation.fullName}</p>
                    <span className='text-xl'></span>
                </div>
            </div>
        </div>

    )
}

export default User
