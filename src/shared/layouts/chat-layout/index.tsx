import MessageFooter from "@/shared/organisms/message-footer";
import MessageList from "@/shared/organisms/message-list";
import UserMessageHeader from "@/shared/organisms/user-message-header";
import UsersList from "@/shared/organisms/users-list";
import { Avatar, Flex, Heading } from "@chakra-ui/react";

export default function ChatLayout() {
  return (
    <Flex>
      <Flex direction="column" w="300px" h="100vh">
        <Flex h="64px" p="12px" alignItems="center">
          <Avatar name="Chat App" size="sm" />
          <Heading size="md" pl="16px">
            Chat App
          </Heading>
        </Flex>
        <Flex direction="column" h="calc(100vw - 64px)">
          <UsersList />
        </Flex>
      </Flex>
      <Flex direction="column" w="calc(100vw - 300px)" bg="#fafafa">
        <UserMessageHeader />
        <MessageList />
        <MessageFooter />
      </Flex>
    </Flex>
  );
}
