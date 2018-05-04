import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as genericSortActions from '../../actions/genericSortActions';
import GenericList from './GenericList';
import { browserHistory } from 'react-router';

class GenericsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.actions.getAllUmami();
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
        <GenericList generics={this.props.genericSort} />
      </div>
    );
  }
}

GenericsPage.propTypes = {
  genericSort: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    genericSort: state.genericSort,
    tastes: state.tastes
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(genericSortActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericsPage);
