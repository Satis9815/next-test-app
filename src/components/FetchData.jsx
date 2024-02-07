async function getData(){
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   return res.json();
}

const FetchData =async () => {
    const data =await getData();
  return (
    <div>
      {
        data.map((item)=>(
            <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  )
}

export default FetchData
