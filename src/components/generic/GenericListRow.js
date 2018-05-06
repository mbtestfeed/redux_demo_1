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
      <td><Link to={'/generic/show/' + generic.id}>{generic.name}</Link></td>
      <td>{generic.type}</td>
      <td><Link to={'/generics/peelable/' + generic.peelable}>{peelable}</Link></td>
      <td><Link to={'/generics/taste/' + generic.taste}>{generic.taste}</Link></td>
      <td><Link to={'/generic/' + generic.id}>edit</Link></td>
    </tr>
  );
};

GenericListRow.propTypes = {
  generic: PropTypes.object.isRequired
};

export default GenericListRow;
