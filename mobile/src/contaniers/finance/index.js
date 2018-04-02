import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/finance';
import api from '../../api/finance';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

import FinanceAdd from 'components/finance/FinanceAdd';
import FinanceOut from 'components/finance/FinanceOut';
import FinanceChange from 'components/finance/FinanceChange'
import FinanceMain from 'components/finance/FinanceMain'
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
                            <FinanceAdd />
                        </TopBar>
                    </Title>
                );
            case '/finance/out': 
                return (
                    <Title title={`提现`}>
                        <TopBar>
                            <FinanceOut />
                        </TopBar>
                    </Title>
                );
            case '/finance/change': 
                return (
                    <Title title={`转账`}>
                        <TopBar>
                            <FinanceChange />
                        </TopBar>
                    </Title>
                );
            default:
                return (
                    <Title title={`交易记录`}>
                        <TopBar>
                            <FinanceMain />
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