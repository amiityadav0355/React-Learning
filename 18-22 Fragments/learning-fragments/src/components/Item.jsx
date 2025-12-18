import styles from "./Item.module.css";

function Item({ foodItems, bought, handleBuyButton }) {
  const handleBuyButtonClicked = (event) => {
    console.log(`${foodItems} is bought.`);
  };

  return (
    <li className={`list-group-item ${bought && 'active'}`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={ handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
