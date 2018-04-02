import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/user';
import api from '../../api/user';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTplOne: false,
            showTplTwo: false,
            showTplThree: false,
        }
    }
    render() {
        const { actions } = this.props;
        const { showTplOne, showTplTwo, showTplThree } = this.state;
        return (
            <Title title={`个人资料`}>
                <TopBar>
                    <div className="g-pd-10">
                        <div className="g-bg-main g-pd-10 g-lh-34">
                            <div className="g-fs-18">基础信息(一经填写不可修改)</div>
                            <div>已设置 : *康</div>
                            <div>已设置 : 86-****5467</div>
                            <div className="g-fs-18 g-pd-t-20"> 交易密码</div>
                            <div className="g-flex-ac">
                                <div>已设置 : **********  </div>
                                <span onClick={() => {
                                    this.setState({
                                        showTplOne: !this.state.showTplOne,
                                        showTplTwo: false
                                    })
                                }} className="g-c-orange g-pd-lr-20">修改</span>
                                <span onClick={() => {
                                    this.setState({
                                        showTplTwo: !this.state.showTplTwo,
                                        showTplOne: false
                                    })
                                }} className="g-c-orange">找回交易密码</span>
                            </div>
                            {showTplOne && 
                                <div>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="原交易密码"/>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="设置一个新的交易密码"/>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="重复密码"/>
                                    <div className="g-flex g-pd-b-10">
                                        <input className="g-lh-34 g-col g-pd-lr-10" placeholder="短信码"/>
                                        <div style={{ width: 100, height: 34 }} className="g-bg-white g-m-l-20 c-bg-green g-tc">发送短信码</div>
                                    </div>
                                    <div className="g-flex g-tc g-m-b-10">
                                        <div className="g-bg-blue g-col g-m-r-20">确认修改</div>
                                        <div onClick={() => {
                                            this.setState({
                                                showTplOne: !this.state.showTplOne
                                            })
                                        }} className="g-bg-white g-col g-m-l-20 c-darkgray">取消</div>
                                    </div>
                                </div>
                            }
                            {showTplTwo && 
                                <div>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="登录密码"/>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="设置一个新的交易密码"/>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="重复密码"/>
                                    <div className="g-flex g-pd-b-10">
                                        <input className="g-lh-34 g-col g-pd-lr-10" placeholder="短信码"/>
                                        <div style={{ width: 100, height: 34 }} className="g-bg-white g-m-l-20 c-bg-green g-tc">发送短信码</div>
                                    </div>
                                    <div className="g-flex g-tc g-m-b-10">
                                        <div className="g-bg-blue g-col g-m-r-20">确认修改</div>
                                        <div onClick={() => {
                                            this.setState({
                                                showTplTwo: !this.state.showTplTwo
                                            })
                                        }} className="g-bg-white g-col g-m-l-20 c-darkgray">取消</div>
                                    </div>
                                </div>
                            }
                            <div className="g-fs-18 g-pd-t-20">登录密码</div>
                            <div className="g-flex-ac">
                                <div>已设置 : **********  </div>
                                <span onClick={() => {
                                    this.setState({
                                        showTplThree: !this.state.showTplThree,
                                    })
                                }} className="g-c-orange g-pd-lr-20">修改</span>
                            </div>
                            {showTplThree && 
                                <div className="g-pd-b-30">
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="原登录密码"/>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="新的密码"/>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="重复新密码"/>
                                    <input style={{ width: '100%' }} className="g-lh-34 g-m-b-10 g-pd-lr-10" placeholder="交易密码"/>
                                    <div className="g-flex g-tc g-m-b-10">
                                        <div className="g-bg-blue g-col g-m-r-20">确认修改</div>
                                        <div className="g-bg-white g-col g-m-l-20 c-darkgray">取消</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;