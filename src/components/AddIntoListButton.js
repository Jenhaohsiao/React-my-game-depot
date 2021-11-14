import { Button } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import styles from "../styles/gameInfo.module.css";

import { useSelector, useDispatch } from "react-redux";
import { addGame } from "../redux/slice/gameListSlice";

function AddIntoListButton(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.gameInfoRow}>
        <Button variant="success" size="sm" onClick={() => dispatch(addGame())}>
          <BsFillSuitHeartFill /> Add to my list
        </Button>
      </div>
    </>
  );
}

export default AddIntoListButton;
