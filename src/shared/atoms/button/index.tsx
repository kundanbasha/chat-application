import { Button as ChakraButton } from "@chakra-ui/react";
import type { ComponentProps } from "react";

export default function Button({
  children,
  ...rest
}: ComponentProps<"button"> & { children: string }) {
  return <ChakraButton {...rest}>{children}</ChakraButton>;
}
