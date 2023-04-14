import { useState } from "react";
import AddProduct from "./AddProduct/AddProduct";
import Electronics from "./ProductType/Electronics";
import Food from "./ProductType/Food";
import SkinCare from "./ProductType/Skincare";
import "./App.css";

function App() {
  const [Electroncis, AddNewElectronics] = useState([]);
  const [food, AddNewFood] = useState([]);
  const [Skincare, AddNewSkinCare] = useState([]);

  const DataOfForm = (ID, SellPrice, ProductName, Category) => {
    const productDetails={
      ID: ID,
          SellPrice: SellPrice,
          ProductName: ProductName,
          Category: Category,
    }
    console.log(Category);
    if (Category === "Electronics") {
      AddNewElectronics((prevData) => {
        const upDateData = [...prevData];
        upDateData.unshift({
          ID: ID,
          SellPrice: SellPrice,
          ProductName: ProductName,
          Category: Category,
        });
        return upDateData;
      });
    }
    if (Category === "Food") {
      AddNewFood((prevData) => {
        const upDateData = [...prevData];
        upDateData.unshift({
          ID: ID,
          SellPrice: SellPrice,
          ProductName: ProductName,
          Category: Category,
        });
        return upDateData;
      });
    }
    if (Category === "SkinCare") {
      AddNewSkinCare((prevData) => {
        const upDateData = [...prevData];
        upDateData.unshift({
          ID: ID,
          SellPrice: SellPrice,
          ProductName: ProductName,
          Category: Category,
        });
        return upDateData;
      });
    }
    localStorage.setItem(productDetails.ID,JSON.stringify(productDetails))
  };

  return (
    <div>
      <AddProduct getData={DataOfForm}></AddProduct>
      <div className="Product_Container">
        <Electronics ElectroncisData={Electroncis}></Electronics>
        <Food FoodData={food}></Food>
        <SkinCare SkinCareData={Skincare}></SkinCare>
      </div>
    </div>
  );
}
export default App;
