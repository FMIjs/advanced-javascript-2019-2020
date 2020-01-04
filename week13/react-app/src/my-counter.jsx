import React from 'react';
import withCounter from './with-counter-hoc';
import { myService } from './my-service';

function MyCounter(props) {
  const { counterValue, incrementCounter } = props;
  return <>
    <span>{counterValue}</span>
    <button onClick={incrementCounter}>Increment</button>
  </>
}

export default withCounter(MyCounter);