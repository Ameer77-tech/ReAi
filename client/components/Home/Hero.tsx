import React from 'react'
import { Card, CardDescription, CardFooter, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { quicksand } from '@/fonts/Fonts'

const Hero = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Card className='border-0 bg-transparent shadow-none items-center'>
        <CardTitle className='text-4xl lg:text-6xl text-center uppercase lg:w-200 bg-linear-to-r bg-clip-text text-transparent from-primary to-white md:w-150 font-black'>Build a Professional Resume with AI</CardTitle>
        <CardDescription className='text-center w-90 text-sm lg:w-120 lg:text-md md:text-md bg-linear-to-r bg-clip-text text-transparent from-white from-20% to-white/50 '>Enter your details once and generate a clean, ATS-friendly resume instantly.
            No signup required.</CardDescription>
      <CardFooter><Button className={`rounded-xl ${quicksand.className} font-black antialiased cursor-pointer py-7 text-background bg-linear-to-r from-primary from-50% to-background/60`}>Generate My Resume <ArrowRight / ></Button></CardFooter>
      </Card>
    </div>
  )
}

export default Hero;