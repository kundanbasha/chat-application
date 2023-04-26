import messages from "./data.json";
import { atom } from "recoil";

const messagesAtom = atom({
  key: "messages",
  default: [],
});

export default messagesAtom;
