import React, { Component } from 'react';
import { } from 'antd-mobile';
import { Link } from 'react-router';
import Item from '../_common/Item/Item';
import request from 'superagent';
import api from 'api/game';
import ajax from 'utils/ajax';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {
        const { actions } = this.props;
        ajax({
            url: api.GAME_MAIN_GET,
            data: {},
            method: 'GET',
            type: 'GAME_MAIN_GET',
            success: (res) => {
                actions.gameMain(res.data);
            }, 
            error: (res) => {

            }
        }, actions);
    }

    render () {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        const {
                            match_time,
                            content,
                            title
                        } = item;
                        return (
                            <Item 
                                key={`${index}`}
                                content={content}
                                time={match_time}
                                title={title}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Form;

