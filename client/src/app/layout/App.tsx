import { Typography } from "@mui/material";
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

  const addProduct = () => {
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 101,
        name: 'product ' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        brand: 'brandName',
        description: 'desc.',
        pictureUrl: 'http://picsum.photos/200',
      }])
  }

  return (
    <>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </>
  )
}

export default App;
