import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/generics" activeClassName="active">generics</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
      <Link to="/generics/umami" activeClassName="active">REMOVE ME</Link>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
