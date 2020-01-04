import React from 'react';
import withCounter from './with-counter-hoc';

function OtherCounter(props) {
  const { counterValue, incrementCounter } = props;
  return <>
    <div>{counterValue}</div>
    <p>Some text</p>
    <button onClick={incrementCounter}>Increment</button>
  </>
}

export default withCounter(OtherCounter);