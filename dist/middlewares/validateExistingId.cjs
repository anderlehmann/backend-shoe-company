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

// src/middlewares/validateExistingId.ts
var validateExistingId_exports = {};
__export(validateExistingId_exports, {
  validateExistingId: () => validateExistingId
});
module.exports = __toCommonJS(validateExistingId_exports);

// src/database/prismaClient.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  validateExistingId
});
