import { z } from "zod";

export const Car = z.object({
  id: z.number(),
  make_id: z.number(),
  name: z.string(),
  make: z.object({
    id: z.number(),
    name: z.string(),
  }),
});
export type Car = z.infer<typeof Car>;

export const CarApiResponse = z.object({
  collection: z.object({
    count: z.number(),
    pages: z.number(),
    total: z.number(),
  }),
  data: z.array(Car),
});
export type CarApiResponse = z.infer<typeof CarApiResponse>;

export const CarApiRequest = z.object({
  page: z.number(),
  limit: z.number().optional(),
  year: z.number().optional(),
  make: z.string().optional(),
  model: z.string().optional(),
});
export type CarApiRequest = z.infer<typeof CarApiRequest>;
