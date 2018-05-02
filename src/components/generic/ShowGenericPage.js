import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as genericActions from '../../actions/genericActions';
import GenericForm from './GenericForm';
import {tastesFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ShowGenericPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      generic: Object.assign({}, this.props.generic),
      tastes: this.props.tastes,
      errors: {},
      saving: false
    };

    this.updateGenericState = this.updateGenericState.bind(this);
    this.saveGeneric = this.saveGeneric.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.generic.id != nextProps.generic.id) {
      this.setState({generic: Object.assign({}, nextProps.generic)});
    }
  }

  updateGenericState(event) {
    const field = event.target.name;
    let generic = this.state.generic;
    if (field === 'peelable') {
      generic[field] = !generic[field];
    } else {
      generic[field] = event.target.value;
    }
    return this.setState({generic: generic});
  }

  genericFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.generic.name.length < 3) {
      errors.title = 'Title must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveGeneric(event) {
    event.preventDefault();

    if (!this.genericFormIsValid()){
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveGeneric(this.state.generic)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Generic saved');
    this.context.router.push('/generics');
  }

  render() {
    const peelable = this.props.generic.peelable ? 'Yes' : 'No';
    const generic = this.props.generic;

    return (
      <div>
        <h1>{generic.name}</h1>
        <img src={generic.image} />
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Type: </td>
              <td>{generic.type}</td>
            </tr>
            <tr>
              <td>Peelable: </td>
              <td>{peelable}</td>
            </tr>
            <tr>
              <td>Taste: </td>
              <td>{generic.taste}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

ShowGenericPage.propTypes = {
  generic: PropTypes.object.isRequired,
  tastes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ShowGenericPage.contextTypes = {
  router: PropTypes.object
};

function getGenericById(generics, id) {
  const generic = generics.filter(generic => generic.id == id);
  if (generic) return generic[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const genericId = ownProps.params.id; // from path '/generic/:id'

  let generic = {id: '', name: '', type: '', peelable: false};
  let allTasteCategories = tastesFormattedForDropdown(state.tastes);

  if (genericId && state.generics.length > 0) {
    generic = getGenericById(state.generics, genericId);
  }

  return {
    state: state,
    generic: generic,
    tastes: allTasteCategories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(genericActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGenericPage);
