import React from "react";
import Datalist from "./datalist";
function Food(props) {
  return (
    <React.Fragment>
      <div>
        <h3>Food</h3>
        <ol id="list">
          {props.FoodData.map((data) => (
            <Datalist
              id={data.ID}
              SellPrice={data.SellPrice}
              ProductName={data.ProductName}
              Category={data.Category}
            ></Datalist>
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
}
export default Food;
