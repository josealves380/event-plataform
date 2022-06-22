import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({

  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozz9ru1ptc01w73istcjm0/master',
  cache: new InMemoryCache()
})