import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/web';
import api from '../../api/web';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        return (
            <Title title={`相关网站`}>
                <TopBar>
                    <div>相关网站</div>
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    web: state.web
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;