import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessageContainer from '../components/Message/MessageContainer'
import Phone from '../components/phoneComponent/Phone'

function HomePage() {

    const [isMobile, setIsMobile] = useState(false);

    // Function to check screen size
    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 768); // You can adjust the width for mobile
    };

    // Check screen size on mount and resize
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (


        <>

            {
                isMobile ? (
                    <div className='w-full h-full'>
                        < Phone />
                    </div>) : (
                    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800   backdrop-blur-lg '>
                        <Sidebar />
                        <MessageContainer />
                    </div>
                )
            }
        </>


    )
}

export default HomePage
