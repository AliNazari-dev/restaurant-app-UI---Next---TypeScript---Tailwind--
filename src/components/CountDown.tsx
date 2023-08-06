"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-08-10")

const CountDown = () => {
  return (
    <span className='font-bold text-5xl text-yellow-300'>
      <Countdown date={endingDate} />
    </span>
  );
};

export default CountDown;
