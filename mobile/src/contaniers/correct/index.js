import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/correct';
import api from '../../api/correct';
import ajax from 'utils/ajax';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

import CorrectList from '../../components/correct/CorrectList';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        const { actions } = this.props;
        ajax({
            url: api.CORRECT_MAIN_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                actions.correntMain(res.data);
            }, 
            error: (res) => {

            }
        });
    }
    render() {
        const { actions, correct } = this.props;
        const { list, result, total } = correct;
        return (
            <Title title={`波胆记录`}>
                <TopBar>
                    <div className="g-pd-10">
                        <div className="g-flex-ac _item g-tc g-pd-tb-15 g-m-b-10" style={{ border: 'none' }}>
                             <div className="g-col">
                                <div>波胆总计</div>
                                <div>{total}</div>
                            </div>
                            <div className="g-col">
                                <div>盈亏</div>
                                <div>{result}</div>
                            </div>
                        </div>
                        <CorrectList list={list} />
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