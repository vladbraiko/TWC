import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "../ColorPicker";

class CommentForm extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAddComment(this.state);

    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group mb-3">
        <ColorPicker onSetColor={this.props.onSetColor} />
        <textarea
          type="input"
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
          className="form-control"
          placeholder="Type comment here..."
        />
        <button type="submit" className="btn btn-info" id="button-addon2">
          Add New
        </button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CommentForm;
