import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export const validateExistingId = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const idNumber = Number(id);

  try {
    const validatedId = await prismaClient.shoes.findUnique({
      where: {
        id: idNumber
      }
    })

    if (!validatedId) throw new Error;

    next();

  } catch (error: any) {
    return res.status(404).json({ message: 'Id não encontrado.' });
  }
}
