"use client";
import { useFetch } from "@/hooks/useFetch";
import { CarApiResponse } from "@/integrations/carapi/types";

const filters = {
  limit: 50,
};

export const CarSearch = () => {
  const { data, error, isLoading } = useFetch<CarApiResponse>(
    "api/cars",
    filters
  );

  if (error) {
    return <p>Something went wrong</p>;
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <ul data-testid="car-list">
      {data.data.map((car) => (
        <li key={car.id}>
          <h2>{car.id}</h2>
        </li>
      ))}
    </ul>
  );
};
