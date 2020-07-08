import React from "react";
import PropTypes, { exact } from "prop-types";
import Comment from "./Comment";

class CommentsList extends React.Component {
  render() {
    const { items, commentColor } = this.props;
    return (
      <ul className="list-group">
        {items.map(({ id, comments }) =>
          comments.map(({ value }) => {
            return (
              <Comment
                comment={value}
                key={id + value}
                commentColor={commentColor}
              />
            );
          })
        )}
      </ul>
    );
  }
}

CommentsList.propTypes = {
  items: PropTypes.arrayOf(
    exact({
      id: PropTypes.string,
      name: PropTypes.string,
      comments: PropTypes.array,
    })
  ),
};

export default CommentsList;
