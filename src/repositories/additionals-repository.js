import { prisma } from "../config/database.js";

async function create(name, price) {
    return await prisma.additional.create({
        data: { name, price, }
    });
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
    create, findById, findByName, additionalToOrder
};