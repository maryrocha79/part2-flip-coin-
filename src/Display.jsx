import React, { Component } from 'react';
import Coin from './Coin';
import './Display.css';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      headsCount: 0,
      tailsCount: 0
    };
  }
  static defaultProps = {
    srcs: [
      'https://www.usmint.gov/wordpress/wp-content/uploads/2017/03/2017-lincoln-penny-proof-obverse-san-francisco.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/2010_cent_reverse.jpg'
    ]
  };
  getRandom() {
    let randomIdx = Math.floor(Math.random() * 2);
    return this.setState({
      src: this.props.srcs[randomIdx],
      tailsCount: this.state.tailsCount + (randomIdx === 1 ? 1 : 0),
      headsCount: this.state.headsCount + (randomIdx === 0 ? 1 : 0)
    });
  }

  flipCoin() {
    this.state.src === this.props.srcs[0]
      ? this.setState({
          src: this.props.srcs[1],
          tailsCount: this.state.tailsCount + 1
        })
      : this.setState({
          src: this.props.srcs[0],
          headsCount: this.state.headsCount + 1
        });
  }

  // flipCount() {
  //   const currHeads = (this.state.src === this.props.srcs[0]);
  //   this.setState({
  //     src: currHeads ? this.props.srcs[1] : this.props.srcs[0],
  //     tailCount : this.state.tailsCount + (currHeads ? 0 :1 ),
  //     headCount : this.state.headCount + (currHeads ? 1 :0 ),
  //   })
  // }

  render() {
    return (
      <div className="Display">
        <h1>Let's flip a coin!</h1>
        <button
          onClick={evt =>
            this.state.src == null ? this.getRandom() : this.flipCoin()
          }
        >
          Flip me
        </button>
        <Coin src={this.state.src} />
        <p>Heads Cound: {this.state.headsCount}</p>
        <p>Tails Cound: {this.state.tailsCount}</p>
        <p>Total Flips: {this.state.headsCount + this.state.tailsCount}</p>
      </div>
    );
  }
}

export default Display;
