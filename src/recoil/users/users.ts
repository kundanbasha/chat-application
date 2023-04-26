import { atom } from "recoil";
import dummyUsersResponse from "./data.json";

const usersAtom = atom({
  key: "users",
  default: dummyUsersResponse,
});

export default usersAtom;
