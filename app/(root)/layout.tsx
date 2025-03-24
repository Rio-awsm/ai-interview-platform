import { isAuthenticated } from '@/lib/actions/auth.actions'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const Rootlayout = async ({children} : {children : ReactNode}) => {
  const isUserAuth = await isAuthenticated()
  if(!isUserAuth) redirect('/sign-in')
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">Job Ready</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout
