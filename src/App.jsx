import { useState } from 'react'

function App() {
 const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white justify-center px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>RED</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"Pink"}} onClick={()=>setColor("pink")}>PINK</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"violet"}} onClick={()=>setColor("violet")}>Violet</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>black</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg w' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"hotpink"}} onClick={()=>setColor("hotpink")}>hotpink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg w' style={{backgroundColor:"#EED5AC"}} onClick={()=>setColor("#EED5AC")}>Peach</button>
        </div>
      </div>
    </div>
  )
}

export default App
