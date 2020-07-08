import React from "react";
import ItemsForm from "../ItemsForm";
import ItemsList from "../ItemsList";
import styles from "./Items.module.css";

function Items(props) {
  return (
    <div className={styles.container}>
      <ItemsForm onSubmit={props.onAddItem} />
      <ItemsList
        onDeleteItem={props.onDeleteItem}
        onToggleComment={props.onToggleComment}
        items={props.items}
      />
    </div>
  );
}

export default Items;
