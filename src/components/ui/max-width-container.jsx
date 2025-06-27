import React from 'react'

export default function MaxWidthContaner({children, className}) {
  return (
    <div className={`max-w-[1870px] mx-auto ${className}`}>
        {children}
    </div>
)}
