import React from "react";
import Datalist from "./datalist";
function SkinCare(props) {

  return (
    <React.Fragment>
      <div>
        <h3>SkinCare</h3>
        <ol >
          {props.SkinCareData.map((data) => (
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
export default SkinCare;
