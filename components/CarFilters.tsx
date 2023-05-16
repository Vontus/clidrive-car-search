"use client";
import { Input, Select } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { CarApiRequest } from "@/integrations/carapi/types";

type Props = {
  className?: string;
  value: CarApiRequest;
  onChange?: (value: CarApiRequest) => void;
};

export const CarFilters: FC<Props> = ({ className, value, onChange }) => {
  return (
    <div className={`${className} flex gap-2 flex-col md:flex-row`}>
      <Input
        data-testid="make-input"
        placeholder="Make (full name)"
        value={value.make}
        onChange={(e) => onChange?.({ ...value, make: e.target.value })}
        className="bg-white"
      />
      <Input
        data-testid="model-input"
        placeholder="Model (full name)"
        value={value.model}
        onChange={(e) => onChange?.({ ...value, model: e.target.value })}
        className="bg-white"
      />
      <Select
        data-testid="year-select"
        value={value.year}
        onChange={(e) => onChange?.({ ...value, year: Number(e.target.value) })}
        className="bg-white min-w-[30px]"
      >
        {/* From 1990 to 2024 */}
        {Array.from({ length: 35 }, (_, i) => i + 1990).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </div>
  );
};
