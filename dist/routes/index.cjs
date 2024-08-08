"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/database/prismaClient.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();

// src/controllers/readShoeController.ts
var readShoes = async (_req, res) => {
  const shoe = await prismaClient.shoes.findMany({});
  return res.json(shoe);
};
var readShoe = async (req, res) => {
  const { id } = req.params;
  try {
    const idNumber = Number(id);
    const shoe = await prismaClient.shoes.findUnique({
      where: {
        id: idNumber
      }
    });
    if (!shoe) {
      return res.status(404).json({ message: "Item n\xE3o encontrado." });
    }
    ;
    return res.status(200).json(shoe);
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor." });
  }
  ;
};

// src/controllers/createShoeController.ts
var createShoe = async (req, res) => {
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
    res.status(500).json("message: Erro no servidor.");
  }
  ;
};

// src/controllers/updateShoeController.ts
var updateShoe = async (req, res) => {
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
    return res.status(200).json(updatedShoe);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar item." });
  }
  ;
};

// src/controllers/deleteShoeController.ts
var deleteShoe = async (req, res) => {
  const { id } = req.params;
  const idNumber = Number(id);
  try {
    await prismaClient.shoes.delete({
      where: {
        id: idNumber
      }
    });
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Algo deu errado." });
  }
};

// src/middlewares/validateCreateShoe.ts
var import_zod = require("zod");
var validateCreateShoe = (req, res, next) => {
  const shoeSchema = import_zod.z.object({
    model: import_zod.z.string().min(1, { message: "O modelo \xE9 obrigat\xF3rio." }),
    brand: import_zod.z.string().min(1, { message: "A marca \xE9 obrigat\xF3ria." }),
    price: import_zod.z.number().positive({ message: "Pre\xE7o inv\xE1lido." }),
    image_url: import_zod.z.string().url({ message: "A URL da imagem deve ser v\xE1lida." })
  });
  try {
    shoeSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      errors: error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message
      }))
    });
  }
};

// src/middlewares/validateExistingId.ts
var validateExistingId = async (req, res, next) => {
  const { id } = req.params;
  const idNumber = Number(id);
  try {
    const validatedId = await prismaClient.shoes.findUnique({
      where: {
        id: idNumber
      }
    });
    if (!validatedId) throw new Error();
    next();
  } catch (error) {
    return res.status(404).json({ message: "Id n\xE3o encontrado." });
  }
};

// src/routes/index.ts
var router = (0, import_express.Router)();
router.get("/shoes", readShoes);
router.get("/shoes/:id", readShoe);
router.post("/shoes", validateCreateShoe, createShoe);
router.put("/shoes/:id", validateCreateShoe, updateShoe);
router.delete("/shoes/:id", validateExistingId, deleteShoe);
var routes_default = router;
