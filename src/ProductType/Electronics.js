import React from "react";
import Datalist from "../List/Datalist";
function Electronics(props) {
  const ListName="list2"
  return (
    <React.Fragment>
      <div>
        <h3>Electroncis</h3>
        <ol id={ListName}>
          {props.ElectroncisData.map((data) => (
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
export default Electronics;
