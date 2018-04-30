import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import CheckboxInput from '../common/CheckboxInput';

const GenericForm = ({generic, onSave, onChanges, errors, saving}) => {

  return (
    <form>
      <h1>Manage Generic</h1>
      <TextInput
        name="name"
        label="Name"
        value={generic.name}
        onChange={onChanges}
        error={errors.name}
      />
      <TextInput
        name="type"
        label="Type"
        value={generic.type}
        onChange={onChanges}
        error={errors.type}
      />
      <CheckboxInput
        name="peelable"
        label="Peelable"
        checked={generic.peelable}
        onChange={onChanges}
        error={errors.peelable}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

GenericForm.propTypes = {
  generic: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChanges: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default GenericForm;
