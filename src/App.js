import React from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./components/Items";
import Comments from "./components/Comments";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    itemsList: [],
    id: "",
  };

  componentDidMount() {
    const itemsList = localStorage.getItem("itemsList");
    const parsedItemsList = JSON.parse(itemsList);

    if (parsedItemsList) {
      this.setState({ itemsList: parsedItemsList });
    }
  }

  componentDidUpdate(prevState) {
    const nextItemsList = this.state.itemsList;
    const prevItemsList = prevState.itemsList;

    if (nextItemsList !== prevItemsList) {
      localStorage.setItem("itemsList", JSON.stringify(nextItemsList));
    }
  }

  handleAddItem = ({ name }) => {
    const item = {
      name: name,
      comments: [],
      id: uuidv4(),
    };

    this.setState((prevState) => ({
      itemsList: [item, ...prevState.itemsList],
    }));
  };

  handleDeleteItem = (id) => {
    this.setState((prevState) => ({
      itemsList: prevState.itemsList.filter((item) => item.id !== id),
    }));
  };

  handleAddComment = (comment) => {
    let updateItem = this.state.itemsList;

    if (updateItem.length < 1) {
      alert("Введите заметку выше");
      return;
    } else if (this.state.id === "") {
      alert("Выберите заметку выше, кликнув на нее 2 раза");
      return;
    }

    const checkedItem = updateItem.find((item) => {
      return item.id === this.state.id;
    });
    if (checkedItem) {
      checkedItem.comments.push(comment);
    }
    this.setState({ itemsList: updateItem });
  };

  handleToggleItem = (id) => {
    this.setState({
      id: id,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Items
          onToggleComment={this.handleToggleItem}
          onAddItem={this.handleAddItem}
          onDeleteItem={this.handleDeleteItem}
          items={this.state.itemsList}
        />
        <Comments
          id={this.state.id}
          onAddComment={this.handleAddComment}
          items={this.state.itemsList}
        />
      </div>
    );
  }
}

export default App;
