
# Backend Challenge 20250422

## Introdução

Este projeto consiste no desenvolvimento de uma API REST para gerenciar produtos para gestão de produtos de supermercado.

## Tecnologias Utilizadas

- **Linguagem:** TypeScript
- **Banco de Dados:** MongoDB
- **Testes:** Unitários
- **Outros:** Docker

## Instalação e Uso

### Pré-requisitos

- Node.js (v18 ou superior)
- MongoDB Atlas (ou uma instância MongoDB local)
- Docker (opcional, para facilitar o deploy)

### Passos para Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/mfernandes95/supermarket-api
   ```

2. **Navegue até o diretório do projeto**

   ```bash
   cd supermarket-api
   ```

3. **Instale as dependências**

   ```bash
   npm i
   ```

   ou

   ```bash
   yarn
   ```
4. **Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:**

   ```bash
    MONGO_URI=mongodb://localhost:27017/supermarket-db?retryWrites=true&w=majority
    PORT=3000

   ```

5. **Inicie um container do MongoDB com o Docker**

   ```bash
   docker-compose up -d
   ```

6. **Insira o seed com as marcas no DB** 

   ```bash
   npx ts-node src/infrastructure/database/seed/seedBrands.ts
   ```

7. **Inicie o servidor de desenvolvimento**

   ```bash
   npm start
   ```

   ou

   ```bash
   yarn start
   ```

8. **Abra o navegador e acesse**

   ```
   http://localhost:3000/brands
   ```

9. **Você verá algo similar aí, é só pegar o ID da marca e criar um novo produto pelas collections do Postman(instruções de importação de collection abaixo).**
   ```plaintext
   {
    "brands": [
        {
            "id": "6807ae78b06dfbc214566c70",
            "name": "Nike"
        },
        {
            "id": "6807ae78b06dfbc214566c71",
            "name": "Adidas"
        },
        {
            "id": "6807ae78b06dfbc214566c72",
            "name": "Apple"
        },
        {
            "id": "6807ae78b06dfbc214566c73",
            "name": "Samsung"
        },
        {
            "id": "6807ae78b06dfbc214566c74",
            "name": "Sony"
        }
    ],
    "total": 5,
    "page": 1,
    "totalPages": 1
}
   ```


## Instruções Adicionais

### 1. Collection do Postman

Para facilitar o teste dos endpoints da API, uma collection do Postman está disponível no arquivo `SUPERMARKET.postman_collection.json` na raiz do projeto. Siga os passos abaixo para usá-la:

1. Abra o Postman.
2. Vá em **File > Import**.
3. Selecione o arquivo `SUPERMARKET.postman_collection.json` que está localizado na raiz do projeto.
4. A collection será carregada no Postman, contendo todos os endpoints da API para teste.

#### A collection contém os seguintes endpoints:

- **GET /products**: Lista todos os produtos.
- **POST /products**: Cria um novo produto.

- **GET /brands**: Lista todos as marcas.

## Estrutura do Projeto

```plaintext
project-root/
├── src/
│   ├── application/
│   │   ├── use-cases/
│   │   │   ├── getProductUseCase.ts
│   │   │   └── ... (outros casos de uso)
│   │   ├── interfaces/
│   │   │   └── ... (interfaces de casos de uso)
│   ├── domain/
│   │   ├── entities/
│   │   │   └── productEntity.ts
│   │   ├── repositories/
│   │   │   └── productRepository.ts
│   │   └── types/
│   │       └── productTypes.ts
│   ├── infrastructure/
│   │   ├── repositories/
│   │   │   └── productRepositoryImpl.ts
│   │   ├── database/
│   │   │   └── ... (configuração e conexão com o banco de dados)
│   │   └── ... (outros serviços de infraestrutura)
│   ├── interfaces/
│   │   ├── controllers/
│   │   │   └── getProductController.ts
│   │   ├── routes/
│   │   │   └── productRoutes.ts
│   │   └── middleware/
│   │       └── ... (middleware, como autenticação)
│   ├── errors/
│   │   ├── productNotFoundError.ts
│   │   └── ... (outros erros personalizados)
│   ├── config/
│   │   └── ... (configurações gerais, como .env)
│   ├── server.ts
│   └── app.ts
├── tests/
│   ├── unit/
│   │   └── ... (testes unitários)
│   ├── integration/
│   │   └── ... (testes de integração)
│   └── ... (outros testes)
├── .env
├── tsconfig.json
├── package.json
└── README.md
```

## Endpoints da API

- **`GET /products`**: Lista todos os produtos com paginação.

- **`POST /products`**: Cria um novo produto.

- **`GET /brands`**: Lista todos as marcas com paginação.


## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a licença XYZ - consulte o arquivo `LICENSE` para obter detalhes.

## Autor

Desenvolvido por Matheus Fernandes Pinheiro.
