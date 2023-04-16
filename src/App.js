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

  const handleDeleteBtn= (id, Category) => {
    if (Category === "Electronics") {
      const newData = Electroncis.filter((data) => data.id !== id);
      AddNewElectronics(newData);
    }
    if (Category === "Food") {
      const newData = food.filter((data) => data.id !== id);
      AddNewFood(newData);
    }
    if (Category === "SkinCare") {
      const newData = Skincare.filter((data) => data.id !== id);
      AddNewSkinCare(newData);
    }
    localStorage.removeItem(id)
  };

  const DataOfForm = (ProductId, SellPrice, ProductName, Category) => {
    const productDetails = {
      ProductId: ProductId,
      SellPrice: SellPrice,
      ProductName: ProductName,
      Category: Category,
      id: Math.random(),
    };

    if (Category === "Electronics") {
      AddNewElectronics((prevData) => {
        const upDateData = [...prevData];
        upDateData.unshift(productDetails);
        return upDateData;
      });
    }
    if (Category === "Food") {
      AddNewFood((prevData) => {
        const upDateData = [...prevData];
        upDateData.unshift(productDetails);
        return upDateData;
      });
    }
    if (Category === "SkinCare") {
      AddNewSkinCare((prevData) => {
        const upDateData = [...prevData];
        upDateData.unshift(productDetails);
        return upDateData;
      });
    }
    localStorage.setItem(productDetails.id, JSON.stringify(productDetails));
  };

  return (
    <div>
      <AddProduct getData={DataOfForm}></AddProduct>
      <div className="Product_Container">
        <Electronics ElectroncisData={Electroncis} DeleteBtn={handleDeleteBtn}></Electronics>
        <Food FoodData={food} DeleteBtn={handleDeleteBtn}></Food>
        <SkinCare SkinCareData={Skincare} DeleteBtn={handleDeleteBtn}></SkinCare>
      </div>
    </div>
  );
}
export default App;
