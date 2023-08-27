import React from 'react'
import Link from 'next/link'
import Button from '@/components/UI/buttons/Button'

const Topbar = () => {
  return (
    <nav className="bg-rich-black text-light h-[120px] flex justify-between items-center py-10 px-4 md:py-10 xl:px-32">
        <div className="flex gap-1 items-center">
            <Link prefetch href='/'>
                <h2 className="text-light text-2xl font-medium md:text-3xl">SpecialNotes</h2>
            </Link>
        </div>
        <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
                <Link prefetch href='/'>
                    <Button color="Light" text="Back" type="button" />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Topbar