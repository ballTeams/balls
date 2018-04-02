import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/correct';
import api from '../../api/correct';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        return (
            <Title title={`波胆记录`}>
                <TopBar>
                    <div className="g-flex-ac _item g-tc g-pd-tb-15">
                        <div className="g-col">
                            <div>波胆总计</div>
                            <div>0.00</div>
                        </div>
                        <div className="g-col">
                            <div>盈亏</div>
                            <div>0.00</div>
                        </div>
                    </div>
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    correct: state.correct
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;