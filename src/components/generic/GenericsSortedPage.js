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

    this.redirectToAddGenericPage = this.redirectToAddGenericPage.bind(this);
  }

  componentDidMount() {
    this.props.actions.getTaste(this.props.params.tasteType); // eslint-disable-line
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
  actions: PropTypes.object.isRequired,
  tasteType: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const tasteType = ownProps.params.taste;
  return {
    genericSort: state.genericSort,
    tastes: state.tastes,
    tasteType: tasteType,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(genericSortActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericsPage);
