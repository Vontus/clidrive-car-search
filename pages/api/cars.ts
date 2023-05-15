import { carApiFetch } from '@/integrations/carapi/fetcher';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  const limit = Number(req.query.limit) || 50;

  try {
    const response = await carApiFetch({ limit });
    res.status(200).json(response);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).send(message);
    throw error;
  }
}