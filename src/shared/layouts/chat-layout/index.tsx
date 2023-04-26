import MessageFooter from "@/shared/organisms/message-footer";
import MessageList from "@/shared/organisms/message-list";
import UserMessageHeader from "@/shared/organisms/user-message-header";
import UsersList from "@/shared/organisms/users-list";
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <Flex gap="24px">
      <UsersList />
      <Flex direction="column">
        <UserMessageHeader />
        <MessageList />
        <MessageFooter />
      </Flex>
    </Flex>
  );
}
