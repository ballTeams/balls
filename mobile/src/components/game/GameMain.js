import React, { Component } from 'react';
import { } from 'antd-mobile';
import { Link } from 'react-router';
import Item from '../_common/Item/Item';
import request from 'superagent';
import api from 'api/game';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {
        console.log(1);
        request.get(api.GAME_MAIN_GET)
            .withCredentials()
            .then(function(res) {
                console.log(res, 123);
              // res.body, res.headers, res.status
            })
            .catch(function(err) {
              // err.message, err.response
            });
    }

    render () {
        const arr = [1, 2, 3];
        return (
            <div>
                {
                    arr.map((item, index) => {
                        return (
                            <Item 
                                key={`${index}`}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Form;

