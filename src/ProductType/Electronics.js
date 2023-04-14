import React from "react";
import Datalist from "./datalist";
function Electronics(props) {
    

  return (
    <React.Fragment>
      <div>
        <h3>Electroncis</h3>
        <ol>
          {props.ElectroncisData.map((data) => (
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
export default Electronics;
