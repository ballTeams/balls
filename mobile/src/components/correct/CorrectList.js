import React, { Component } from 'react';
import { } from 'antd-mobile';
import { Link } from 'react-router';
import Item from '../_common/Item/Item';
import api from 'api/game';
import ajax from 'utils/ajax';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {
        
    }
    render () {
        const { list } = this.props;
        return (
            <div className="g-bg-main g-pd-tb-15"> 
                <table className="gm-table">
                    <thead>
                        <tr>
                            <th>赛事名称</th>
                            <th>购买的比分</th>
                            <th>交易金额</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                const {
                                    match_name,
                                    buy_result,
                                    buy_money,
                                    status_text
                                } = item;
                                return (
                                   <tr key={index}>
                                        <td>{match_name}</td>
                                        <td>{buy_result}</td>
                                        <td>{buy_money}</td>
                                        <td>{status_text}</td>
                                   </tr>
                                );
                            })
                        }
                    </tbody>
                
                </table>
            </div>
        );
    }
}

export default Form;

