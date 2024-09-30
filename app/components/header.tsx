import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    
        <div className='header '>
        <ul className='header-buttons'>
        <Link href={'/'}>
            <li>Home</li>
            </Link>

            <Link href={'/about-us'}>
            <li>About us</li>
            </Link>

            <Link href={'/contact-us'}>
            <li>Contact us</li>
            </Link>

            <Link href={'/project'}>
            <li>Projects</li>
            </Link>
        </ul>
    </div>
      
    
  )
}

export default Header
