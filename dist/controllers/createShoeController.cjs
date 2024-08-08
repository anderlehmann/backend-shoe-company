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

// src/controllers/createShoeController.ts
var createShoeController_exports = {};
__export(createShoeController_exports, {
  createShoe: () => createShoe
});
module.exports = __toCommonJS(createShoeController_exports);

// src/database/prismaClient.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createShoe
});
