# Gerenciador de Tarefas

## Descrição
O **Gerenciador de Tarefas** é uma aplicação backend que oferece operações CRUD para gerenciar tarefas. Ela permite que usuários criem, leiam, atualizem e excluam tarefas, além de marcar tarefas como concluídas ou pendentes. Este projeto é ideal para desenvolver e demonstrar habilidades em backend, como design de APIs RESTful, estruturação de projetos e manipulação de banco de dados.

## Funcionalidades Principais
- **Autenticação e Autorização:**
  - Registro de usuário.
  - Login de usuário com geração de token JWT.
  - Proteção de rotas para operações de usuário autenticado.

- **Operações CRUD:**
  - Criar, ler, atualizar e excluir tarefas.
  - Marcar tarefas como concluídas ou pendentes.
  
- **Filtros e Ordenações:**
  - Filtrar tarefas por status (concluídas ou pendentes).
  - Ordenar tarefas por data de criação ou prazo.

## Estrutura de Dados

### Usuário (User)
- **id** (UUID) - Identificador único do usuário.
- **name** (string) - Nome do usuário.
- **email** (string) - Email do usuário.
- **password** (string) - Senha do usuário (armazenada de forma segura).
- **created_at** (datetime) - Data de criação do usuário.
- **updated_at** (datetime) - Data de última atualização do usuário.

### Tarefa (Task)
- **id** (UUID) - Identificador único da tarefa.
- **title** (string) - Título da tarefa.
- **description** (string) - Descrição detalhada da tarefa.
- **status** (boolean) - Status da tarefa (concluída: true, pendente: false).
- **due_date** (datetime) - Data limite para conclusão da tarefa.
- **user_id** (UUID) - Identificador do usuário que criou a tarefa.
- **created_at** (datetime) - Data de criação da tarefa.
- **updated_at** (datetime) - Data de última atualização da tarefa.

## Endpoints da API

### 1. Autenticação

#### POST /auth/signup
- **Descrição:** Registra um novo usuário.
- **Corpo da Requisição:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "senhaSegura123"
  }
  ```
- **Resposta:**
  ```json
  {
    "message": "User created successfully!",
    "token": "jwt_token_here"
  }
  ```

#### POST /auth/login
- **Descrição:** Faz login de um usuário existente.
- **Corpo da Requisição:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "senhaSegura123"
  }
  ```
- **Resposta:**
  ```json
  {
    "message": "Login successful!",
    "token": "jwt_token_here"
  }
  ```

### 2. Tarefas

#### POST /tasks
- **Descrição:** Cria uma nova tarefa.
- **Autenticação:** Necessário token JWT.
- **Corpo da Requisição:**
  ```json
  {
    "title": "Estudar Node.js",
    "description": "Estudar Node.js para o projeto backend",
    "due_date": "2024-08-15T23:59:59Z"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "task_id_here",
    "title": "Estudar Node.js",
    "description": "Estudar Node.js para o projeto backend",
    "status": false,
    "due_date": "2024-08-15T23:59:59Z",
    "user_id": "user_id_here",
    "created_at": "2024-08-01T12:00:00Z",
    "updated_at": "2024-08-01T12:00:00Z"
  }
  ```

#### GET /tasks
- **Descrição:** Retorna todas as tarefas do usuário autenticado.
- **Autenticação:** Necessário token JWT.
- **Parâmetros de Consulta (Query Params):**
  - **status:** Filtra tarefas por status (`true` para concluídas, `false` para pendentes).
  - **order_by:** Ordena as tarefas por `created_at` ou `due_date` (padrão: `created_at`).
  - **order_type:** Ordenação ascendente (`asc`) ou descendente (`desc`) (padrão: `asc`).
- **Resposta:**
  ```json
  [
    {
      "id": "task_id_here",
      "title": "Estudar Node.js",
      "description": "Estudar Node.js para o projeto backend",
      "status": false,
      "due_date": "2024-08-15T23:59:59Z",
      "user_id": "user_id_here",
      "created_at": "2024-08-01T12:00:00Z",
      "updated_at": "2024-08-01T12:00:00Z"
    }
  ]
  ```

#### GET /tasks/{id}
- **Descrição:** Retorna uma tarefa específica pelo ID.
- **Autenticação:** Necessário token JWT.
- **Resposta:**
  ```json
  {
    "id": "task_id_here",
    "title": "Estudar Node.js",
    "description": "Estudar Node.js para o projeto backend",
    "status": false,
    "due_date": "2024-08-15T23:59:59Z",
    "user_id": "user_id_here",
    "created_at": "2024-08-01T12:00:00Z",
    "updated_at": "2024-08-01T12:00:00Z"
  }
  ```

#### PUT /tasks/{id}
- **Descrição:** Atualiza os detalhes de uma tarefa específica.
- **Autenticação:** Necessário token JWT.
- **Corpo da Requisição:**
  ```json
  {
    "title": "Estudar Node.js e Express",
    "description": "Estudar Node.js e Express para o projeto backend",
    "status": true,
    "due_date": "2024-08-20T23:59:59Z"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "task_id_here",
    "title": "Estudar Node.js e Express",
    "description": "Estudar Node.js e Express para o projeto backend",
    "status": true,
    "due_date": "2024-08-20T23:59:59Z",
    "user_id": "user_id_here",
    "created_at": "2024-08-01T12:00:00Z",
    "updated_at": "2024-08-10T15:30:00Z"
  }
  ```

#### DELETE /tasks/{id}
- **Descrição:** Exclui uma tarefa específica pelo ID.
- **Autenticação:** Necessário token JWT.
- **Resposta:**
  ```json
  {
    "message": "Task deleted successfully!"
  }
  ```

## Requisitos Técnicos
1. **Autenticação:** Implementar autenticação utilizando JWT. As rotas de tarefas devem ser protegidas por autenticação.
2. **Validação:** As entradas do usuário devem ser validadas corretamente para evitar erros de execução e inconsistências no banco de dados.
3. **Tratamento de Erros:** Implementar um sistema de tratamento de erros consistente, retornando respostas HTTP adequadas.
4. **Persistência:** Utilizar um banco de dados relacional ou NoSQL para armazenar informações de usuários e tarefas.
5. **Boas Práticas:** Seguir boas práticas de codificação, como a separação de responsabilidades, uso de middlewares, e modularização do código.

## Story Points e Tarefas

| Tarefa                                              | Descrição                                                                                                                                   | Story Points |
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| **Configurar Estrutura Básica do Projeto**          | Criar a estrutura inicial do projeto, incluindo configuração de dependências, criação de pastas, e configuração de ambiente.               | 3            |
| **Implementar Autenticação**                        | Implementar as rotas de autenticação e a geração de JWT para proteger as rotas de tarefas.                                                   | 5            |
| **Criar Modelo de Usuário**                         | Desenvolver o modelo de dados para usuários, incluindo migrações e integração com o banco de dados.                                         | 2            |
| **Criar Modelo de Tarefa**                          | Desenvolver o modelo de dados para tarefas, incluindo migrações e integração com o banco de dados.                                          | 2            |
| **Implementar CRUD de Tarefas**                     | Implementar as rotas para criação, leitura, atualização e exclusão de tarefas.                                                              | 8            |
| **Implementar Filtros e Ordenações em Tarefas**     | Adicionar filtros por status e ordenações nas rotas de listagem de tarefas.                                                                 | 3            |
| **Implementar Tratamento de Erros**                 | Implementar um sistema consistente de tratamento de erros com respostas HTTP adequadas.                                                     | 3            |
| **Documentação da API**                             | Escrever a documentação da API detal

hando cada rota, exemplo de requisições e respostas, e o funcionamento geral do sistema.               | 2            |

## Considerações Finais
Este projeto é uma base sólida para quem deseja praticar e aprimorar habilidades em desenvolvimento de APIs. As tecnologias utilizadas podem variar, mas o foco deve ser na criação de uma aplicação robusta e escalável, seguindo boas práticas de design de software e segurança.