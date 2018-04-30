import React from 'react';
import PropTypes from 'prop-types';
import GenericListRow from './GenericListRow';

const GenericList = ({generics}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Peelable</th>
        </tr>
      </thead>
      <tbody>
        {generics.map(generic =>
          <GenericListRow key={generic.id} generic={generic}/>
          )}
      </tbody>
    </table>
  );
};

GenericList.propTypes = {
  generics: PropTypes.array.isRequired
};

export default GenericList;
