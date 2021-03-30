import { fork } from "redux-saga/effects";
import watcherSaga from "./watchers";

export default function* startForman() {
  yield fork(watcherSaga);
}
