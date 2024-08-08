import * as React from 'react'
import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="h-14 bg-slate-900 flex justify-center z-10">
            <div className='h-full w-[85%] flex items-center justify-between'>
                <div className='flex gap-5 px-4'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>

                <div className='flex gap-5 px-4'>
                    <Link href="/project">Project</Link>
                    <Link href="/experience">Experience</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar