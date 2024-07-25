import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export const readShoes = async (_req: Request, res: Response) => {
  const shoe = await prismaClient.shoes.findMany({});

  return res.json(shoe);
};

export const readShoe = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const idNumber: Number = Number(id);

    const shoe = await prismaClient.shoes.findUnique({
      where: {
        id: idNumber
      }
    });

    if (!shoe) {
      throw new Error;
    };

    res.status(200).json(shoe);

  } catch (error: any) {
    res.status(404).json({ message: 'Item não encontrado.' });
  };
};