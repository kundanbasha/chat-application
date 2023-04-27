import { IMessage } from "./types";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import activeUserAtom from "@/recoil/active-user";

type Props = {
  message: IMessage;
};

export default function MessageItem({ message }: Props) {
  const isSender = message.createdBy === 0;

  return (
    <Flex w="100%" justifyContent={isSender ? "flex-start" : "flex-end"}>
      <Flex bg="voilet.200" w="fit-content" my="6px" p="8px" borderRadius="4px">
        {message.message}
      </Flex>
    </Flex>
  );
}
