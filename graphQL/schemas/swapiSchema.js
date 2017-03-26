/* ----------- GraphQL Schema using graph.ql ----------- */

const swapiSchema = `
  type Films {
    # Schema for films array returned from swapi
    films: [Film],
    count: Int
  }

  type Film {
    # Schema for individual film returned from swapi
    title: String,
    opening_crawl: String,
    episode_id: Int,
    release_date: String
  }

  type Query {
    swapi: Films
    film (id: Int): Film
  }
`;

export default swapiSchema;
