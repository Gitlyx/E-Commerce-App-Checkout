import { useEffect, useState } from "react";
import { Product } from "./product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

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
        name: "product " + (prevState.length * 100) + 100, 
        price: 300.0,
        brand: 'brandName',
        description: 'desc.',
        pictureUrl: 'http://picsum.photos/240'
      }]);
  };

  return (
    <>
    <h1>Re-Store</h1>
      <div className="prices">
        <ul>
          <button onClick={addProducts}>New product</button>
          {products.map((product) => (
            <li key={product.id}>{product.name} + {product.price}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
