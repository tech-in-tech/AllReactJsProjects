import AppName from "./components/headind"
import Row1 from "./components/row1"
import Row2 from "./components/row2"
import Row3 from "./components/row3"
import "./App.css"
function App() {
  return <center class="Todo-container">
    <AppName />
    <div class="container text-center">
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  </center>
}

export default App
