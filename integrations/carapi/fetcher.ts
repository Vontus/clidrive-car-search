import { CarApiResponse } from "./types";

type Params = {
  limit?: number;
  page?: number;
  model?: string;
  verbose?: "yes" | undefined;
} & Record<string, any>;

export const carApiFetch = async (
  url: string,
  params: Params = {}
): Promise<CarApiResponse> => {
  const fullUrl = new URL(`${process.env.CARAPI_URL}${url}` as string);

  const searchParams = new URLSearchParams(params);
  fullUrl.search = searchParams.toString();

  const response = await fetch(fullUrl.toString());
  const json = await response.json();

  return CarApiResponse.parse(json);
};
