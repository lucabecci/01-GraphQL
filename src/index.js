const { ApolloServer, gql } = require("apollo-server");

//Definimos los tipos de el schema
const typeDefs = gql`
    type Query {
        hello: String!
        goodbye: String!
        age: Int!
        friends: [String]
    }
`    
//Definimos los resolvers para mostrar la informacion del dato especificado
const resolvers = {
    Query: {
        hello: () => 'Hello Word!',
        goodbye: () => 'Goodbye Friend!!',
        age: () => 2020,
        friends: () => ['Gero', 'Lucas', 'Mateo'],
    }
}

//Pasamos los typos y los resolvers al server 
const server = new ApolloServer({typeDefs, resolvers});

//Iniciamos el servidor
server.listen().then(({url}) => console.log(`server started in ${url}`)); 