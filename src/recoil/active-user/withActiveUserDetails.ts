import { selector } from "recoil";
import activeUserAtom from ".";
import usersAtom from "../users";

const withActiveUserDetails = selector({
  key: "active-user-details",
  get: ({ get }) => {
    const activeUserId = get(activeUserAtom);
    const users = get(usersAtom);
    return users.find((user) => user.id === activeUserId);
  },
});

export default withActiveUserDetails;
