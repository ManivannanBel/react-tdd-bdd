import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../redux/actions/balance";

export class Wallet extends Component {
  constructor() {
    super();

    this.state = { balance: undefined };
  }

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value) });
  };

  render() {
    return (
      <div>
        <div className="balance">Wallet Balance: {this.props.balance}</div>
        <input
          className="input-wallet"
          type="text"
          onChange={this.updateBalance}
        />
        <button
          className="button-deposit"
          onClick={() => this.props.deposit(this.state.balance)}
        >
          Deposit
        </button>
        <button
          className="button-withdraw"
          onClick={() => this.props.withdraw(this.state.balance)}
        >
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state
});

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);
