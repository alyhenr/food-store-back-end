import { prisma } from "../config/database.js";

async function create(clientId, productId, quantity, paymentMethod, total, observations) {
    return await prisma.order.create({
        data: {
            clientId, productId, quantity, paymentMethod, total, observations
        }
    });
}

async function findById(id) {
    return await prisma.order.findUnique({
        where: { id, }
    });
}

async function findByClientId(clientId) {
    return await prisma.order.findMany({
        where: { clientId, }
    });
}

async function findByProductId(productId) {
    return await prisma.order.findMany({
        where: { productId, }
    });
}

async function findByStatus(status) {
    return await prisma.order.findMany({
        where: {
            status,
        }
    });
}

async function findAll() {
    return await prisma.order.findMany({
        include: {
            product: true, client: true,
        },
    });
}

async function deleteById(id) {
    return await prisma.order.delete({
        where: { id, }
    });
}

async function updateStatus(id, status) {
    return await prisma.order.update({
        where: { id, },
        data: { status, },
    });
}

export const ordersRepository = {
    create, findById, findByClientId, findByProductId, findByStatus, findAll, deleteById, updateStatus
};
