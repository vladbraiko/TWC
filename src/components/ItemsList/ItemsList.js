import React from "react";
import PropTypes, { exact } from "prop-types";
import Item from "./Item";

class ItemsList extends React.Component {
  state = {
    active: "",
  };

  checkItem = (id) => {
    this.setState({
      active: id,
    });
  };

  passItemIdToComment = () => {
    this.props.onToggleComment(this.state.active);
  };

  render() {
    const { items, onDeleteItem } = this.props;
    return (
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            id={item.id}
            comments={item.comments}
            onDeleteItem={onDeleteItem}
            onCheck={this.checkItem}
            active={this.state.active}
            onToggleComment={this.passItemIdToComment}
          />
        ))}
      </ul>
    );
  }
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    exact({
      id: PropTypes.string,
      name: PropTypes.string,
      comments: PropTypes.array,
    })
  ),
};

export default ItemsList;
