import styles from "../styles/platform.module.css";

function PlatformItem({ index, item }) {
  // console.log("GameItem props:", item);
  return (
    <>
      <div
        className={styles.platformItemBackground}
        style={{ backgroundImage: "url(" + item.image_background + ")" }}
      >
        <h2 className={styles.platformItemTitle}>{item.name}</h2>
      </div>
    </>
  );
}

export default PlatformItem;
