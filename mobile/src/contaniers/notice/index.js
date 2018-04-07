import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/notice';
import api from '../../api/notice';
import { Accordion } from 'antd-mobile';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';
import ajax from 'utils/ajax';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        const { actions } = this.props;
        ajax({
            url: api.NOTICE_MAIN_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                actions.noticeMain(res.data);
            }, 
            error: (res) => {

            }
        });
    }
    render() {
        const { actions, notice } = this.props;
        const { list } = notice;
        console.log(notice);
        return (
            <Title title={`公告`}>
                <TopBar>
                    <div className="g-pd-10">
                        <div>
                        <Accordion accordion className="my-accordion">
                            {
                                list.map((item, index) => {
                                    const { title, content } = item;
                                    return (
                                        <Accordion.Panel header={title} key={index}>
                                            <div className="g-pd-10">{content}</div>
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