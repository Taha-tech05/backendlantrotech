import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';

dotenv.config();

const globalForPrisma = globalThis;
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma =
  globalForPrisma.__prisma ?? new PrismaClient({ adapter });

globalForPrisma.__prisma = prisma;

export default prisma;