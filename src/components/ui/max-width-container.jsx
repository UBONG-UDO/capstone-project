import React from 'react'

export default function MaxWidthContainer({children, className}) {
  return (
    <div className={`max-w-[1870px] mx-auto ${className}`}>
        {children}
    </div>
)}
