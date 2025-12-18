"use client"
import VantaDots from '@/components/bg'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import Templates from '@/components/Home/Templates'
import React from 'react'

const page = () => {
  return (
    <VantaDots>
    <div className='w-full'>
      <Header />
      <Hero />
      <Templates />
    </div>
    </VantaDots>
  )
}

export default page