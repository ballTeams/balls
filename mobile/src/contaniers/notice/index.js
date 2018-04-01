import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/notice';
import api from '../../api/notice';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        return (
            <Title title={`公告`}>
                <TopBar>
                    <div>公告</div>
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    notice: state.notice
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;