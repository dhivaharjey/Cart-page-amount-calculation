import React, { useContext } from "react";
import { productContext } from "../App";
import "./styles/Cart.css";

const Card = ({ item, handleRemove }) => {
  const [data, setData] = useContext(productContext);

  const handleIncrease = (id, quantity) => {
    setData((pData) => {
      console.log(pData);
      return pData.map((item) => {
        if (item.id === id && (item.quantity || quantity) < item.stock) {
          return {
            ...item,
            quantity: item.quantity + 1 || quantity + 1,
          };
        }
        return item;
      });
    });
  };
  const handleDecrease = (id, quantity) => {
    setData((pData) => {
      return pData.map((item) => {
        if (item.id === id && (item.quantity || quantity) > 0) {
          return { ...item, quantity: item.quantity - 1 || quantity };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="card mt-5 col-xxl-9 mx-1 bg-dark-subtle  mb-5 ">
        <div className=" row  d-flex justify-content-between ">
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <img
              src={item.thumbnail}
              className="img-fluid rounded-start"
              alt="...product image"
            />
            <div className=" text-sm-center text-lg-start align-self-center mt-5">
              <button
                className=" btn btn-warning m-3 fw-bolder"
                onClick={() => handleIncrease(item.id, item.quantity || 1)}
              >
                +
              </button>
              <span className="p-3 fw-bolder">{item.quantity || 1}</span>
              <button
                className="m-3 btn  btn-warning   fw-bolder"
                onClick={() => handleDecrease(item.id, item.quantity || 1)}
              >
                -
              </button>
            </div>
            <div className="mt-5 mb-5 text-sm-center text-lg-start   align-self-center">
              <button
                className="btn btn-danger col-12  "
                onClick={() => handleRemove(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>

          <div className=" col-xxl-6 m-3 ps-3">
            <div className="card-body text-sm-center text-lg-start mx-3">
              <h1 className="card-title fw-bolder ">{item.title}</h1>
              <p className="card-text text-dark fw-bolder  fs-6 fst-italic fw-semibold">
                Brand : {item.brand}
              </p>
              <p className="card-text text-dark fs-6 fst-italic fw-semibold">
                {item.description}
              </p>
              <p className="card-text text-dark fs-6 fst-italic fw-semibold">
                Discount : {item.discountPercentage}%
              </p>
              <p className="card-text text-dark fs-6 fst-italic fw-semibold">
                Rating : {item.rating} / 5
              </p>
              <p className="card-text text-dark fs-6 fst-italic fw-semibold">
                Available Stock Quantity :{" "}
                <span className="fw-bolder ">{item.stock}</span> Nos
              </p>
            </div>

            <div className="mx-3">
              <div className=" text-end border-top  py-2 border-5">
                <div className="card-text text-dark fw-bold fs-4 fst-italic d-flex justify-content-between">
                  <div>Price: </div>
                  <div>&#8377;{item.price}</div>
                </div>
              </div>
              <div className=" text-end pt-2 border-bottom py-2 border-5">
                <div className="card-text text-dark fw-semibold fs-3 fst-italic d-flex justify-content-between">
                  <div>Sub Total :</div>
                  <div>&#8377;{item.price * (item.quantity || 1)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
