import { prisma } from "@/lib/prisma";
import { upload } from "@vercel/blob/client";

export const getImages = async () => {
  try {
    const result = await prisma.upload.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getImageById = async (id: string) => {
  try {
    const result = await prisma.upload.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getSearchProduct = async (query: string) => {
  try {
    const uploads = await prisma.upload.findMany({
      where: {
        OR: [
          {
            JenisProduk: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return uploads;
  } catch (error) {
    console.log('error',error)
    throw new Error("Failed to fetch contact data");
  }
};
