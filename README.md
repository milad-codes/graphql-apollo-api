# GraphQL post API

A small GraphQL CRUD API using Apollo Server, Express and MongoDB. Built in 2022.

## Implementation

- `Post` defines an ID, title and description.
- `getAllPosts` and `getPost` retrieve posts.
- `createPost`, `updatePost` and `deletePost` implement mutations.
- Resolvers use Mongoose models for MongoDB persistence.
- Apollo Server is mounted on an Express application.

## Run locally

The current source connects to a local MongoDB instance at `mongodb://127.0.0.1:27017/post` and listens on port 4000.

```sh
npm ci
npm start
```

The start script runs the server with nodemon. No automated test suite is defined.

## Source map

- [Server setup](server.js)
- [GraphQL schema](typeDefs.js)
- [Resolvers](resolvers.js)
- [Post model](models/Post.model.js)

This is an earlier CRUD example with the original dependencies, not evidence of a production deployment.

[Portfolio](https://miladcodes.com) · [LinkedIn](https://www.linkedin.com/in/miladcodes)
