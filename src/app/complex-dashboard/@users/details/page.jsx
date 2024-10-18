import Link from 'next/link'
import React from 'react'

const UserDetailsPage = () => {
  return (
    <div>
      User Details page <Link href={"/complex-dashboard"}>dashboard</Link>
    </div>
  )
}

export default UserDetailsPage
