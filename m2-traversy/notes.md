```graphql title="add a client via playground"
mutation {
  addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
    id
    name
    email
    phone
  }
}
```

```graphql title="result of adding a client"
{
  "data": {
    "addClient": {
      "id": "63b185f09c63df26be024568",
      "name": "Tony Stark",
      "email": "ironman@gmail.com",
      "phone": "955-365-3376"
    }
  }
}
```

```graphql title=""
mutation {
  addProject(name: "Mobile App", description: "This is the project description", status: new, clientId: "63b185f09c63df26be024568") {
    name
    status
    client {
      id
      name
    }
  }
}
```

```graphql title="result of creating a project"
{
  "data": {
    "addProject": {
      "name": "Mobile App",
      "status": "Not started",
      "client": {
        "id": "63b185f09c63df26be024568",
        "name": "Tony Stark"
      }
    }
  }
}
```

```graphql title="delete a client"
mutation {
  deleteClient(id: "63b183c669398c954ddcc4f8") {
    id
    name
  }
}
```

```graphql title="result of deleting a client"
{
  "data": {
    "deleteClient": {
      "id": "63b183c669398c954ddcc4f8",
      "name": "Isaac Li"
    }
  }
}
```
