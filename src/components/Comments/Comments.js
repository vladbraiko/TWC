import React from "react";
import PropTypes from "prop-types";
import CommentForm from "../CommentForm";
import CommentsList from "../CommentsList";
import styles from "./Comments.module.css";

class Comments extends React.Component {
  state = {
    color: {
      r: "72",
      g: "63",
      b: "63",
      a: "1",
    },
  };

  handleSetCommentColor = ({ color }) => {
    this.setState({
      color,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Comments #{this.props.id}</h2>
        <CommentsList
          items={this.props.items}
          commentColor={this.state.color}
          id={this.props.id}
        />
        <CommentForm
          onAddComment={this.props.onAddComment}
          onSetColor={this.handleSetCommentColor}
        />
      </div>
    );
  }
}

Comments.propTypes = {
  id: PropTypes.string,
};

export default Comments;
