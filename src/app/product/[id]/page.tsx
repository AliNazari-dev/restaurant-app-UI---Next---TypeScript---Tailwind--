import Image from "next/image";
import React from "react";
import { singleProduct } from "@/data";
import Price from "@/components/Price";

const SingleProductsPage = () => {
  return (
    <div className='p-4 gap-5 lg:px-20 xl:px-40 h-screen flex flex-col justify-around items-center text-red-500 md:flex-row'>
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={singleProduct.img} alt='' className='object-contain' fill />
        </div>
      )}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center' >
        <h1 className='text-3xl uppercase font-bold '>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  );
};

export default SingleProductsPage;
