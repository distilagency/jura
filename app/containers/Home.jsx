import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Head } from '../components/Common/Head';
import { Loading } from '../components/Content/Loading';
import { FourOhFour } from '../components/Content/FourOhFour';


class Home extends Component {
  render() {
    const { films, loading } = this.props;
    if (loading) return <Loading />;
    if (!films) return <FourOhFour />;
    const sortFilms = (filmArr) => {
      return filmArr.sort((a, b) => parseInt(a.release_date) - parseInt(b.release_date));
    };
    return (
      <main>
        <Head title="Welcome" />
        {sortFilms(films).map((film, index) => {
          return (
            <div>
              <Link to={`/film/${index + 1}`}>{film.title}</Link>
            </div>
          );
        })}
      </main>
    );
  }
}

function mapStateToProps({jura, loading}) {
  const { films } = jura;
  return {
    loading,
    films
  };
}

export default connect(mapStateToProps, { })(Home);
