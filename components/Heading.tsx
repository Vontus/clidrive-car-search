"use client";
import { Heading as ChakraHeading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading: FC<Props> = ({ children, className, ...props }) => {
  return (
    <ChakraHeading className={className} {...props}>
      {children}
    </ChakraHeading>
  );
};
