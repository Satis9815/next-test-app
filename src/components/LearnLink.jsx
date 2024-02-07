import React from 'react'
import Link from "next/link"

const LearnLink = () => {
    const userId = 1;
  return (
    <div>
      <Link href={"admin/dashboard"}>Go to Admin dashboard</Link>
      <Link href={`/user/profile/${userId}`}>Go to user Profile</Link>
    </div>
  )
}

export default LearnLink
