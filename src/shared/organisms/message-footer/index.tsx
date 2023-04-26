import Button from "@/shared/atoms/button";
import footerStyles from "./message-footer.module.scss";
import { Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import messagesAtom from "@/recoil/messages";
import activeUser from "@/recoil/active-user";
import { IMessage } from "../message-list/types";

export default function MessageFooter() {
  const updateMessages = useSetRecoilState(messagesAtom);
  const activeUserId = useRecoilValue(activeUser);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    updateMessages((prevMessages: any) => {
      return [
        ...prevMessages,
        { id: prevMessages.length + 1, message, createdBy: activeUserId },
      ];
    });
  };

  return (
    <form onSubmit={handleSubmit} className={footerStyles.form}>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button>Send</Button>
    </form>
  );
}
