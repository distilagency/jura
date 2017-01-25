import swapiSchema from '../../data/schemas/swapiSchema';

export default(app) => {
  /* ----------- Graphql API Routes ----------- */
  /* Get Collection of Films */
  /* Does not require a query param */
  app.get('/api/films', (req, res) => {
    swapiSchema(`
      query{
        swapi{
          films{
            title,
            release_date
          }
        }
      }
    `)
    .then(data => res.json(data))
    .catch(err => res.json(err));
  });
  /* Get Film */
  /* Expects query param ?id= (?id=1) */
  app.get('/api/film', (req, res) => {
    swapiSchema(`
      query get_film($id: Int) {
        film(id: $id) {
          title,
          opening_crawl
        }
      }`, {id: req.query.id})
    .then(data => res.json(data))
    .catch(err => res.json(err));
  });
};
