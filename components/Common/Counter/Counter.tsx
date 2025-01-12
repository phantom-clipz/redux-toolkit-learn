'use client';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux';
import { addNumber, decrement, increment, reset } from '@/features/counterSlice';

export const Counter = () => {
   const [number, setNumber] = useState(0);

   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNumber(Number(e.target.value));
   };

   const count = useAppSelector((state) => state.counter.count);
   const dispatch = useAppDispatch();

   return (
      <div>
         <p className={`font-semibold text-xl`}>{count}</p>
         <button onClick={() => dispatch(increment())} className={'p-5'}>
            +
         </button>
         <button onClick={() => dispatch(decrement())} className={'p-5'}>
            -
         </button>
         <button onClick={() => dispatch(reset())} className={'p-5'}>
            Reset
         </button>
         <input
            type={'number'}
            value={number}
            onChange={handleOnChange}
         />
         <button
            onClick={() => dispatch(addNumber(number))}
            className={'p-5'}
         >
            AddNumber
         </button>
      </div>
   );
};
