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
        this.loadData(1);
    }
    loadData = () => {
        const { actions } = this.props;
        ajax({
            url: api.GAME_RESULT_GET,
            data: {status: 1},
            method: 'GET',
            success: (res) => {
                actions.gameResult(res.data, status);
            }, 
            error: (res) => {

            }
        });
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

