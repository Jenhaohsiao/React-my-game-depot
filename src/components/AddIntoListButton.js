import { Button } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import styles from "../styles/gameInfo.module.css";

function AddIntoListButton(props) {
  return (
    <>
      <div className={styles.gameInfoRow}>
        <Button
          variant="success"
          size="sm"
          onClick={() => props.dispatch({ type: "HAVE_BIRTHDAY" })}
        >
          <BsFillSuitHeartFill /> Add to my list
        </Button>
      </div>
    </>
  );
}

export default AddIntoListButton;
