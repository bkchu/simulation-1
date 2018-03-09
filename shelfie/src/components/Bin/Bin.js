import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";

class Bin extends Component {
  state = {
    disabled: true,
    name: "",
    price: ""
  };

  componentDidMount() {
    axios
      .get(`/api/bin/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          name: response.data[0].name,
          price: response.data[0].price.toFixed(2)
        });
      })
      .catch(error => console.log(error));
  }

  onNameChangeHandler = e => {
    this.setState({ name: e.target.value });
  };

  onPriceChangeHandler = e => {
    this.setState({ price: e.target.value });
  };

  onEditClickHandler = () => {
    if (this.state.disabled === true) {
      this.setState({ disabled: false });
    } else {
      axios
        .put(
          `/api/bin/${this.props.match.params.id}?name=${
            this.state.name
          }&price=${this.state.price}`
        )
        .then(response => {
          this.setState({ disabled: true });
        })
        .catch(error => console.log(error));
    }
  };

  onDeleteClickHandler = () => {
    axios
      .delete(`/api/bin/${this.props.match.params.id}`)
      .then(response => {
        this.props.history.goBack();
      })
      .catch(error => console.log(error));
  };

  render() {
    let { disabled, name, price } = this.state;

    return (
      <div className="Bin">
        <Header {...this.props} />
        <p className="Bin__label">Name</p>
        <input
          className="Bin__input"
          onChange={this.onNameChangeHandler}
          disabled={disabled}
          value={name}
          type="text"
        />
        <p className="Bin__label">Price</p>
        <input
          className="Bin__input"
          onChange={this.onPriceChangeHandler}
          disabled={disabled}
          value={price}
          type="text"
        />
        <div className="Bin__buttons">
          <button
            className={`Bin__button ${!disabled && "Bin__button--save"}`}
            onClick={this.onEditClickHandler}
          >
            {disabled ? `Edit` : `Save`}
          </button>
          <button className="Bin__button" onClick={this.onDeleteClickHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Bin;
