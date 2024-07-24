import { NextFunction, Request, Response } from "express";
import { z } from 'zod';

export const validateCreateShoe = (req: Request, res: Response, next: NextFunction) => {
  const shoeSchema = z.object({
    model: z.string().min(1, { message: 'O modelo é obrigatório.' }),
    brand: z.string().min(1, { message: 'A marca é obrigatória.' }),
    price: z.number().positive({ message: 'Preço inválido.' }),
    image_url: z.string().url({ message: 'A URL da imagem deve ser válida.' })
  })

  try {
    shoeSchema.parse(req.body);

    next();

  } catch (error: any) {
    return res.status(400).json({
      errors: error.errors.map((e: any) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }
}
