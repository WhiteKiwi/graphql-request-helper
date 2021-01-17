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
  queryName: "getAnimals",
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
        family{
            id
            name
        }
    }
}
```

Performing a `Mutation` request

```js
// In ready.
```

Catch an Error

```js
// In ready.
```
