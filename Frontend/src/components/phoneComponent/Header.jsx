import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import SearchComponent from '../sidebar/SearchComponent'

function Header() {
    const { authUser } = useAuthContext()
    return (
        <div className='w-full h-[10vh]'>
            <div className='flex gap-5 items-center'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={authUser.profilePic} className='border-blue-500 rounded-full border-4' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Chat App</h1>
                </div>
            </div>
            <div className='mt-5'>
                <SearchComponent />
            </div>
        </div>

    )
}

export default Header
