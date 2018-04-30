import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>@mbtestfeed's basic React-Redux template</h1>
        <p>A simple Redux app based off of <a href="https://twitter.com/housecor">Cory House</a>'s <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6">PluralSight course</a>.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
