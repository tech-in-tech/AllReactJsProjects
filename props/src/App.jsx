
import Card from './components/card'
function App() {


  return (
    <>
    <div className='flex flex-col justify-center items-center h-[100vh]'>
    <h1 className='mb-7 text-3xl bg-slate-700 border rounded-md p-5 text-white'>This is card</h1>
    <Card name = "Anubhav"/>
    <Card name = "Sharma"/>
    </div>
      

    </>
  )
}

export default App
