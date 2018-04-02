import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { Link } from 'react-router';
import Item from '../_common/Item/Item';
class ResultList extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {

    }

    render () {
        const arr = [1, 2, 3, 4, 5, 6];
        return (
            <div className="g-c-white g-pd-lr-20 g-bg-main" style={{ minHeight: window.innerHeight - 79}}>
                <div className="g-lh-44">新增代理账号</div>
                <div style={{ border: '1px solid #fff'}} className="g-pd-10">
                    提示：新增代理需要10个点数，返还方式为新代理波胆投注赢利等额返还累计满10个点数，返还期限7日内。
                </div>
                <div className="g-pd-tb-20">
                    <input className="g-pd-10" placeholder="账号应由5-12位数字或字母组成" style={{ width: '100%' }} />
                </div>
                <div>
                    <div className="g-bg-blue g-lh-44 g-tc">新增代理</div>
                </div>
            </div>
        );
    }
}

export default ResultList;

