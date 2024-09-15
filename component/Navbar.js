import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
    <div className ="logo">
      <Image src="/images.jpg"  width={128} height={80} />
     <h1>Ninja List</h1>
    </div>
    <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>

    
  </nav>
  )
}

export default Navbar