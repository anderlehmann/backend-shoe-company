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

// src/middlewares/validateCreateShoe.ts
var validateCreateShoe_exports = {};
__export(validateCreateShoe_exports, {
  validateCreateShoe: () => validateCreateShoe
});
module.exports = __toCommonJS(validateCreateShoe_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  validateCreateShoe
});
