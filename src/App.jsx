import { useEffect } from "react";
import "./App.css";
import SingleProduct from "./SingleProduct";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCart] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleCart = (add) => {
    const isAdd = card.find((pd) => pd.id == add.id);
    if (!isAdd) {
      setCart([...card, add]);
    } else {
      alert("already in cart");
    }
  };

  console.log(card);
  return (
    <>
      <h1 className="text-4xl text-center">Programming</h1>

      <div className="flex justify-around mt-10">
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
          {products.map((pd) => (
            <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>
          ))}
        </div>

        <div className="w-[350px] box-shadow-[4px 4px 8px bg-gray-200">
          <h3 className="text-center text-3xl">Shopping</h3>
          <div className="flex justify-around mt-5">
            <h4>name</h4>
            <h4>price</h4>
          </div>
          {/* cart er map */}
          <div>
            {card.map((item) => <>
              <div className="flex justify-around">
                <h4>{item.name}</h4>
                <h4>{item.price}</h4>
              </div>
            </>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
