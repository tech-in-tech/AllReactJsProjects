import React from "react";
import Err from "./components/errMess";
import FoodItems from "./components/foodItems";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodItems = ["Dal","Roti","Palak","Paneer","salad"];
  return (
    <>
     
      <Err items = {foodItems}></Err>
      <FoodItems items = {foodItems}></FoodItems>
    </>
  )
}

export default App
