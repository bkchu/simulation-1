import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";

class CreateBin extends Component {
  state = {
    name: "",
    price: ""
  };

  onNameChangeHandler = e => {
    this.setState({ name: e.target.value });
  };

  onPriceChangeHandler = e => {
    this.setState({ price: e.target.value });
  };

  onClickHandler = e => {
    axios
      .post(
        `/api/bin/${this.props.match.params.id}?name=${this.state.name}&price=${
          this.state.price
        }`
      )
      .then(response => {
        this.props.history.goBack();
      })
      .catch(error => console.log(error));
  };

  render() {
    let { name, price } = this.state;
    return (
      <div className="CreateBin">
        <Header {...this.props} />
        <p className="CreateBin__label">Name</p>
        <input
          className="CreateBin__input"
          onChange={this.onNameChangeHandler}
          value={name}
          type="text"
        />
        <p className="CreateBin__label">Price</p>
        <input
          className="CreateBin__input"
          onChange={this.onPriceChangeHandler}
          value={price}
          type="text"
        />
        <button
          id="CreateBin__button--create"
          className="CreateBin__button CreateBin__button--add"
          onClick={this.onClickHandler}
        >
          + Add to Inventory
        </button>
      </div>
    );
  }
}

export default CreateBin;
