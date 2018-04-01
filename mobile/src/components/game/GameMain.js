import React, { Component } from 'react';
import { } from 'antd-mobile';
import { Link } from 'react-router';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {

    }

    render () {
        const arr = [
            
        ];
        return (
            <div className="g-tc">
                {
                    arr.map((item, index) => {
                        return (
                            <div key={`${index}`} className="_item">
                                <Link to={`${item.url}`}>{item.title}</Link>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Form;

