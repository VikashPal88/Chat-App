import React, { useEffect, useRef, useState } from 'react'
import Messages from '../Message/Messages'
import MessageInput from '../Message/MessageInput'
import useConversation from '../../zustand/userConversation'
import { FaArrowLeft } from "react-icons/fa";
import useSendMessage from '../../hooks/useSendMessage';
import { BsSend } from 'react-icons/bs';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessage from '../../hooks/useListenMessage';
import MessageSkeleton from '../../skeletons/MessageSkeleton';
import Message from '../Message/Message';

function MessagePage() {

    const { selectedConversation, setSelectedConversation } = useConversation()

    // useEffect(() => {
    //     // cleanup function (unmounts)
    //     return () => setSelectedConversation(null)


    // }, [setSelectedConversation])




    return (

        selectedConversation && (<div className='md:min-w-[450px] flex flex-col h-[100vh] '>
            <div className='h-[5%] bg-gray-900 px-4 py-2 mb-2 flex gap-5 text-white items-center rounded-xl'>
                <FaArrowLeft
                    className='bg-blue-500 w-7 h-7 rounded-full text-2xl p-1'
                    onClick={() => setSelectedConversation(null)}
                />
                <img src={selectedConversation.profilePic} alt="" className=' w-7 h-7 translate-x-3' />
                <span className=' font-bold text-2xl'> {selectedConversation.fullName}</span>
            </div>
            <PhoneMessages />
            <SendMessage />
        </div>
        )

    )
}

const SendMessage = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage("")
    }

    return (
        <form className='fixed  bottom-2 w-[90%] flex mx-5 h-[5%] ' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center w-full'>
                < input
                    type="text"
                    className=' border text-sm rounded-lg black w-[100%] bg-gray-900 border-gray-600 text-white py-3 px-3 outline-none'
                    placeholder='send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)
                    }
                />
                < button type='submit' className='absolute inset-y-2 inset-x-auto end-0 flex items-center pe-3 text-blue-500 text-2xl' >
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </button >
            </div >
        </form >
    )
}

const PhoneMessages = () => {
    const { messages, loading } = useGetMessages()
    useListenMessage()
    const lastMessageRef = useRef()


    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)

    }, [messages])


    return (
        <div className=' h-[85%] px-4 fex-1 overflow-auto '>
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}

            {
                loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
            }

            {
                !loading && messages.length === 0 && (
                    <p className='text-center'>Send a message to start the conversation</p>
                )
            }
        </div>
    )
}

export default MessagePage
