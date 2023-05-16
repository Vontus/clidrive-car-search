import { carApiFetch } from "@/integrations/carapi/fetcher";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const limit = Number(req.query.limit) || 50;
  const year = Number(req.query.year) || undefined;

  console.log({ year });

  try {
    const models = await carApiFetch("/models/", {
      ...req.query,
      limit,
      year,
      verbose: "yes",
    });
    res.status(200).json(models);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).send(message);
    throw error;
  }
}
