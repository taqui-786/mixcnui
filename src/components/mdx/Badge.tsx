import { cn } from '@/lib/utils'
import React from 'react'
type BadgeProps = {
    label:string,
    className?:string,
}
function Badge({className,label}:BadgeProps) {
  return (
    <span className={cn("text-xs bg-gray-200 text-primary border border-black rounded-full py-1 px-1  ", className)}>{label}</span>
  )
}

export default Badge