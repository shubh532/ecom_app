import React, { useState } from "react";

function AddProduct(props) {
  const [ProductID, setProductID] = useState("");
  const [sellPrice, setsellPrice] = useState("");
  const [ProductName, setProductName] = useState("");
  const [Category, setCategory] = useState("Food");

  const getProductID = (event) => {
    setProductID(event.target.value);
  };
  const getsellingPrice = (event) => {
    setsellPrice(event.target.value);
  };
  const getProductName = (event) => {
    setProductName(event.target.value);
  };
  const getProductCategory = (event) => {
    setCategory(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    props.getData(ProductID, sellPrice, ProductName, Category);
    // setProductID('')
    // setsellPrice('')
    // setProductName("")
    // setCategory("")
  };
  return (
    <form onSubmit={onSubmitForm}>
      <label>Product ID: </label>
      <input type="text" value={ProductID} onChange={getProductID} />
      <label>Selling Price: </label>
      <input type="number" value={sellPrice} onChange={getsellingPrice} />
      <label>Product Name: </label>
      <input type="text" value={ProductName} onChange={getProductName} />
      <label>Category: </label>
      <select id="Products" value={Category} onChange={getProductCategory}>
        <option value="Food">Food</option>
        <option value="Electronics">Electronics</option>
        <option value="SkinCare">SkinCare</option>
      </select>
      <button type="submit">ADD PRODUCT</button>
    </form>
  );
}

export default AddProduct;
