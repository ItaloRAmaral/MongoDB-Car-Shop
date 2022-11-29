# Car Shop
###### by _[Italo Amaral](https://www.linkedin.com/in/italo-rockenbach-594082132/)_

## :page_with_curl: Sobre - About 

<details>
  <summary>:brazil: Portuguese </summary>

O projeto consolida muito do que foi aprendido desde o início do módulo de Back End, como utilização de Docker, arquiteturação do código seguindo o modelo MSC e criação de APIs RESTful com CRUD completo. No caso deste projeto, nos aprofundamos ainda mais na utilização de SOLID para boa escrita e manutenabilidade do código, bem como utilização de POO e TypeScript para conferir mais robustez ao projeto. Como desafios, tivemos que criar uma API CRUD de uma concessionária, em que é possível ler, criar, editar e deletar veículos (carros e motos) do banco de dados da concessionária. Este projeto utiliza o banco de dados não relacional MongoDB, e para manipulá-lo fizemos uso da ODM Mongoose.

Também foram desenvolvidos testes com cobertura de 100% do projeto, utilizando as ferramentas Mocha, Chai e Sinon.
</details>

<details>
  <summary>:us: English </summary>

The project consolidates much of what was learned since the beginning of the Back End module, such as using Docker, code architecture following the MSC model and creating RESTful APIs with full CRUD. In the case of this project, we delved further into the use of SOLID for good writing and code maintainability, as well as the use of OOP and TypeScript to give the project more robustness. As challenges, we had to create a CRUD API for a dealership, in which it is possible to read, create, edit and delete vehicles (cars and motorcycles) from the dealership database. This project uses the non-relational database MongoDB, and to manipulate it we used ODM Mongoose.

Tests were also developed with 100% coverage of the project, using Mocha, Chai and Sinon tools.

</details>


## :man_technologist: Habilidades desenvolvidas - Skills developed

<details>
  <summary>:brazil: Portuguese </summary>
  
* MongoDB
* Utilização do Mongoose (ODM) para trabalhar com o banco de dados MongoDB
* POO
* Contrução de uma API CRUD utilizando dos preceitos de SOLID
* Testes unitários com: Mocha, Chai e Sinon
</details>

<details>
  <summary>:us: English </summary>
  
* MongoDB
* Use of Mongoose (ODM) to work with the MongoDB database
* OOP
* Construction of a CRUD API using the principles of SOLID
* Unit tests with: Mocha, Chai and Sinon
</details>


## 🛠️ Ferramentas Utilizadas - Tools Used

* MongoDB
* Mongoose.js
* TypeScript
* Node.js
* Express.js
* Mocha.js
* Chai.js
* Sinon.js
* Docker
* OPP
* SOLID


## ⚙️ Como Executar -  How to Run

<details>
  <summary>:brazil: Portuguese </summary>

É necessario ter o Docker instalado.

1. Clone o repositório em uma pasta de preferência

```
git clone git@github.com:ItaloRAmaral/MongoDB-Car-Shop.git
```

2. Entre na pasta raíz do projeto, e instale todas as dependências

```
npm install
```

3. Para rodar o projeto é necessario executar o comando abaixo na raiz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível. Esse comando deve ser executado via terminal dentro do diretório onde está o arquivo docker-compose.yml.

```
docker-compose up -d
```
4. Para rodar o servidor com o docker, basta acessar o terminal do container car_shop e rodar o comando abaixo e utilizar o insomnia, postman ou algum software de sua preferencia

```
npm run dev
```

5. Para testar o projeto use o seguinte script no terminal do container car_shop

```
npm run test:coverage
```
</details>

<details>
  <summary>:us: English </summary>

It is necessary to have Docker installed.

1. Clone the repository in a preferred folder

```
git clone git@github.com:ItaloRAmaral/MongoDB-Car-Shop.git
```

2. Enter the root folder of the project, and install all dependencies

```
npm install
```

3. To run the project you need to run the command below in the root of the project. This will make the docker containers be orchestrated and the application will be available. This command must be executed via terminal inside the directory where the docker-compose.yml file is.

```
docker-compose up -d 
```

4. To run the server with docker, just access the car_shop container terminal and run the command below and use insomnia, postman or any software of your preference

```
npm run dev
```

5. To test the project use the following script in the car_shop container terminal

```
npm run test:coverage
```
</details>

## 📚 Documentação (endpoints) - Documentation (endpoints)

<details>
  <summary>:brazil: Portuguese </summary>

### 🚗 Cars
| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de um veiculo | http://localhost:3001/cars

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo:  </summary>
  
```
{
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary> A resposta da requisição é a seguinte com status 201  </summary>
  
```
{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna erro <code>400</code> caso a requisição receba um objeto vazio; <br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro com quantidade de assentos inferior a 2;<br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro com quantidade de portas inferior a 2;<br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro sem `model`, `year`, `color` e `buyValue`;<br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro sem `doorsQty` e `seatsQty`;<br>
  - Não é possível criar um carro se os atributos `model`, `year`, `color`, `buyValue`, `doorsQty` e `seatsQty` estiverem com tipos errados;<br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de carros cadastrados | http://localhost:3001/cars

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna um carro atravéz do id | http://localhost:3001/cars/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
  - É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `PUT` | Atualizar um carro atravéz do id | http://localhost:3001/cars/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
- É disparado o erro <code>400</code> caso o <code>body</code> esteja vazio; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deletar um carro atravéz do id | http://localhost:3001/cars/:id

* A resposta da requisição é 204 e sem body em caso de sucesso

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
</details>
<br>
<br>


### 🛵 Motorcyle

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de uma moto | http://localhost:3001/motorcycles

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo:  </summary>
  
```
{
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary> A resposta da requisição é a seguinte com status 201  </summary>
  
```
{
   _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- A rota retorna erro <code>400</code> caso a requisição receba um objeto vazio;
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `category` diferente de `Street`, `Custom` ou `Trail`; <br>
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `category` diferente de string; <br>
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `engineCapacity` menor ou igual a zero; <br>
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `engineCapacity` maior que 2500; <br>
- A rota retorna erro <code>400</code> ao tentar criar um moto sem `model`, `year`, `color` e `buyValue`; <br>
- A rota retorna erro <code>400</code> ao tentar criar um moto sem `category` e `engineCapacity`; <br>
- Não é possível criar uma moto se os atributos `model`, `year`, `color`, `buyValue`, `category` e `engineCapacity` estiverem com tipos errados; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de motos cadastradas | http://localhost:3001/motorcycles

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma moto atravéz do id | http://localhost:3001/motorcycles/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
  - É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `PUT` | Atualizar uma moto atravéz do id | http://localhost:3001/motorcycles/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
- É disparado o erro <code>400</code> caso o <code>body</code> esteja vazio; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deletar uma moto atravéz do id | http://localhost:3001/motorcycles/:id

* A resposta da requisição é 204 e sem body em caso de sucesso

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
</details>
<br>
<br>
</details>

<details>
  <summary>:us: English </summary>

### 🚗 Cars

| Method | Functionality | URL |
|---|---|---|
| `POST` | Create a new car | http://localhost:3001/cars

<details>
  <summary> The request body is the following: </summary>
  
```
{
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```
</details>

<details>
  <summary> The response is the following with status 201: </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```
</details>

<details>
  <summary> The request will fail in the following cases: </summary>
- The route returns error <code>400</code> when the request receives an empty object; <br>
- The route returns error <code>400</code> when trying to create a car with `seatsQty` less than 2; <br>
- The route returns error <code>400</code> when trying to create a car with `doorsQty` less than 2; <br>
- The route returns error <code>400</code> when trying to create a car without `model`, `year`, `color` and `buyValue`; <br>
- The route returns error <code>400</code> when trying to create a car without `seatsQty` and `doorsQty`; <br>
- The route returns error <code>400</code> when trying to create a car with `model`, `year`, `color`, `buyValue`, `seatsQty` and `doorsQty` with wrong types; <br>
</details>
<br>
<br>

| Method | Functionality | URL |
|---|---|---|
| `GET` | Returns all cars | http://localhost:3001/cars

<details>
  <summary> The response is the following with status 200: </summary>
  
```
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  ...
]
```
</details>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Returns a car by id | http://localhost:3001/cars/:id

<details>
  <summary> The response is the following with status 200: </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```
</details>

<details>
  <summary> The request will fail in the following cases: </summary>
- The route returns error <code>400</code> when the id has less than 24 characters; <br>
- The route returns error <code>404</code> when the id has 24 characters, but is invalid; <br>
</details>
<br>
<br>

| Method | Functionality | URL |
|---|---|---|
| `PUT` | Update a car by id | http://localhost:3001/cars/:id

<details>
  <summary> The response is the following with status 200: </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```
</details>

<details>
  <summary> The request will fail in the following cases: </summary>

- The route returns error <code>404</code> when the id has 24 characters, but is invalid; <br>
- The route returns error <code>400</code> when the id has less than 24 characters; <br>
- The route returns error <code>400</code> when the request body is empty; <br>
</details>
<br>
<br>

| Method | Functionality | URL |
|---|---|---|
| `DELETE` | Delete a car by id | http://localhost:3001/cars/:id

* The response is 204 and without body in case of success

<details>
  <summary> The request will fail in the following cases: </summary>

- The route returns error <code>404</code> when the id has 24 characters, but is invalid; <br>
- The route returns error <code>400</code> when the id has less than 24 characters; <br>
</details>

### 🏍️ Motorcycles

| Method | Functionality | URL |
|---|---|---|
| `POST` | Create a new motorcycle | http://localhost:3001/motorcycles

<details>
  <summary> The request body is the following: </summary>
  
```
{
  model: "Honda CG 125",
  year: 1980,
  color: "red",
  buyValue: 1500,
  displacement: 125
}
```
</details>

<details>
  <summary> The response is the following with status 201: </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG 125",
  year: 1980,
  color: "red",
  buyValue: 1500,
  displacement: 125
}
```
</details>

<details>
  <summary> The request will fail in the following cases: </summary>

- The route returns error <code>400</code> when the request receives an empty object; <br>
- The route returns error <code>400</code> when trying to create a bike with a `category` other than `Street`, `Custom` or `Trail`; <br>
- The route returns error <code>400</code> when trying to create a motorcycle with `category` other than string; <br>
- The route returns error <code>400</code> when trying to create a motorcycle with `engineCapacity` less than or equal to zero; <br>
- The route returns error <code>400</code> when trying to create a motorcycle with `engineCapacity` greater than 2500; <br>
- The route returns error <code>400</code> when trying to create a moto without `category` and `engineCapacity`; <br>
- The route returns error <code>400</code> when trying to create a bike with `model`, `year`, `color`, `buyValue`, `category` and `engineCapacity` with wrong types; <br>
</details>
<br>
<br>

| Method | Functionality | URL |
|---|---|---|
| `GET` | Returns all motorcycles | http://localhost:3001/motorcycles

<details>
  <summary> The response is the following with status 200: </summary>
  
```
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  ...
]

```
</details>
<br>
<br>

| Method | Functionality | URL |
|---|---|---|
| `GET` | Returns a motorcycle by id | http://localhost:3001/motorcycles/:id

<details>
  <summary> The response is the following with status 200: </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```
</details>

<details>
  <summary> The request will fail in the following cases: </summary>

  - The route returns error <code>400</code> when the id has less than 24 characters; <br>
  - The route returns error <code>404</code> when the id has 24 characters, but is invalid; <br>
</details>
<br>
<br>

| Method | Functionality | URL |
|---|---|---|
| `PUT` | Update a motorcycle by id | http://localhost:3001/motorcycles/:id

<details>
  <summary> The response is the following with status 200: </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```
</details>

<details>
  <summary> The request will fail in the following cases: </summary>

- The route returns error <code>404</code> when the id has 24 characters, but is invalid; <br>
- The route returns error <code>400</code> when the id has less than 24 characters; <br>
- The route returns error <code>400</code> when the request body is empty; <br>
</details>
<br>
<br>

| Method | Functionality | URL |
|---|---|---|
| `DELETE` | Delete a motorcycle by id | http://localhost:3001/motorcycles/:id

* The response is 204 and without body in case of success

<details>
  <summary> The request will fail in the following cases: </summary>

- The route returns error <code>404</code> when the id has 24 characters, but is invalid; <br>
- The route returns error <code>400</code> when the id has less than 24 characters; <br>
</details>
</details>

