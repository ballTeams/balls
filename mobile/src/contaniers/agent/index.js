import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/agent';
import api from '../../api/agent';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

import AgentAdd from '../../components/agent/AgentAdd';
import AgentMain from '../../components/agent/AgentMain';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        switch(location.pathname) {
            case '/agent/add': 
                return (
                    <Title title={`添加代理`}>
                        <TopBar>
                            <AgentAdd />
                        </TopBar>
                    </Title>
                );
            default: 
                return (
                    <Title title={`代理列表`}>
                        <TopBar>
                            <AgentMain />
                        </TopBar>
                    </Title>
                );
        }
        
    }
}

const mapStateToProps = (state, ownProps) => ({
    agent: state.agent
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;