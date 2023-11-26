# Task Management System API

Welcome to the Task Management System API documentation. This API allows users to manage tasks, including creating, updating, and retrieving tasks. It also provides user authentication and basic analytics on task completion.

## Base URL

All API requests should be made to the following base URL:

```
http://localhost:3000
```

## Authentication

Authentication is required for certain operations. Users must obtain an authentication token by logging in before accessing restricted endpoints.

### Register a new user

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body:**
  - `username` (string, required): The username of the new user.
  - `password` (string, required): The password of the new user.

**Example:**

```json
{
  "username": "new_user",
  "password": "password123"
}
```

### Login

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body:**
  - `username` (string, required): The username of the existing user.
  - `password` (string, required): The password of the existing user.

**Example:**

```json
{
  "username": "existing_user",
  "password": "password456"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Include the obtained token in the `Authorization` header for authenticated requests:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Tasks

### Create a new task

- **Endpoint:** `/tasks/create`
- **Method:** `POST`
- **Authentication:** Required
- **Request Body:**
  - `title` (string, required): The title of the task.
  - `description` (string): The description of the task.
  - `assignedUser` (string): The username of the user to whom the task is assigned.
  - `dueDate` (string): The due date of the task (format: YYYY-MM-DD).

**Example:**

```json
{
  "title": "Complete API Documentation",
  "description": "Write comprehensive documentation for the API.",
  "assignedUser": "john_doe",
  "dueDate": "2023-12-31"
}
```

### Retrieve all tasks

- **Endpoint:** `/tasks`
- **Method:** `GET`
- **Authentication:** Required

### Retrieve a single task by ID

- **Endpoint:** `/tasks/:taskId`
- **Method:** `GET`
- **Authentication:** Required

### Update an existing task

- **Endpoint:** `/tasks/update/:taskId`
- **Method:** `PUT`
- **Authentication:** Required
- **Request Body:**
  - Same as the request body for creating a task.

### Delete a task by ID

- **Endpoint:** `/tasks/delete/:taskId`
- **Method:** `DELETE`
- **Authentication:** Required

## Analytics

### Task Completion Statistics

Retrieve statistics on task completion within a specified timeframe.

- **Endpoint:** `/analytics/task-completion-stats`
- **Method:** `GET`
- **Authentication:** Required
- **Query Parameters:**
  - `days` (number, optional): Number of days for which to retrieve statistics. Default is 7 days.

**Example:**

```
/analytics/task-completion-stats?days=14
```

**Response:**

```json
{
  "totalTasks": 50,
  "completedTasks": 35,
  "incompleteTasks": 15
}
```

## Running the Application Locally

To run the Task Management System API locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root of the project and add the following variables:

   ```dotenv
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/task_management
   JWT_SECRET=your_secret_key
   ```

   Adjust the values accordingly.

4. **Run the Application:**

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## API Endpoints

### User Authentication

#### Register a new user

- **Endpoint:** `POST /auth/register`
- **Request:**
  ```json
  {
    "username": "new_user",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### Login

- **Endpoint:** `POST /auth/login`
- **Request:**
  ```json
  {
    "username": "existing_user",
    "password": "password456"
  }
  ```
- **Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### Task Management

#### Create a new task

- **Endpoint:** `POST /tasks/create`
- **Authentication:** Required
- **Request:**
  ```json
  {
    "title": "Complete API Documentation",
    "description": "Write comprehensive documentation for the API.",
    "assignedUser": "john_doe",
    "dueDate": "2023-12-31"
  }
  ```

#### Retrieve all tasks

- **Endpoint:** `GET /tasks`
- **Authentication:** Required

#### Retrieve a single task by ID

- **Endpoint:** `GET /tasks/:taskId`
- **Authentication:** Required

#### Update an existing task

- **Endpoint:** `PUT /tasks/update/:taskId`
- **Authentication:** Required
- **Request:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated description",
    "assignedUser": "jane_doe",
    "dueDate": "2023-12-15"
  }
  ```

#### Delete a task by ID

- **Endpoint:** `DELETE /tasks/delete/:taskId`
- **Authentication:** Required

### Analytics

#### Task Completion Statistics

- **Endpoint:** `GET /analytics/task-completion-stats`
- **Authentication:** Required
- **Query Parameters:**
  - `days` (number, optional): Number of days for which to retrieve statistics. Default is 7 days.

**Example:**

```
/analytics/task-completion-stats?days=14
```

**Response:**

```json
{
  "totalTasks": 50,
  "completedTasks": 35,
  "incompleteTasks": 15
}
```
