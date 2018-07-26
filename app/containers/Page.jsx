import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Head } from '../components/Common/Head';
import { Loading } from '../components/Content/Loading';
import { FourOhFour } from '../components/Content/FourOhFour';

// eslint-disable-next-line
class Page extends Component {
  render() {
    const { film, loading } = this.props;
    if (loading) return <Loading />;
    if (!film) return <FourOhFour />;
    return (
      <main>
        <Head title={`${film.title}`} />
        <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
      </main>
    );
  }
}

function mapStateToProps({ jura, loading }) {
  const { film } = jura;
  return {
    loading,
    film
  };
}

export default connect(mapStateToProps, { })(Page);
