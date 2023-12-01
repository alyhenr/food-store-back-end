import appErrors from "../errors/appErrors.js";
import { additionalsRepository, clientsRepository, ordersRepository, productsRepository } from "../repositories/index.js";

async function bindAdditionalToOrder(orderId, additionalId) {
    return await additionalsRepository.additionalToOrder(orderId, additionalId);
}

async function validateAdditional(additionalId) {
    const additional = await additionalsRepository.findById(additionalId);

    if (!additional) throw appErrors("Additional does not exist").badRequest();
}

async function create(clientName, productId, quantity, total, paymentMethod, observations, additionals, clientCode) {
    const product = await productsRepository.findById(productId);
    if (!product) throw appErrors("Product not found").notFound();

    let client = await clientsRepository.findByName(clientName);
    if (!client) {
        client = await clientsRepository.create(clientName, clientCode)
    } else {
        await clientsRepository.updateCode(client.id, clientCode);
    }

    if (additionals?.length) {
        for (let i = 0; i < additionals.length; ++i) {
            await validateAdditional(additionals[i].id);
        }
    }

    const newOrder = await ordersRepository.create(client.id, productId, quantity, paymentMethod, total, observations ?? null);

    if (additionals?.length) {
        for (let i = 0; i < additionals.length; ++i) {
            await bindAdditionalToOrder(orderId, additionals[i].id);
        }
    }

    return newOrder;
};

function findAll() {
    return ordersRepository.findAll();
}

async function updateStatus(id, status) {
    const order = await ordersRepository.findById(id);
    if (!order) throw appErrors("Order not found").notFound();

    if (order.status === 'CANCELLED') throw appErrors("Order was cancelled").forbidden();

    const updatedOrder = await ordersRepository.updateStatus(id, status);
    await clientsRepository.finishOrder(updatedOrder.clientId);

    return updatedOrder;
}

export const ordersService = {
    create, findAll, updateStatus,
};
