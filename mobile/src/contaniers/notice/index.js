import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/notice';
import api from '../../api/notice';
import { Accordion } from 'antd-mobile';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        const arr = [1, 2, 3, 4]
        return (
            <Title title={`公告`}>
                <TopBar>
                    <div className="g-pd-10">
                        <div>
                        <Accordion accordion className="my-accordion">
                            {
                                arr.map((item, index) => {
                                    return (
                                        <Accordion.Panel header="赛事公告" key={index}>
                                            <div className="g-pd-10">
                                                text text text text text text text text text text text text text text text
                                            </div>
                                        </Accordion.Panel>
                                    );
                                    
                                })
                            }
                        </Accordion>
                            
                        </div>
                    </div>
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