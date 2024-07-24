import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export const readShoes = async (_req: Request, res: Response) => {

  const shoe = await prismaClient.shoes.findMany({});

  return res.json(shoe);
};
