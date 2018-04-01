import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/login';
import api from '../../api/login';
import Title from '../../components/_common/Title/Title';
import Login from '../../components/login/Login';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        return (
            <Title title={`登录`}>
                <Login actions={actions} api={api} />
            </Title>
           
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    login: state.login
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default Demo;