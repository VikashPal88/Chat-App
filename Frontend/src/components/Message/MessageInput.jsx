import React, { useState } from 'react'
import { BsSend } from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage'

function MessageInput() {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage("")
    }

    return (
        <form className='px-4 my-3 relative w-[80%]' onSubmit={handleSubmit}>
            <div className='w-[55%] bottom-2 fixed flex justify-normal items-center '>
                < input
                    type="text"
                    className=' border text-sm rounded-lg black w-full bg-gray-700 border-gray-600 text-white p-2.5 outline-none '
                    placeholder='send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)
                    }
                />
                < button type='submit' className='absolute inset-y-2 inset-x-96 end-0 flex items-center pe-3' >
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </button >
            </div >
        </form >
    )
}

export default MessageInput
