import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export const updateShoe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { model, brand, price, image_url } = req.body;

  const idNumber = Number(id);

  try {
    const updatedShoe = await prismaClient.shoes.update({
      where: {
        id: idNumber
      },
      data: {
        model,
        brand,
        price,
        image_url
      }
    });

    res.status(200).json(updatedShoe);

  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: 'Erro ao atualizar item.' });
  };
};
