# graphql-request-helper
Helper Class of Graphql Client

## Getting Started
Installing
```bash
$ npm install graphql-request-helper
```

## Example
```js
import { GraphQLClient } from 'graphql-request-helper'
```

Create Graphql Client
```js
const graphQLClient = new GraphQLClient('http://localhost:3000/api/graphql')
```

Performing a `Query` request
```js
const data = await graphQLClient.query({
    queryName: 'getItems',
    fields: [
        'id',
        {
            name: 'shop',
            fields: ['name']
        }
    ],
    params: {
        page: 1
    }
})
```
GraphQLClient receives the above fields and params and sends the following request
```js
query{
    getItems(page: 1){
        id
        shop {
            id
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
