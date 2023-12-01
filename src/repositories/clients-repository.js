import { prisma } from "../config/database.js";

async function create(name) {
    return await prisma.client.create({
        data: {
            name
        }
    });
}

async function findById(id) {
    return await prisma.client.findUnique({
        where: { id, }
    });
}

async function findByName(name) {
    return await prisma.client.findFirst({
        where: {
            name,
        }
    });
}

async function findAll() {
    return await prisma.client.findMany();
}

async function deleteById(id) {
    return await prisma.client.delete({
        where: { id, }
    });
}

export const clientsRepository = {
    create, findById, findByName, findAll, deleteById,
};
