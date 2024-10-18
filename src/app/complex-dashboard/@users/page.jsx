import Card from '@/components/Card/Card'
import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
  return (
    <Card>
     <div> Users component <Link href={"/complex-dashboard/details"}>user Details page </Link> </div>
    </Card>
  )
}

export default UsersPage
