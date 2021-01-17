# graphql-request-helper

Helper Class of Graphql Client

## Getting Started

Installing

```bash
$ npm install graphql-request-helper
```

## Usage

```js
import { GraphQLClient } from "graphql-request-helper";
```

Create Graphql Client

```js
const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
```

<br>

### Performing a `Query` request

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

<br>

### Performing a `Mutation` request

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

<br>

### Catch an Error

```js
import { GraphQLError } from "graphql-request-helper";
```

```js
try {
  const data = await graphQLClient.query({
    // ...
  });
} catch (e) {
  if (e instanceof GraphQLError) {
    console.log(e.errors);
  }
}
```

then e.errors will be like this

```json
[
  {
    "message": "Schema is not configured for mutations.",
    "locations": [
      {
        "line": 1,
        "column": 1
      }
    ]
  }
]
```

### use axios options

```js
const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql", {
  axios: {
    headers: {
      Authorization: "Bearer ...",
    },
  },
});
```

The axios option is used as the third parameter in the axios request

```js
constructor(url, options) {
  this.axiosOptions = options?.axios
}
// ...
const response = await axios.post(
  this.graphQLUrl,
  {
    query,
  },
  this.axiosOptions
);
```

You can also modify it as a setAxiosOptions function.

```js
const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql", {
  axios: {
    headers: {
      Authorization: "Bearer A",
    },
  },
});

graphQLClient.setAxiosOptions({
  headers: {
    Authorization: "Bearer B",
  },
});
```
