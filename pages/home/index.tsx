"use client";
import { useFetch } from "@/hooks/useFetch";
import { CarApiResponse, CarApiRequest } from "@/integrations/carapi/types";
import { Box, Progress, SimpleGrid } from "@chakra-ui/react";
import { CarCard } from "./components/CarCard";
import { CarFilters } from "./components/CarFilters";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { Heading } from "@/components/Heading";

export default function Home() {
  const [filters, setFilters] = useState<CarApiRequest>({
    make: "",
    limit: 50,
    year: 2020,
    page: 1,
  });
  const { data, error, isLoading } = useFetch<CarApiResponse>(
    "api/cars",
    filters
  );

  if (error) {
    return <p>Something went wrong</p>;
  }

  const onChangeFilters = (filters: CarApiRequest) => {
    setFilters({ ...filters, page: 1 });
  };

  return (
    <main>
      <Heading className="flex justify-between p-10 pb-0">
        <p data-testid="page-title">Clidrive Car Search</p>

        <Pagination
          page={filters.page}
          totalPages={data?.collection.pages ?? 0}
          onChange={(page) => setFilters({ ...filters, page })}
          firstPage={1}
        />
      </Heading>
      <CarFilters
        className="m-10 mb-0"
        value={filters}
        onChange={onChangeFilters}
      />
      <div className="h-2 m-10 mb-1">
        {isLoading && (
          <Progress size="xs" isIndeterminate data-testid="progress" />
        )}
      </div>
      <SimpleGrid
        data-testid="car-list"
        minChildWidth="240px"
        spacing="40px"
        className="p-10 pt-0"
        as="ul"
      >
        {data?.data.map((car) => (
          <Box as="li">
            <CarCard car={car} />
          </Box>
        ))}
      </SimpleGrid>
    </main>
  );
}
