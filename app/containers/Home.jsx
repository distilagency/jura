import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Head } from '../components/Common/Head';
import { Loading } from '../components/Content/Loading';
import { FourOhFour } from '../components/Content/FourOhFour';


const sortFilms = (filmArr) => {
  return filmArr.sort((a, b) => parseInt(a.release_date) - parseInt(b.release_date));
};

// eslint-disable-next-line
class Home extends Component {
  render() {
    const { films, loading } = this.props;
    if (loading) return <Loading />;
    if (!films) return <FourOhFour />;
    return (
      <main>
        <Head title="Welcome" />
        {sortFilms(films).map((film, index) => {
          return (
            <div key={film.title}>
              <Link to={`/film/${index + 1}`}>{film.title}</Link>
            </div>
          );
        })}
      </main>
    );
  }
}

function mapStateToProps({ jura, loading }) {
  const { films } = jura;
  return {
    loading,
    films
  };
}

export default connect(mapStateToProps, { })(Home);
