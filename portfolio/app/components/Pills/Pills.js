'use client'
import Link from 'next/link'
import React from 'react'

export default function Pills({
    children,
}) {
  return (
    <div className='rounded-full px-2 py-2 flex justify-center items-center gap-[2px] bg-[#2E2E2E] ring-2 ring-[#717171]'>
        {children}
    </div>
  )
}
