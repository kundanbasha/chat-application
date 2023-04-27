import Button from "@/shared/atoms/button";
import footerStyles from "./message-footer.module.scss";
import { Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import messagesAtom from "@/recoil/messages";
import activeUser from "@/recoil/active-user";

export default function MessageFooter() {
  const updateMessages = useSetRecoilState(messagesAtom);
  const activeUserId = useRecoilValue(activeUser);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim())
      updateMessages((prevMessages: any) => {
        setMessage("");
        const timestamp = new Date().getTime();
        return [
          ...prevMessages,
          {
            id: timestamp,
            message,
            createdBy: 0,
            to: activeUserId,
          },
          {
            id: timestamp + Math.random(),
            message: `receiver message ${timestamp}`,
            createdBy: activeUserId,
            to: 0,
          },
        ];
      });
    else alert("Please enter message before submit");
  };

  return (
    <form onSubmit={handleSubmit} className={footerStyles.form}>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={handleSubmit}>Send</Button>
    </form>
  );
}
