import Login from './components/login'
import Profile from './components/profile'
import './App.css'
import userContext from './context/userContext'
import userContextProvider from './context/userContextProvider'


function App() {
  return (
   <userContextProvider>
   <h1>context API</h1>
   <Login></Login>
   <Profile></Profile>
   </userContextProvider>
  )
}

export default App
