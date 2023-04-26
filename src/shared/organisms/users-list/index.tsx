import UserItem from "./user-item";
import dummyUsersResponse from "./data.json";
import { IUser } from "./types";
import { Flex } from "@chakra-ui/react";

export default function UsersList() {
  return (
    <Flex direction="column">
      {dummyUsersResponse.map((user: IUser) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Flex>
  );
}
