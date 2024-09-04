import React, { useEffect, useState } from 'react'
import Header from './Header'
import Users from './Users'
import useConversation from '../../zustand/userConversation'
import MessagePage from './MessagePage'


function Phone() {
    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        console.log("")
    }, [selectedConversation])

    return (

        <div className="">
            {selectedConversation ? (
                <MessagePage selectedConversation={selectedConversation} setSelectedConversation={setSelectedConversation} />
            ) : (
                <div className='h-full w-full p-4'>
                    <Header />
                    <div className="mt-5"> </div>
                    <Users />
                </div>
            )}
        </div>

    )

}

export default Phone
