# Car Shop
###### by _[Italo Amaral](https://www.linkedin.com/in/italo-rockenbach-594082132/)_

## :page_with_curl: Sobre

O projeto consolida muito do que foi aprendido desde o início do módulo de Back End, como utilização de Docker, arquiteturação do código seguindo o modelo MSC e criação de APIs RESTful com CRUD completo. No caso deste projeto, nos aprofundamos ainda mais na utilização de SOLID para boa escrita e manutenabilidade do código, bem como utilização de POO e TypeScript para conferir mais robustez ao projeto. Como desafios, tivemos que criar uma API CRUD de uma concessionária, em que é possível ler, criar, editar e deletar veículos (carros e motos) do banco de dados da concessionária. Este projeto utiliza o banco de dados não relacional MongoDB, e para manipulá-lo fizemos uso da ODM Mongoose.

Também foram desenvolvidos testes com cobertura de 100% do projeto, utilizando as ferramentas Mocha, Chai e Sinon. Para executar os testes do projeto, é necessário rodar o comando

## :man_technologist: Habilidades desenvolvidas

* MongoDB
* Utilização do Mongoose (ODM) para trabalhar com o banco de dados MongoDB
* POO
* Contrução de uma API CRUD utilizando dos preceitos de SOLID
* Testes unitários com: Mocha, Chai e Sinon

## 🛠️ Ferramentas utilizadas

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


## ⚙️ Como Executar
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

5. Para testar o projeto use o seguinte script no terminal do container car_shop

```
npm run test:coverage
```

## 📚 Documentação (endpoints)

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
