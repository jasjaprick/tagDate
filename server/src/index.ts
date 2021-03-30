import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { UserResolver } from './User/UserResolvers';
import { context } from './context';
import { AddPictureResolver } from './Profile/ProfileResolvers';
import { ActivityResolvers } from './Activity/ActivityResolvers';
import { AuthResolver } from './Auth/AuthResolver';
import { PossibleMatchResolvers } from './PossibleMatch/PossibleMatchResolvers';
import { ChatResolvers, messageResolver } from './Chat/ChatAndMessageResolvers';
const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [
      UserResolver,
      ActivityResolvers,
      PossibleMatchResolvers,
      ChatResolvers,
      messageResolver,
      AuthResolver,
      AddPictureResolver,
    ],
  });

  new ApolloServer({ schema, context: context }).listen({ port: 4000 }, () =>
    console.log(`
  🚀 Server is running!
  🔊 Listening on port 4000
  📭 Query at https://studio.apollographql.com/dev`)
  );
};

app();
