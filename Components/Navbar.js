import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-container p-4 h-14 w-full bg-black text-white '>
      <ul className='flex justify-center items-center gap-4 text-xl '>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/AllChars">Characters</Link>
        </li>

        <li>
          <Link href="/">Episodes</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default Navbar