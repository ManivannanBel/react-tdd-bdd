import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../redux/actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    if (this.props.fetchBitcoin) {
      this.props.fetchBitcoin();
    }
  }

  computeBitcoin = () => {
    const { bitcoin } = this.props;

    if (!bitcoin || Object.keys(bitcoin).length === 0) return "";

    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
    );
  };

  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance,
  bitcoin: state.bitcoin
});

export default connect(mapStateToProps, { fetchBitcoin })(Loot);
