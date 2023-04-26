import dummyMessageResponse from "./data.json";
import MessageItem from "./message-item";

export default function MessageList() {
  return (
    <div>
      {dummyMessageResponse.map((message) => (
        <MessageItem message={message} />
      ))}
    </div>
  );
}
