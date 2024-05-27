import Items from "./item";
import items from "./item";
const FoodItems = (props)=>{
  /* let foodItems = ["Dal","Roti","Palak","Paneer","salad"]; */
  return  (
    <ul className="list-group">
        {props.items.map((items)=>(
          <Items key={items} fooditem = {items}></Items>
        ))}
      </ul>
  );
};

export default FoodItems;