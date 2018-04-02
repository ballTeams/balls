import React, { Component } from 'react';
class Item extends Component {

    constructor (props){
        super(props);
        this.state = {};
    }

    render () {
        const { title = '', content = '赛事名称', time = '赛事时间', onClick } = this.props;
        return (
            <div 
                className="_item g-flex-ac g-pd-lr-20 g-pd-tb-10" 
                onClick={onClick && onClick}
            >
                <div className="g-col g-tl">
                    <p>
                        <span className="g-pd-r-10">[{title}]</span>
                        {content}
                    </p>
                    <p>{time}</p>
                </div>
                <div>></div>
            </div>
        );
    }
}

export default Item;

