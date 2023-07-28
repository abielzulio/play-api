# Play API

Tokopedia Play API Clone for Gigih 3.0 Midterm using express.js

## Installation

```
git clone https://github.com/abielzulio/play-api
cd play-api
npm install
```

## Development

1. Rename `.env.example` to `.env` and change the `.env` value for `MONGODB_URL` and `PORT`

```
MONGODB_URL=""
PORT=""
```

2. Run local

```
npm run dev
```

## API Documentation

### User

```json
{
  id: String,
  fullName: String,
  userName: String,
  email: String,
  password: String,
  createdAt: Date
}
```

#### POST /v1/users

Create new user

**Request**

- **URL Params**: None
- **Headers**: Content-Type: application/json
- **Body**

```json
{
  "fullName": "abiel zulio m",
  "userName": "lio",
  "email": "abielzm@gmail.com",
  "password": "Alex"
}
```

**Response**:

- **201** (Succesfully created)

```json
{
  "meta": {
    "status": 201
  },
  "data": {
    "id": "th2QFTdUq_FVjEItmt7OA",
    "fullName": "abiel zulio m",
    "email": "abielzm@gmail.com",
    "password": "Alex",
    "createdAt": "2023-07-28T14:32:53.130Z",
    "_id": "64c3cb1409fb43131ed13b1c",
    "__v": 0
  }
}
```

- **400** (Missing payload)

```json
{
  "meta": {
    "status": 400,
    "message": "Missing required body"
  }
}
```

### Video

```json
{
  id: String,
  title: String,
  thumbnail: String,
  url: String,
  createdAt: Date,
}
```

#### POST /v1/videos

Create new video

**Request**

- **URL Params**: None
- **Headers**: Content-Type: application/json
- **Body**

```json
{
  "thumbnail": "lio.com",
  "title": "Lio",
  "url": "google.com"
}
```

**Response**:

- **201** (Succesfully created)

```json
{
  "meta": {
    "status": 201
  },
  "data": {
    "id": "eYPIA6Dt76TKB-rvrxmbk",
    "title": "Lio",
    "thumbnail": "lio.com",
    "url": "google.com",
    "createdAt": "2023-07-28T14:32:53.130Z",
    "_id": "64c3ce24c2d5c92723782816",
    "__v": 0
  }
}
```

- **400** (Missing payload)

```json
{
  "meta": {
    "status": 400,
    "message": "Missing required body"
  }
}
```

#### GET /v1/videos

Get all videos

**Request**

- **URL Params**: None
- **Headers**: Content-Type: application/json
- **Body**: None

**Response**:

- **200** (Succesfully retrieved)

```json
{
  "meta": {
    "status": 200
  },
  "data": [
    {
      "_id": "64c3be7a690528873f5ec360",
      "id": "JLWnuNBDW8IWxg3-ahpn6",
      "title": "haha",
      "thumbnail": "google.com",
      "createdAt": "2023-07-28T14:32:53.130Z"
    },
    {
      "_id": "64c3becac8bdd439d1b9dcba",
      "id": "WthlxAhHuILYzhkveTcEE",
      "title": "alex ganteng",
      "thumbnail": "youtube.com",
      "createdAt": "2023-07-28T14:32:53.130Z"
    },
    {
      "_id": "64c3ce24c2d5c92723782816",
      "id": "eYPIA6Dt76TKB-rvrxmbk",
      "title": "Lio",
      "thumbnail": "lio.com",
      "url": "google.com",
      "createdAt": "2023-07-28T14:32:53.130Z"
    }
  ]
}
```

### Product

```json
{
  id: String,
  title: String,
  price: Number,
  videoId: String,
  link: String,
  createdAt: Date,
}
```

#### POST /v1/products/:videoId

Create new product

- **URL Params**: videoId (string)
- **Headers**: Content-Type: application/json
- **Body**

```json
{
  "link": "tkpd.io",
  "title": "sikat gigi",
  "price": 500000
}
```

- **Response**: 201 (Succesfully created)

```json
{
  "meta": {
    "status": 201
  },
  "data": {
    "id": "o52raoj_u6h_z9RxvLbRF",
    "title": "sikat gigi",
    "price": 500000,
    "videoId": "WthlxAhHuILYzhkveTcEE",
    "link": "tkpd.io",
    "createdAt": "2023-07-28T14:32:53.130Z",
    "_id": "64c3cf6d7188670a939f59de",
    "__v": 0
  }
}
```

- **Response**: 400 (Missing payload)

```json
{
  "meta": {
    "status": 400,
    "message": "Missing required body"
  }
}
```

#### GET /v1/products/:videoId

Get all products

- **URL Params**: videoId (string)
- **Headers**: Content-Type: application/json
- **Body**: None

- **Response**: 201 (Succesfully created)

```json
{
  "meta": {
    "status": 200
  },
  "data": [
    {
      "_id": "64c3cf6d7188670a939f59de",
      "id": "o52raoj_u6h_z9RxvLbRF",
      "title": "sikat gigi",
      "price": 500000,
      "link": "tkpd.io",
      "createdAt": "2023-07-28T14:32:53.130Z"
    }
  ]
}
```

### Comment

```json
{
  videoId: String,
  userName: String,
  comment: String,
  createdAt: Date,
}
```

#### POST /v1/comments/:videoId

Create new comment

**Request**

- **URL Params**: videoId (string)
- **Headers**: Content-Type: application/json
- **Body**

```json
{
  "userName": "lio",
  "comment": "asek"
}
```

**Response**:

- **201** (Succesfully created)

```json
{
  "meta": {
    "status": 201
  },
  "data": {
    "videoId": "WthlxAhHuILYzhkveTcEE",
    "userName": "lio",
    "comment": "asek",
    "createdAt": "2023-07-28T14:32:53.130Z",
    "_id": "64c3d19581fc034f255693cd",
    "__v": 0
  }
}
```

- **400** (Missing payload)

```json
{
  "meta": {
    "status": 400,
    "message": "Missing required body"
  }
}
```

#### GET /v1/comments/:videoId

Get all comments

**Request**

- **URL Params**: videoId (string)
- **Headers**: Content-Type: application/json
- **Body**: None

**Response**:

- **201** (Succesfully created)

```json
{
  "meta": {
    "status": 200
  },
  "data": [
    {
      "_id": "64c3d19581fc034f255693cd",
      "comment": "asek",
      "createdAt": "2023-07-28T14:32:53.130Z"
    }
  ]
}
```
