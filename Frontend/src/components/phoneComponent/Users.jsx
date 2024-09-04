import React from 'react'
import useGetConversation from '../../hooks/useGetConversation'
import User from './User'

function Users() {
    const { loading, conversations } = useGetConversation()

    return (
        <>
            <div className='w-full min-h-[90vh]'>
                {
                    conversations && conversations.length > 0 && conversations.map((conversation, idx) => (
                        <User
                            key={conversation._id}
                            conversation={conversation}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Users
