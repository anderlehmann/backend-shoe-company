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

// src/controllers/readShoeController.ts
var readShoeController_exports = {};
__export(readShoeController_exports, {
  readShoe: () => readShoe,
  readShoes: () => readShoes
});
module.exports = __toCommonJS(readShoeController_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  readShoe,
  readShoes
});
