"use client"
import VantaDots from '@/components/bg'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import React from 'react'

const page = () => {
  return (
    <VantaDots>
    <div className='min-h-screen w-full'>
      <Header />
      <Hero />
    </div>
    </VantaDots>
  )
}

export default page