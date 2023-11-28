import { prisma } from "../config/database.js";

async function create(name, categoryId) {
    return await prisma.product.create({
        data: {
            name, categoryId
        }
    })
};

async function findById(id) {
    return await prisma.product.findUnique({
        where: { id, }
    })
};

async function findByCategory(categoryId) {
    return await prisma.product.findMany({
        where: { categoryId, }
    });
}

async function findByNameAndCategory(name, categoryId) {
    return await prisma.product.findFirst({
        where: {
            name, categoryId
        }
    })
};

async function findAll() {
    return await prisma.product.findMany();
}


export const productsRepository = {
    create, findById, findByCategory, findByNameAndCategory, findAll
};
