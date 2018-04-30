import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as genericActions from '../../actions/genericActions';
import GenericList from './GenericList';
import { browserHistory } from 'react-router';

class GenericsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddGenericPage = this.redirectToAddGenericPage.bind(this);
  }

  genericRow(generic, index) {
     return <div key={index}>{generic.title}</div>;
  }

  redirectToAddGenericPage() {
    browserHistory.push('/generic');
  }

  render() {
    return (
      <div>
        <h1>Generics</h1>
        <input
          type="submit"
          value="Add Generic"
          className="btn btn-primary"
          onClick={this.redirectToAddGenericPage}
        />
        <GenericList generics={this.props.generics} />
      </div>
    );
  }
}

GenericsPage.propTypes = {
  generics: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    generics: state.generics
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(genericActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericsPage);
