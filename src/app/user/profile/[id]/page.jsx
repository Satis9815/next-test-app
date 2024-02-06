import React from 'react'

const page = ({params}) => {
    console.log(params);
  return (
    <div>
      Profile page here {params.id}
    </div>
  )
}

export default page
