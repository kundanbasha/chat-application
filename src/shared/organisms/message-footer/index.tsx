import Button from "@/shared/atoms/button";
import footerStyles from "./message-footer.module.scss";
import { Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

export default function MessageFooter() {
  const [message, setMessage] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(message);
  };

  return (
    <form onSubmit={handleSubmit} className={footerStyles.form}>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button>Send</Button>
    </form>
  );
}
