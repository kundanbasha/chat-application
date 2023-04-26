import { Avatar, Flex, Text } from "@chakra-ui/react";
import { IUser } from "./types";

type Props = {
  user: IUser;
};

export default function UserItem({ user }: Props) {
  return (
    <Flex
      p="12px 24px 12px 6px"
      borderRadius="4px"
      _hover={{
        backgroundColor: "gray.100",
      }}
    >
      <Avatar name="basha" bg="yellow.default" />
      <Flex direction="column" ml="2">
        <Text>{user.name}</Text>
        <Text fontSize="xs">{user.lastMessage}</Text>
      </Flex>
    </Flex>
  );
}
