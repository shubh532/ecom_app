import React from "react";
import Datalist from "../List/Datalist";
function Food(props) {
  const ListName="list3"
  // console.log(props)
  return (
    <React.Fragment>
      <div>
        <h3>Food</h3>
        <ol id={ListName}>
          {props.FoodData.map((data) => (
            <Datalist
              key={data.id}
              id={data.ProductId}
              idName={ListName}
              SellPrice={data.SellPrice}
              ProductName={data.ProductName}
              Category={data.Category}
              DeletBtn={()=>props.DeleteBtn(data.id,data.Category)}
            ></Datalist>
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
}
export default Food;
