"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LearnUseRouter = () => {
    const router = useRouter();
  return (
    <div>
      <button type='button' onClick={()=>router.push("/admin/profile")} >go to admin profile</button>
    </div>
  )
}

export default LearnUseRouter
