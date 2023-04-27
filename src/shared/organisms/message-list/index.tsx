import MessageItem from "./message-item";
import { useRecoilValue } from "recoil";
import { activeUserMessages } from "@/recoil/messages";
import { Flex } from "@chakra-ui/react";
import { IMessage } from "./types";
import { useEffect } from "react";

export default function MessageList() {
  const messages = useRecoilValue(activeUserMessages);

  useEffect(() => {
    const element = document.getElementById("dummyLastMessageBlock");
    element?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <Flex direction="column" h="calc(100vh - 128px)" overflowY="auto" p="24px">
      {messages.map((message: IMessage) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div id="dummyLastMessageBlock" />
    </Flex>
  );
}
