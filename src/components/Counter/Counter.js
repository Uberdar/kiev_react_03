import React from 'react';

export default class Counter extends React.Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  //   counterAHandler = e => {
  //     console.log('e: ', e.target.dataset.set);

  //     this.setState(prevState => ({ counterA: prevState.counterA + 1 }));
  //   };
  //   counterBHandler = e => {
  //     console.log('e: ', e.target);
  //     this.setState(prevState => ({ counterB: prevState.counterB + 1 }));
  //   };

  counterHandler = e => {
    switch (e.target.dataset.set) {
      case 'counterASet':
        this.setState(prevState => ({ counterA: prevState.counterA + 1 }));
        break;
      case 'counterBSet':
        this.setState(prevState => ({ counterB: prevState.counterB + 1 }));
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <p>incrementA: {this.state.counterA}</p>
        <p>incrementB: {this.state.counterB}</p>
        <button
          type="button"
          className="counterA"
          data-set="counterASet"
          onClick={this.counterHandler}
        >
          IncrementA
        </button>
        <button
          type="button"
          className="counterB"
          data-set="counterBSet"
          onClick={this.counterHandler}
        >
          IncrementB
        </button>
      </>
    );
  }
}
