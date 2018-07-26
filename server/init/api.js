import moment from 'moment';
import { REDIS_PREFIX } from '../../config/app';
import { swapi } from '../../graphQL';
import { createRedisClient } from '../redis';

/* ----------- App API Helpers ----------- */
const client = createRedisClient(REDIS_PREFIX);

export default(app) => {
  /* ----------- Graphql API Routes ----------- */
  /* Get Collection of Films */
  /* Does not require a query param */
  app.get('/api/films', (req, res) => {
    swapi(`
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
    swapi(`
      query get_film($id: Int) {
        film(id: $id) {
          title,
          opening_crawl
        }
      }`, {id: req.query.id})
    .then(data => res.json(data))
    .catch(err => res.json(err));
  });
  /* ----------- Redis Endpoints ----------- */
  /* Flush Redis */
  app.get('/api/flushredis', (req, res) => {
    console.log(`${moment().format()} flushing Redis cache`);
    client.flushdb((err) => {
      if (err) return res.json({error: err});
      return res.json({success: true});
    });
  });
};
