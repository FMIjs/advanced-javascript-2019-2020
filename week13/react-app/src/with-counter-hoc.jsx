import React from 'react';

function withCounter(Cmp) {
  return class extends React.Component {

    state = {
      counter: 0
    };

    increment = () => {
      this.setState(({ counter }) => ({ counter: ++counter }));
    };

    render() {
      const { counter } = this.state;
      return <Cmp counterValue={counter} incrementCounter={this.increment} />
    }
  }
}

export default withCounter;
