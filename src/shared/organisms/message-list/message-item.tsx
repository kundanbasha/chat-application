import { IMessage } from "./types";

type Props = {
  message: IMessage;
};

export default function MessageItem({ message }: Props) {
  return <div>{message.message}</div>;
}
