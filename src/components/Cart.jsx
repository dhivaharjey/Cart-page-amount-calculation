import React, { useContext } from "react";
import { productContext } from "../App";
import Card from "./Card";
import "./styles/Cart.css";

function Cart() {
  const [data, setData] = useContext(productContext);
  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQunatity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  const handleRemove = (id) => {
    setData(data.filter((data) => data.id !== id));
  };
  return (
    <>
      <div className="    mt-2 ">
        <div className="mt-5 bottom fixed-bottom bg-body-secondary p-0 fw-bolder fs-3 fst-italic ">
          <div className="container d-flex justify-content-around">
            <div>Cart Total Quantity : </div>
            <div className="text-danger"> {totalQunatity}</div>
          </div>
          <div className="container d-flex justify-content-around">
            <div>Cart Total Amount :</div>
            <div className="text-danger"> &#8377;{totalPrice}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          {data.map((item, index) => {
            return (
              <>
                <Card item={item} handleRemove={handleRemove} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
