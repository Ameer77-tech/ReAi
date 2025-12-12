import React from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import { manrope  } from '@/fonts/Fonts'

const Header = () => {
  return (
    <Card className='mt-5'>
        <CardHeader className='flex lg:justify-around items-center'>
     <div className='flex items-center'>
        <Image alt="logo" src={"/logo.png"} width={40} height={50}></Image>
        <CardTitle className={`${manrope.className} antialiased lg:text-2xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent`}>ReAi</CardTitle>
        </div>
        </CardHeader>
    </Card>
  )
}

export default Header