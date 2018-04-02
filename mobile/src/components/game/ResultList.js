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
            <div>
                {
                    arr.map((item, index) => {
                        return (
                            <Item 
                                key={index}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default ResultList;

