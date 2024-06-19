import React from 'react'

function ComponentPreviewWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='h-80 w-full border border-[#dbdbdb] rounded-md flex items-center justify-center'>{children}</div>
  )
}

export default ComponentPreviewWrapper