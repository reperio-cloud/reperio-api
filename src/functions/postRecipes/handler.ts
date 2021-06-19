import 'source-map-support/register';

import { knex } from '@database/database-ops';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const postRecipes: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  let body: unknown | {[key: string]: string | number} = {};

  body = await knex('user_recipes').insert({
    id: event.body.id,
    author: event.body.author,
    name: event.body.name,
    ingredients: event.body.ingredients.join(','),
    media: event.body.media || null,
    instructions: event.body.instructions,
    cost: event.body.cost,
    time: event.body.time,
    difficulty: event.body.difficulty
  });

  return formatJSONResponse({
    body
  })
};

export const main = middyfy(postRecipes);
