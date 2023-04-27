import { Avatar, Flex, Text } from "@chakra-ui/react";
import { IUser } from "./types";
import { useSetRecoilState } from "recoil";
import activeUserAtom from "@/recoil/active-user";

type Props = {
  user: IUser;
};

export default function UserItem({ user }: Props) {
  const setActiveUser = useSetRecoilState(activeUserAtom);

  return (
    <Flex
      p="12px 24px 12px 12px"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      _hover={{
        backgroundColor: "gray.100",
        cursor: "pointer",
      }}
      onClick={() => setActiveUser(user.id)}
    >
      <Avatar name={user.name} bg="yellow.default" size="md" />
      <Flex direction="column" ml="2">
        <Text fontStyle="sm">{user.name}</Text>
        <Text fontSize="xs">{user.lastMessage}</Text>
      </Flex>
    </Flex>
  );
}
