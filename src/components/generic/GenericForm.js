import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import CheckboxInput from '../common/CheckboxInput';
import SelectInput from '../common/SelectInput';


const GenericForm = ({generic, tastes, onSave, onChanges, errors, saving}) => {

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
      <SelectInput
        name="taste"
        label="Taste Category"
        value={generic.taste}
        onChange={onChanges}
        options={tastes}
        error={errors.tasteCategory}
      />
      <TextInput
        name="image"
        label="Image Link"
        value={generic.image}
        onChange={onChanges}
        error={errors.image}
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
  tastes: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChanges: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default GenericForm;
