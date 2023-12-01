import { prisma } from "../config/database.js";

async function create(name, imageUrl, description, price) {
    return await prisma.additional.create({
        data: { name, imageUrl, description, price, }
    });
}

async function findAll() {
    return await prisma.additional.findMany();
}

async function findById(id) {
    return await prisma.additional.findUnique({
        where: { id, }
    });
}

async function findByName(name) {
    return await prisma.additional.findFirst({
        where: { name, }
    });
}

async function additionalToOrder(orderId, additionalId) {
    return await prisma.additionalToOrder.create({
        data: { orderId, additionalId, }
    });
}

export const additionalsRepository = {
    create, findAll, findById, findByName, additionalToOrder
};
