import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/commis';
import api from '../../api/commis';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';
import ajax from 'utils/ajax';
import { Toast } from 'antd-mobile';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        ajax({
            url: api.COMMISSION_MAIN_GET,
            data: {},
            method: 'GET',
            success: (res) => {
                this.props.actions.commissionMain(res.data);
            }, 
            error: (res) => {
                Toast.info(res.msg, 1);

            }
        });
    }
    render() {
        const { actions, commission } = this.props;
        const { total, list } = commission;
        return (
            <Title title={`佣金`}>
                <TopBar>
                    <div className="g-pd-10">
                        <div className="g-bg-main g-pd-10">
                            <div>代理佣金： {total}</div>
                        </div>
                        <div className="g-bg-main g-pd-tb-10">
                            <table className="gm-table">
                                <thead>
                                    <tr>
                                        <th>佣金</th>
                                        <th>时间</th>
                                        <th>详情</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map((item, index) => {
                                            const { change_money, create_time, remark } = item;
                                            return (
                                                <tr key={index}>
                                                    <td>{change_money}</td>
                                                    <td>{create_time}</td>
                                                    <td>{remark}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    commission: state.commission
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;