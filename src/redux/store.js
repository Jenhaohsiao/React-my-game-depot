import { configureStore } from "@reduxjs/toolkit";
import gameListRducer from "../redux/slice/gameListSlice";

export default configureStore({
  reducer: {
    gameList: gameListRducer,
  },
});
