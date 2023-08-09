import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcons = () => {
  return (
    <Link href={"/cart"} className="flex item-center gap-2">
      <div className='relative w-6 h-6'>
        <Image src={"/cart.png"} alt='' fill />
      </div>
      <span>Cart(3)</span>
    </Link>
  );
};

export default CartIcons;
