import React, { Component } from 'react';
import { Link } from 'react-router';
import { Tabs, Toast } from 'antd-mobile';
import api from 'api/finance';
import ajax from 'utils/ajax';
class DemoList extends Component {

    constructor (props){
        super(props);
        this.state = {};
    }

    componentWillMount () {
        this.loadData(this.props.type)
    } 
    componentWillReceiveProps(nextProps){
        if (nextProps.type != this.props.type){
            this.loadData(nextProps.type);
        }
    }  
    loadData = (type) => {
        if(this.props.main[type].length > 0){
            return false;
        }
        ajax({
            url: api.FINANCE_MAIN_GET,
            data: {
                type
            },
            method: 'GET',
            success: (res) => {
               this.props.actions.financeMain(res.data, type);
            }, 
            error: (res) => {
                Toast.info('网络不稳定，请稍后再试...', 1);
            }
        });
    }
    render () {
        const tabs = [
            {title: '充值记录'},
            {title: '提现记录'},
            {title: '转账记录'}
        ];
        const { main, type } = this.props;
        const { total_money } = main;
        return (
            <div className="g-pd-10">
                <div className="g-fs-16 g-tc g-bg-main g-pd-tb-20">提现总额：{total_money}</div>
                <div className="g-bg-main g-pd-b-20 c-gray">
                    <Tabs 
                        tabs={tabs}
                        initialPage={Number(type-1)}
                        onChange={(tab, index) => { 
                            this.props.router.replace(`/finance?type=${index+1}`);
                        }}
                    >
                        {
                            tabs.map((item, index) => {
                                return (
                                    <div className="g-pd-tb-10" key={index}>
                                        <table className="gm-table">
                                            <thead>
                                                <tr>
                                                    <th>交易日期</th>
                                                    <th>类型／数量</th>
                                                    <th>交易点数</th>
                                                    <th>交易状态</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    index==type && main[type].map((val, i) => {
                                                        const { } = val;
                                                        return (
                                                            <tr key={`${index}_${i}`}>
                                                                <td>1</td>
                                                                <td>2</td>
                                                                <td>3</td>
                                                                <td>4</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            })
                        }
                        
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default DemoList;

