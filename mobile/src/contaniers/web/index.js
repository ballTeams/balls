import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as AppActions from '../../actions/web';
import api from '../../api/web';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

import Web01 from 'styles/web01.png';
import Web02 from 'styles/web02.png';
import Web03 from 'styles/web03.png';
import Web04 from 'styles/web04.png';
import Web05 from 'styles/web05.png';
import Web06 from 'styles/web06.png';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        const arr = [
            {img: Web01, url: 'http://www.egouz.com/topics/9211.html'},
            {img: Web02, url: 'http://www.spbo.com'},
            {img: Web03, url: 'https://www.leisu.com'},
            {img: Web04, url: 'http://www.skysports.com'},
            {img: Web05, url: 'http://www.win007.com'},
            {img: Web06, url: 'http://www.gooooal.com/'},
        ];
        return (
            <Title title={`相关网站`}>
                <TopBar>
                    <div className="g-pd-10">
                        <div className="g-flex g-fw-w">
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div 
                                            onClick={() => {
                                                location.href = item.url;
                                            }} 
                                            key={index}
                                            className="g-pd-b-20 g-pd-lr-10 g-w-6"
                                        >
                                            <img style={{ width: '100%', height: '100%', float: 'left' }} src={item.img}/>
                                        </div>
                                    );
                                })
                            }
                            
                            
                        </div>
                    </div>
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    web: state.web
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;