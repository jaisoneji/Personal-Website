'use client'
import React from 'react'

export default function Pills({
    children,
    className
}) {
  return (
    <div className={`rounded-full px-4 py-2  bg-[#2E2E2E] ring-2 ring-[#717171] ${className}`}>
        {children}
    </div>
  )
}
