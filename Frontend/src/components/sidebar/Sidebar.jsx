import React from 'react'
import SearchComponent from './SearchComponent'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchComponent />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar

