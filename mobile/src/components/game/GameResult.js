import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { Link } from 'react-router';
import ResultList from './ResultList';
class Form extends Component {

    constructor (props){
        super(props);
        this.state = { };
    }

    componentWillMount () {

    }

    render () {
        const tabs = [
            {title: '今天'},
            {title: '昨天'},
            {title: '前天'}
        ];
        return (
            <div className="g-tc">
                <Tabs tabs={tabs}
                  initialPage={1}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {
                        tabs.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ResultList
                                        
                                    />
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

