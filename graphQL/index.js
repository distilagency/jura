import graphqlSchema from 'graphql_json';
import { swapiSchema } from './schemas';
import { swapiQueries } from './queries';

export const swapi = graphqlSchema(swapiSchema, swapiQueries);
