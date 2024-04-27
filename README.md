
# TODOLIST API

Project task for me as a member of UKM SOFTDEV in EEPIS


## Installation

Open terminal and copy this command

```bash
  $ git clone https://github.com/ImNizamudin/todolist-api.git
```
Go to folder have downloaded
```bash
  $ cd todolist-api
```
Copy the .env.example
```bash
  $ cp .env.example .env
```
Create new database in phpmyadmin with name todolist_app

Migrate the database
```bash
  $ knex migrate:latest
```
Run the project
```bash
  $ npm start
```
## API Reference
#### users

- `GET /shoes`: Get all users
- `GET /shoes/:id`: Get a specific user by ID
- `POST /shoes`: Create a new user
- `PUT /shoes/:id`: Update a user by ID
- `DELETE /shoes/:id`: Delete a user by ID

#### todolist

- `GET /todolist`: Get all todolist
- `GET /todolist/:id`: Get a specific user by ID
- `GET /todolist/user/:user_id`: Get a specific todolist by USER_ID
- `POST /todolist`: Create a new todolist
- `PUT /todolist/:id`: Update a todolist by ID
- `DELETE /todolist/:id`: Delete a todolist by ID


## Documentation

[Documentation](https://linktodocumentation)

