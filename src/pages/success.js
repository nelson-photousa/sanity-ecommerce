import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import { useStateContext } from '../../context/StateContext';
import { runConfetti } from '../../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
   
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runConfetti();
    }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase!</h2>
        <p className="email-msg">Check your email for the confirmation!</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:nelsoncpang@gmail.com">
            nelsoncpang@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue SHopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success