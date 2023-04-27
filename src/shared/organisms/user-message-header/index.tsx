import { Flex, Heading, Avatar } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { withActiveUserDetails } from "@/recoil/active-user";

export default function UserMessageHeader() {
  const activeUserDetails = useRecoilValue(withActiveUserDetails) || {
    name: "",
  };
  const userName: string = activeUserDetails.name;

  return (
    <Flex
      h="64px"
      p="0 24px"
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="gray.200"
    >
      <Avatar name={userName || "U"} size="sm" mr="2" />
      <Heading size="sm">{userName}</Heading>
    </Flex>
  );
}
