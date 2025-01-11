import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux';
import { decrement, increment } from '@/features/counterSlice';

export const Counter = () => {

   const count = useAppSelector(state => state.counter.count);
   const dispatch = useAppDispatch();

   return (
      <div>
         <p className={`font-semibold text-xl`}>{count}</p>
         <button onClick={() => dispatch(increment())} className={'p-5'}>+</button>
         <button onClick={() => dispatch(decrement())} className={'p-5'}>-</button>
      </div>
   );
};
