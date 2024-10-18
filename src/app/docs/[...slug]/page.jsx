import { notFound } from 'next/navigation';
import React from 'react';

const page = ({ params }) => {
  console.log(params.slug[0],params.slug[0] === '1');

//   if(params.slug[0] === '1'){
//     console.log("calling here ...")
//     notFound()
//   }
  return (
    <>
      <div>Docs page</div>
    </>
  );
};

export default page;
