"use client";
import { useFetch } from "@/hooks/useFetch";
import { CarApiResponse, CarApiRequest } from "@/integrations/carapi/types";
import { Box, Progress, SimpleGrid } from "@chakra-ui/react";
import { CarCard } from "./CarCard";
import { CarFilters } from "./CarFilters";
import { useState } from "react";

export const CarSearch = () => {
  const [filters, setFilters] = useState<CarApiRequest>({
    make: "",
    limit: 50,
    year: 2020,
  });
  const { data, error, isLoading } = useFetch<CarApiResponse>(
    "api/cars",
    filters
  );

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <CarFilters className="m-10 mb-0" value={filters} onChange={setFilters} />
      <div className="h-2 m-10 mb-1">
        {isLoading && (
          <Progress size="xs" isIndeterminate data-testid="progress" />
        )}
      </div>
      <SimpleGrid
        data-testid="car-list"
        minChildWidth="240px"
        spacing="40px"
        className="m-10 mt-0"
        as="ul"
      >
        {data?.data.map((car) => (
          <Box as="li">
            <CarCard car={car} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};
