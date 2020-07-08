import React from "react";
import reactCSS from "reactcss";
import PropTypes from "prop-types";

class CommentColor extends React.Component {
  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "40px",
          height: "40px",
          borderRadius: "2px",
          background: `rgba(${this.props.color.r}, ${this.props.color.g}, ${this.props.color.b}, ${this.props.color.a})`,
        },
        swatch: {
          padding: "3px",
          marginRight: "10px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div style={styles.swatch} onClick={this.handleClick}>
        <div style={styles.color} />
      </div>
    );
  }
}

CommentColor.propTypes = {
  commentColor: PropTypes.exact({
    r: PropTypes.string,
    g: PropTypes.string,
    b: PropTypes.string,
    a: PropTypes.string,
  }),
};

export default CommentColor;
