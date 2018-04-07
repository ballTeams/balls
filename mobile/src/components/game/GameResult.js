import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
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
        this.loadData(this.props.status);
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.status != this.props.status){
            this.loadData(nextProps.status);
        }
    }
    loadData = (status) => {
        console.log(status);
        const { actions } = this.props;
        ajax({
            url: api.GAME_RESULT_GET,
            data: { status: status },
            method: 'GET',
            success: (res) => {
                actions.gameResult(res.data, status);
            }, 
            error: (res) => {

            }
        });
    }
    handleClick = () => {

    }
    render () {
        const tabs = [
            {title: '今天'},
            {title: '昨天'},
            {title: '前天'}
        ];
        const { info, status } = this.props;

        return (
            <div className="g-tc">
                <Tabs 
                    tabs={tabs}
                    initialPage={Number(status)}
                    onChange={(tab, index) => { 
                        this.props.router.replace(`/game/result?status=${index}`);
                    }}
                >
                    {
                        tabs.map((item, index) => {
                            return (
                                <div key={index}>
                                    {
                                        index==status && info[status].map((item, index) => {
                                            console.log(item, 1);
                                            const { content, match_time, title, ball_match_id } = item;
                                            return (
                                                <Item 
                                                    key={`${status}_${index}`}
                                                    content={content}
                                                    time={match_time}
                                                    title={title}
                                                    onClick={() => this.handleClick(ball_match_id)}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                    
                </Tabs>
            </div>
        );
    }
}

export default Form;

