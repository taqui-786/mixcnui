import { cn } from '@/lib/utils'
import React from 'react'
type BadgeProps = {
    label:string,
    className?:string,
}
function Badge({className,label}:BadgeProps) {
  return (
    <span className={cn("text-xs bg-gray-100 text-primary  rounded-full py-1 px-2  ", className)}>{label}</span>
  )
}

export default Badge