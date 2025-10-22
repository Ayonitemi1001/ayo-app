'use client'

import React from 'react';
// import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
  

  return (
    <div className='Parent h-screen text-white bg-neutral-800'>
      <div className='flex justify-center  gap-10 pt-10'>
        
        <div className='p-3 font-bold text-3xl hover:bg-neutral-900 rounded-lg'>Home</div>
        
        <Link href={'/calculator'}>
        <div className='p-3 font-bold text-3xl hover:bg-neutral-900 rounded-lg'>Calculator</div> </Link>
        
        <Link href={'/mapper'}>
        <div className='p-3 font-bold text-3xl hover:bg-neutral-900 rounded-lg'>Mapper</div></Link>

      </div>

    </div>
  );
}