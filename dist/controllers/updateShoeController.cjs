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

// src/controllers/updateShoeController.ts
var updateShoeController_exports = {};
__export(updateShoeController_exports, {
  updateShoe: () => updateShoe
});
module.exports = __toCommonJS(updateShoeController_exports);

// src/database/prismaClient.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  updateShoe
});
