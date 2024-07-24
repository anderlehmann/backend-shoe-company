import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export const createShoe = async (request: Request, response: Response) => {
  const { model, brand, price, image_url } = request.body;

  try {
    const shoe = await prismaClient.shoes.create({
      data: {
        model,
        brand,
        price,
        image_url
      }
    });

    return response.json(shoe);

  } catch (error) {
    response.status(500).json('message: Erro no servidor.')
  }
};
