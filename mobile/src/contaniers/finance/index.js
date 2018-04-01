import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/finance';
import api from '../../api/finance';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, location } = this.props;
        switch(location.pathname){
            case '/finance/add': 
                return (
                    <Title title={`充值`}>
                        <TopBar>
                            <div>充值</div>
                        </TopBar>
                    </Title>
                );
            case '/finance/out': 
                return (
                    <Title title={`提现`}>
                        <TopBar>
                            <div>提现</div>
                        </TopBar>
                    </Title>
                );
            case '/finance/change': 
                return (
                    <Title title={`转账`}>
                        <TopBar>
                            <div>转账</div>
                        </TopBar>
                    </Title>
                );
            default:
                return (
                    <Title title={`交易记录`}>
                        <TopBar>
                            <div>交易记录</div>
                        </TopBar>
                    </Title>
                );
        }
        
    }
}

const mapStateToProps = (state, ownProps) => ({
    finance: state.finance
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;