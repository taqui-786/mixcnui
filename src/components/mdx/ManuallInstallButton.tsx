'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
type ManuallInstallButtonProps = {
    name: string,
    href: string,
    
}
function ManuallInstallButton({name="Click Here",href}:ManuallInstallButtonProps) {
  return (
    <Link href={href} className={cn(buttonVariants(),"mt-5")}>{name}</Link>
  )
}

export default ManuallInstallButton