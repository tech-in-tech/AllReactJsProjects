function Err(props){
  // let foodItems = ["Dal","Roti","Palak","Paneer","salad"];
  return(
    props.items.length===0?<h1>Food items are empty</h1>:<h1>healthy food</h1>
  )
}
export default Err;