import MessageItem from "./message-item";
import { useRecoilValue } from "recoil";
import { activeUserMessages } from "@/recoil/messages";
import { IMessage } from "./types";

export default function MessageList() {
  const messages = useRecoilValue(activeUserMessages);

  return (
    <div>
      {messages.map((message: IMessage) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}
