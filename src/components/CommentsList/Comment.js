import React from "react";
import PropTypes from "prop-types";
import CommentColor from "./CommentColor";

class Comment extends React.Component {
  state = {
    color: {
      r: this.props.commentColor.r,
      g: this.props.commentColor.g,
      b: this.props.commentColor.b,
      a: this.props.commentColor.a,
    },
  };

  componentDidUpdate(prevProps) {
    if (this.props.commentColor !== prevProps.commentColor) {
      this.setState({
        color: this.state.color,
      });
    }
  }

  render() {
    return (
      <>
        <li className="list-group-item comment-item">
          <CommentColor color={this.state.color} />
          {this.props.comment}
        </li>
      </>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.string,
};

export default Comment;
