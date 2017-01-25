import { starwarsService } from './services';

// Queries GraphQL API Services using axios.get() https://github.com/mzabriskie/axios#example
const {
  getFilms,
  getFilm
} = starwarsService;

const fetchData = (params, routeName) => {
  // Switch statement on routeName from routes.jsx
  switch (routeName) {
    // Fetch global data for App component for things like the header and footer
    case 'App': {
      return null;
    }
    // Home container data
    case 'Home': {
      return getFilms()
      .then(({data}) => ({ films: data.data.swapi.films }))
      .catch(error => console.log('error', error));
    }
    // Page container data
    case 'Page': {
      return getFilm(params.id)
      .then(({data}) => ({ film: data.data.film }))
      .catch(error => console.log('error', error));
    }
    default:
      return null;
  }
};

export default fetchData;
