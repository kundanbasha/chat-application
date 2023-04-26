import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children }: { children: string }) {
  return <ChakraButton>{children}</ChakraButton>;
}
