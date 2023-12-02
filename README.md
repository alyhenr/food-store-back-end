# Devio Challenge - Food Store

### Deploy: https://devio-backend-wb03.onrender.com

## Tecnologias utilizadas:

- JavaScript
- Express
- Joi
- PostgreSQL
- Prisma

API para o projeto Full Stack "Food Store", o codigo do front-end desenvolvido esta disponivel em:
<br />
https://github.com/alyhenr/devio-challenge-front-end
<br />
E a aplicacao funcionando, pode ser acessada em:
<br />
https://devio-challenge-front-end.vercel.app/

Essa API contem as seguintes rotas:

- clients
- categories
- products
- additionals
- orders

Seguindo o fluxo da aplicacao, como admin (no momento, apenas acessar a rota "/admin" no [deploy](https://devio-challenge-front-end.vercel.app/admin), nao foi implementado nenhum sistema de autenticao ou registro, para faciliar a adicao de produtos na loja), pode-se criar novas categorias, produtos e adicionais para os produtos.

## Todas as respostas da api retornam o id (string cuid()), momento de criacao (createdAt) e ultima edicao (updatedAt) dos registros feitos, alem dos objetos a seguir:

> POST /clients para registrar um novo cliente, body esperado:

```json
{
  "name": "Nome do cliente"
}
```

> GET /clients, retorna todos os clientes registrados, podendo o mesmo cliente aparacer mais de uma vez, mas com um codigo diferente, relacionado a alguma ordem feita. Se um cliente tem multiplas ordens, ele tera multiplos registros

```json
[
  {
    "name": "Nome do cliente",
    "code": 1 // autoincremet int
  }
]
```

> POST /categories para criar uma nova categoria, body esperado:

```json
{
  "name": "Nome da categoria",
  "imageUrl": "Link para uma foto representativa"
}
```

> GET /categories, retorna todas as categorias criadas:

```json
[
  {
    "name": "Nome da categoria",
    "imageUrl": "Link para uma foto representativa"
  }
]
```

> POST /products para criar um novo produto, body esperado:

```json
{
  "name": "Nome do produto",
  "imageUrl": "Link para imagem representativa",
  "description": "Descricao do produto",
  "price": 100, //Em centavos (inteiro)
  "categoryId": "id da categoria que pertence o produto"
}
```

> GET /products, retorna todos os produtos criados:

```json
[
  {
    "name": "Nome do produto",
    "imageUrl": "Link para imagem representativa",
    "description": "Descricao do produto",
    "price": 100, //Em centavos (inteiro)
    "categoryId": "id da categoria que pertence o produto"
  }, ...
]
```

> POST /additionals para criar um novo adicional, body esperado:

```json
{
  "name": "Nome do adicional",
  "description": "Descricao",
  "imageUrl": "Link para imagem representativa",
  "price": 100 //Em centavos (inteiro)
}
```

> GET /additionals, retorna todos os adicionals criados:

```json
[
  {
    "name": "Nome do adicional",
    "description": "Descricao",
    "imageUrl": "Link para imagem representativa",
    "price": 100 //Em centavos (inteiro)
  }
]
```

> POST /orders para criar uma nova ordem, body esperado:

```json
{
  "productId": "id do produto",
  "clientName": "Nome do cliente",
  "quantity": 3, //quantidade do produto
  "total": 20.5, //valor do produto mais adicionais
  "observations": "Observacoes feitas pelo cliente",
  "additionals": ["id do adicional", "id de outro adicional"],
  "paymentMethod": "CREDIT" //enum, aceita 'CREDIT', 'DEBIT' e 'MONEY'
}
```

> PUT /orders/:id, onde id corresponde ao id da ordem ja registrada, para atualizar o status de uma ordem, por padrao elas sao criadas com status 'PENDING', body esperado:

```json
{
  "status": "FINISHED" //enum, aceita 'FINISHED' e 'CANCELLED'
}
```

> GET /orders, retorna todos as ordens criadas, juntamente com os dados do produto e cliente relacionados a ordem"

```json
[
  {
    "productId": "id do produto",
    "clientName": "Nome do cliente",
    "quantity": 3, //quantidade do produto
    "total": 20.5, //valor do produto mais adicionais
    "observations": "Observacoes feitas pelo cliente",
    "additionals": ["id do adicional", "id de outro adicional"],
    "paymentMethod": "CREDIT", //enum, aceita 'CREDIT', 'DEBIT' e 'MONEY'
    "product": {
      "name": "Nome do produto",
      "imageUrl": "Link para imagem representativa",
      "description": "Descricao do produto",
      "price": 100, //preco em centavos (inteiro)
      "categoryId": "id da categoria que pertence o produto"
    },
    "client": {
      "name": "Nome do client",
      "code": 1 // inteiro auto incrementado no banco de dados
    }
  }
]
```
