import { CarApiResponse } from "./types"

type Params = {
  limit?: number
  page?: number
  year?: number
  model?: string
} & Record<string, any>

export const carApiFetch = async (params?: Params): Promise<CarApiResponse> => {
  const url = new URL(`${process.env.CARAPI_URL}/models` as string)
  if (params) {
    const searchParams = new URLSearchParams(params)
    url.search = searchParams.toString()
  }
  const response = await fetch(url.toString())
  const json = await response.json()

  return CarApiResponse.parse(json)
}