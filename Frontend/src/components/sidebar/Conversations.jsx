import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

function Conversations() {

    const { loading, conversations } = useGetConversation()

    return (
        <div className='py-2 flex flex-col overflow-auto'>

            {
                conversations && conversations.length > 0 && conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        lastIdx={idx === conversation.length - 1}
                    />
                ))
            }

            {
                loading ? <span className='loading loading-spinner mx-auto'></span> : null
            }

        </div>
    )
}

export default Conversations
