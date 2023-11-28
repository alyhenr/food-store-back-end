import { prisma } from "../config/database.js";

async function create(name) {
    return await prisma.category.create({
        data: {
            name
        }
    });
}

async function findById(id) {
    return await prisma.category.findUnique({
        where: { id, }
    });
}

async function findByName(name) {
    return await prisma.category.findUnique({
        where: { name, }
    });
}

async function findAll() {
    return await prisma.category.findMany();
}

async function deleteById(id) {
    return await prisma.category.delete({
        where: { id, }
    });
}

async function deleteByName(name) {
    return await prisma.category.delete({
        where: { name, }
    });
}

export const categoriesRepository = {
    create, findById, findByName, findAll, deleteById, deleteByName
};
