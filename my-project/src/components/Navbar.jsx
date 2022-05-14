//using .jsx so i can use my html snippets, saves a bit more time//

import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100]'>

        {/* putting the 100 in brackets because z-100 does not exist in tailwind and whenever you want to put a value
        in tailwind we can replace it with brackets to enter our own values */}

        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar