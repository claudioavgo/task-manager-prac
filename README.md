# Gerenciador de Tarefas

## Descrição
O **Gerenciador de Tarefas** é uma aplicação backend que oferece operações CRUD para gerenciar tarefas. Ela permite que usuários criem, leiam, atualizem e excluam tarefas, além de marcar tarefas como concluídas ou pendentes. Este projeto é ideal para desenvolver e demonstrar habilidades em backend, como design de APIs RESTful, estruturação de projetos e manipulação de banco de dados.

## Funcionalidades Principais

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

### 2. Tarefas

#### POST /tasks
- **Descrição:** Cria uma nova tarefa.
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
- **Resposta:**
  ```json
  {
    "message": "Task deleted successfully!"
  }
  ```

## Requisitos Técnicos
2. **Validação:** As entradas do usuário devem ser validadas corretamente para evitar erros de execução e inconsistências no banco de dados.
3. **Tratamento de Erros:** Implementar um sistema de tratamento de erros consistente, retornando respostas HTTP adequadas.
4. **Persistência:** Utilizar um banco de dados relacional ou NoSQL para armazenar informações de usuários e tarefas.
5. **Boas Práticas:** Seguir boas práticas de codificação, como a separação de responsabilidades, uso de middlewares, e modularização do código.