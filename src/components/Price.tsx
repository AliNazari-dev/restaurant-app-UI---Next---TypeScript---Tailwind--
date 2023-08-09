"use client";

import React, { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  console.log(price);

  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
  }, [quantity, selected, options, price]);
  return (
    <div className='flex flex-col gap-10'>
      <h2 className='text-2xl font-bold'>{total.toFixed(2)}</h2>
      <div className='flex gap-5'>
        {options?.map((option, index) => (
          <button
            key={option.title}
            className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}>
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND AD BUTTON */}
      <div className='flex justify-between items-center'>
        {/*  QUANTITY*/}
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>
          <div className='flex gap-4 items-center'>
            <button className='font-bold border ring-2 ring-red-300 rounded-full w-10' onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
              {"-"}
            </button>
            <span>{quantity}</span>
            <button className='font-bold border ring-2 ring-red-300 rounded-full w-10' onClick={() => setQuantity((prev) => prev + 1)}>
              {"+"}
            </button>
          </div>
        </div>
        {/* CArt BUTTON */}
        <button className='bg-red-500 w-60 text-white p-3 ring-1 ring-red-500'>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Price;