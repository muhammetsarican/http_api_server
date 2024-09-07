
# Http API Server

I created server app without using any framework. I specialized it similar with express js, you can use same methods with it.
## 💻 Tech Stack

- Node Js
- Mongo Db with it's native driver
- Docker


## 🚀 Run Locally

Clone the project

```bash
  git clone https://github.com/muhammetsarican/http_api_server.git
```

Go to the project directory

```bash
  cd http_api_server
```

Install dependencies

```bash
  npm install
```

Run the database with docker

```bash
  docker-compose up
```

Run the app

```bash
  npm run dev
```

#### At last go the port that shown at console, Congratulations 🎉
## API Reference

### User

#### Login user

```http
  POST /users/login
```
| Body Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `mail`      | `string` | **Required**. Mail of user to fetch |
| `password`      | `string` | **Required**. Password of user to fetch |


#### Register user

```http
  POST /users/register
```
| Body Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fname`      | `string` | First name of user to fetch |
| `lname`      | `string` | Last name of user to fetch |
| `mail`      | `string` | **Required**. Mail of user to fetch |
| `password`      | `string` | **Required**. Password of user to fetch |

#### Get all users

```http
  GET /users/read
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |

#### Get user

```http
  GET /users/readOne/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Create user

```http
  POST /users/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |

|  Body Params |Type    |Description                        |
| :-------- | :------- | :-------------------------------- |
| `fname`      | `string` | First name of user to fetch |
| `lname`      | `string` | Last name of user to fetch |
| `mail`      | `string` | **Required**. Mail of user to fetch |
| `password`      | `string` | **Required**. Password of user to fetch |


#### Update user

```http
  PATCH /users/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |
| `id`      | `string` | **Required**. Id of user to fetch |

|  Body Params |Type    |Description                        |
| :-------- | :------- | :-------------------------------- |
| `fname`      | `string` | First name of user to fetch |
| `lname`      | `string` | Last name of user to fetch |
| `mail`      | `string` | Mail of user to fetch |
| `password`      | `string` | Password of user to fetch |

#### Delete user

```http
  DELETE /users/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |
| `id`      | `string` | **Required**. Id of product to fetch |

### Product

#### Get all products

```http
  GET /products/read
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |

#### Get product

```http
  GET /products/readOne/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |
| `id`      | `string` | **Required**. Id of product to fetch |


#### Create product

```http
  POST /products/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |
| `id`      | `string` | **Required**. Id of product to fetch |

|  Body Params |Type    |Description                        |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of product to fetch |
| `keyword`      | `string` | Keyword of product to fetch |
| `description`      | `string` | Description of product to fetch |


#### Update product

```http
  PATCH /products/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |
| `id`      | `string` | **Required**. Id of product to fetch |

|  Body Params |Type    |Description                        |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | Title of product to fetch |
| `keyword`      | `string` | Keyword of product to fetch |
| `description`      | `string` | Description of product to fetch |

#### Delete product

```http
  DELETE /products/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt_token` | `string` | **Required**. Your access token |
| `id`      | `string` | **Required**. Id of product to fetch |


## 🖋️ Authors

- [@muhammetsarican](https://www.github.com/muhammetsarican)


## 📨 Feedback

If you have any feedback, please reach out to us from [email](mailto:muhammetsarican@gmail.com).

