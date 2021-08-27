//|EXPRESS|
const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');
//| APOLLO |
const { typeDefs, resolvers } = require('./schemas');
const { ApolloServer } = require('apollo-server-express');

const app = express();
const PORT = process.env.PORT || 3001;
//|NEW INSTANCE OF APOLLO SERVER|
async function startServer () {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  //| APPLY APP MIDDLEWARE |
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
  });
}

startServer()

// server.applyMiddleware({ app });

//| MIDDLEWARE |
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//| WILDCARE ROUTE FOR SERVING FRONT END |
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

//| NO ROUTES NEEDED FOR MERN |
// app.use(routes);

