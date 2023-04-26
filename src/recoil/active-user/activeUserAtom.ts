import { atom } from "recoil";

const activeUserAtom = atom({
  key: "activeUserAtom",
  default: 1,
});

export default activeUserAtom;
