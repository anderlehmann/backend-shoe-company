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

// src/controllers/deleteShoeController.ts
var deleteShoeController_exports = {};
__export(deleteShoeController_exports, {
  deleteShoe: () => deleteShoe
});
module.exports = __toCommonJS(deleteShoeController_exports);

// src/database/prismaClient.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteShoe
});
