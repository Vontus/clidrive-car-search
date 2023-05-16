import { Button, Flex, Stack } from "@chakra-ui/react";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
  firstPage: number;
};

export const Pagination = ({
  page,
  totalPages,
  onChange,
  className,
}: Props) => {
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      className={`${className} inline-flex`}
    >
      <Stack direction="row" spacing="4">
        <Button
          disabled={isFirstPage}
          onClick={() => !isFirstPage && onChange(page - 1)}
          rel="prev"
        >
          &lt; Previous
        </Button>
        <Button
          disabled={isLastPage}
          onClick={() => !isLastPage && onChange(page + 1)}
          rel="next"
        >
          Next &gt;
        </Button>
      </Stack>
    </Flex>
  );
};
