import { useEffect } from "react";
import { Flex, Heading, Avatar } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { withActiveUserDetails } from "@/recoil/active-user";
import { IUser } from "../users-list/types";

export default function UserMessageHeader() {
  const activeUserDetails = useRecoilValue(withActiveUserDetails) || {
    name: "",
  };
  const userName: string = activeUserDetails.name;

  return (
    <Flex>
      <Avatar name={userName || "U"} size="sm" mr="2" />
      <Heading size="sm">{userName}</Heading>
    </Flex>
  );
}
