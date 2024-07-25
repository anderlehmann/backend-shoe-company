import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export const createShoe = async (req: Request, res: Response) => {
  const { model, brand, price, image_url } = req.body;

  try {
    const shoe = await prismaClient.shoes.create({
      data: {
        model,
        brand,
        price,
        image_url
      }
    });

    return res.status(201).json(shoe);

  } catch (error) {
    res.status(500).json('message: Erro no servidor.');
  };
};
