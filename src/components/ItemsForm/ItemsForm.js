import React from "react";
import PropTypes from "prop-types";
import styles from "./ItemsForm.module.css";

class ItemsForm extends React.Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.name === "") {
      alert("Заполните поле ввода");
      return;
    }

    this.props.onSubmit(this.state);

    this.setState({
      name: "",
    });
  };

  handleResetInput = () => {
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <>
        <div className={styles.logo} onClick={() => this.handleResetInput()}>
          <h1>DAYRY APP</h1>
          <p>Comment with no sense</p>
        </div>
        <h2 className={styles.title}>Items</h2>
        <form onSubmit={this.onSubmit} className="input-group mb-3">
          <input
            type="input"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Type name here..."
          />
          <button type="submit" className="btn btn-info" id="button-addon2">
            Add New
          </button>
        </form>
      </>
    );
  }
}

ItemsForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ItemsForm;
