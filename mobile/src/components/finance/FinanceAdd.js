import React, { Component } from 'react';
import { Link } from 'react-router';
import { } from 'antd-mobile';
class Add extends Component {

    constructor (props){
        super(props);
        this.state = {};
    }

    componentWillMount () {

    }

    render () {
        return (
            <div className="g-pd-10">
                <div className="g-bg-main g-pd-10">
                    <div className="g-lh-44">充值</div>
                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="请输入充值点数100起"/>
                    <div className="c-bg-orange g-tc g-lh-34">下一步</div>                
                </div>
            </div>
        );
    }
}
export default Add;

