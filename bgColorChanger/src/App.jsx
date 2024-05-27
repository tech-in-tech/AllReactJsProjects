import { useState } from "react"
function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-3 py-2 rounded-3xl gap-3 shadow-lg bg-white">
          <button onClick={()=>setColor("blue")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-blue-900 text-white shadow-lg">Blue</button>
          <button onClick={()=>setColor("green")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-green-900 text-white shadow-lg">Green</button>
          <button  onClick={()=>setColor("orange")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-orange-400 text-white shadow-lg">Orange</button>
          <button onClick={()=>setColor("pink")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-pink-500 text-white shadow-lg">Pink</button>
          <button onClick={()=>setColor("yellow")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-yellow-500 text-white shadow-lg">Yellow</button>
          <button onClick={()=>setColor("gray")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-gray-500 text-white shadow-lg">gray</button>
          <button onClick={()=>setColor("white")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-white-900 text-black shadow-lg">White</button>
          <button onClick={()=>setColor("purple")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-purple-500 text-white shadow-lg">purple</button>
          <button  onClick={()=>setColor("red")} className=" focus:animate-spin outline-none px-4 py-1 rounded-full bg-red-500 text-white shadow-lg">red</button>
        </div>
      </div>
    </>
  )
}

export default App
