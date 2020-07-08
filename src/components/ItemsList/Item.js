import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  handleToggleComment = (id) => {
    this.props.onToggleComment(id);
    this.props.onCheck(id);
  };

  render() {
    const { name, id, onDeleteItem, active, comments } = this.props;

    return (
      <>
        <li
          className={
            active === id
              ? "list-group-item d-flex justify-content-between align-items-center checked"
              : "list-group-item d-flex justify-content-between align-items-center"
          }
          onClick={() => this.handleToggleComment(id)}
        >
          {name}
          <div className="deleteButton">
            <span className="badge badge-primary badge-pill">
              {comments.length}
            </span>
            <button
              type="button"
              onClick={() => onDeleteItem(id)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </li>
      </>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
  active: PropTypes.string,
  comments: PropTypes.array,
};

export default Item;
