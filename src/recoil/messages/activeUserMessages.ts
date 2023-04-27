import { IMessage } from "@/shared/organisms/message-list/types";
import { selector } from "recoil";
import activeUserAtom from "../active-user";
import messagesAtom from "./messagesAtom";

const activeUserMessages = selector({
  key: "active-user-messages",
  get: ({ get }): IMessage[] => {
    const activeUserId = get(activeUserAtom);
    const messages = get(messagesAtom);
    const participants = [0, activeUserId];
    return messages.filter(
      (message: any) =>
        participants.includes(message.createdBy) &&
        participants.includes(message.to)
    );
  },
});

export default activeUserMessages;
