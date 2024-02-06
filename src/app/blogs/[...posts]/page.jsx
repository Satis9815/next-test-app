import React from 'react'

const page = ({params}) => {
  console.log(params);
  //You can also make the [...posts] optional in roting using [[...posts]] folder name
  return (
    <div>
      Blog posts page here {params.posts[1]}
    </div>
  )
}

export default page
