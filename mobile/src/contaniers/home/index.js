import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/login';
import api from '../../api/login';
import HomeMain from '../../components/home/HomeMain';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        return (
            <Title title={`菜单`}>
                <TopBar>
                
                    <HomeMain actions={actions} api={api} />
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    home: state.home
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;