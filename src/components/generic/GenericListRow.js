import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const GenericListRow = ({generic}) => {

  let peelable;
  if (generic.peelable){
    peelable = "Yes";
  } else {
    peelable = "No";
  }

  return (
    <tr>
      <td><Link to={'/generic/' + generic.id}>{generic.name}</Link></td>
      <td>{generic.type}</td>
      <td>{peelable}</td>
      <td>{generic.taste}</td>
    </tr>
  );
};

GenericListRow.propTypes = {
  generic: PropTypes.object.isRequired
};

export default GenericListRow;
