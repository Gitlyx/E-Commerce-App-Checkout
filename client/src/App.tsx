import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "product 1", price: "100.00" },
    { name: "product 2", price: "200.00" },
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/Products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []);

  const addProducts = () => {
    setProducts((prevState) => [
      ...prevState,
      { name: "product " + (prevState.length + 1), price: "300.00" },
    ]);
  };

  return (
    <>
      <div className="prices">
        <ul>
          <button onClick={addProducts}>New product</button>
          {products.map((item, index) => (
            <li key={index}>
              {item.name} + {item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
