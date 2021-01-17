# graphql-request-helper

Helper Class of Graphql Client

## Getting Started

Installing

```bash
$ npm install graphql-request-helper
```

## Example

```js
import { GraphQLClient } from "graphql-request-helper";
```

Create Graphql Client

```js
const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
```

Performing a `Query` request

```js
const data = await graphQLClient.query({
  name: "getAnimals",
  fields: [
    "id",
    "name",
    "age",
    {
      name: "family",
      fields: ["id", "name"],
    },
  ],
  params: {
    age: 3,
  },
});
```

GraphQLClient receives the above fields and params and sends the following request

```js
query{
    getAnimals(age: 3){
        id
        name
        age
        family{
            id
            name
        }
    }
}
```

Performing a `Mutation` request

```js
const data = await graphQLClient.mutation({
  name: "addAnimal",
  fields: [
    "id",
    "name",
    "age",
    {
      name: "family",
      fields: ["id", "name"],
    },
  ],
  params: {
    name: "puppy",
    age: 1,
    isCute: true,
  },
});
```

GraphQLClient receives the above fields and params and sends the following request

```js
mutation{
    addAnimal(name: "puppy", age: 1, isCute: true){
        id
        name
        age
        family{
            id
            name
        }
    }
}
```

Catch an Error

```js
// In ready.
```
