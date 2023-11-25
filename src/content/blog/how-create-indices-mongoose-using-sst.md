---
author: Camilo Hernández
pubDatetime: 2023-10-04T17:56:26.171Z
title: "Resolving MongoDB Index Issues when Deploying with Cloud and Mongoose in Serverless Stack (SST)"
postSlug: how-create-indices-mongoose-using-sst
featured: false
draft: false
tags:
  - mongoose
  - mongodb
description:
  Resolve MongoDB index glitches in your Serverless Stack with AWS App Runner using Mongoose's "autoindex" for flawless deployments!
---

If you're encountering MongoDB index problems while deploying your Serverless Stack using AWS App Runner and find that indexes aren't being created, the solution may lie in the "autoindex" global variable. Learn how to adjust it for a seamless deployment.

## **Identified Challenge:**

When deploying, if you notice that indexes in your MongoDB database aren't being generated, check the "autoindex" configuration in Mongoose, which may be set to false by default.

## **Direct Solution:**

Ensure you set the Mongoose "autoindex" global variable to true before deploying to AWS App Runner. Additionally, consider adding indexes directly in the schema and at the schema level to ensure correct creation.

```jsx
const animalSchema = new Schema({
  name: String,
  type: String,
  tags: { type: [String], index: true } // path level
});

animalSchema.index({ name: 1, type: -1 }); // schema level

mongoose.connect('mongodb://user:pass@127.0.0.1:port/database', { autoIndex: false });
// or
mongoose.createConnection('mongodb://user:pass@127.0.0.1:port/database', { autoIndex: false });
// or
mongoose.set('autoIndex', true);
// or
animalSchema.set('autoIndex', true);
// or
new Schema({ /* ... */ }, { autoIndex: true });
```

## **Important Note:**

While you can use **`autoIndex`** during development to generate indexes, disable this option in production to avoid performance impacts. Optimize your deployment and ensure index creation in your Serverless Stack efficiently! 🚀