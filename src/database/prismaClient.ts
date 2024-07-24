// import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export {
  prismaClient
};
