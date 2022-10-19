import React, { useState } from "react";
import { isPropertyAccessChain } from "typescript";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [show, setShow] = useState(false);
    const btnClassName = !show ? "bg-yellow-400" : "bg-blue-400"
const btnClasses = ["py-2 px-4 border", btnClassName]
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={btnClasses.join(" ")}
      >
        {!show ? "Show Details" : "Hide Details"}
      </button>
      {show &&
      <>
        <p>{product.description}</p>
        <p>Rate: <span style={{fontWeight:"bold"}} >{product?.rating?.rate}</span> </p>
      </>
      }
    </div>
  );
}

export default Product;
