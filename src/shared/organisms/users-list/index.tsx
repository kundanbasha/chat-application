import UserItem from "./user-item";
import { IUser } from "./types";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import usersAtom from "@/recoil/users/users";

export default function UsersList() {
  const users = useRecoilValue(usersAtom);

  return (
    <Flex direction="column">
      {users.map((user: IUser) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Flex>
  );
}
