import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import * as product from "../models/product";

function App() {
  const [products, setProducts] = useState<product.Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProducts = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product " + prevState.length * 100 + 100,
        price: 300.0,
        brand: "brandName",
        description: "desc.",
        pictureUrl: "http://picsum.photos/240",
      },
    ]);
  };

  return (
    <>
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct={addProducts}/>
    </>
  );
}

export default App;
