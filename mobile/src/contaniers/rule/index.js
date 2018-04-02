import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/rule';
import api from '../../api/rule';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        return (
            <Title title={`平台规则`}>
                <TopBar>
                    <div className="g-pd-30 g-bg-main">
                        <div className="g-fs-24 g-tc">规则</div>
                        <ul>
                            <li>1、所有足球投资之赛果认定以本平台所订定之规则为准，不接受其他体育网站或其他实时比分所公布的赛果，敬请代理注意!</li>
                            <li>2、交易皆以法定时间〈上下半场各须满45分钟及含伤停补时〉的比赛结果为准〈未满九十分钟者皆不予计算。</li>
                            <li>3、某些青少年其正规比赛时间(含伤停补时)为80、70分钟不等，若无腰斩或气候等突发因素影响导致比赛未满正规时间，本 平台仍视为有效注单。</li>
                            <li>4、所有足球若联盟已标明于何处举行赛事，则该联盟赛事队伍无论标明主场或客场，其实际并无主客场区别，若无受天气或其他突发因素影响赛事进行，则所有投资单均视为有效注单。</li>
                            <li>5、所有足球投资之赛事，若受天气或其他突发因素影响赛事进行，如腰斩、保留比赛…等，所有投资一律退回不予计算，以全场波胆 上半场波胆 总进球数，如已进行至规范时间内是否计算一律以本平台公告为主。</li>
                            <li>6、如遇特殊状况，导致赛事无法完成，所有投资单是否有效，本平台会以公告方式进行通知裁定结果。</li>
                            <li>7、在指定球赛中，反对球赛的最终正确比分。所有足球波胆交易皆以法定时间(上下半场各须满45分钟及伤停补时)的比赛结果为准(未满九十分钟者皆不予计算)；加时及十二码决胜之比赛，或之后由任何体育纪律委员会重新裁决而更改之赛果均不予计算。</li>
                            <li>8、两队必须完成该赛事，才视为有效注单，如因腰斩、延长加赛、保留比赛、天候异常及无法抗拒之因素导至无法完成整埸比赛,则投注该赛事视为无效注单。</li>
                            <li>9、如遇赛事临时更改开赛时间而提前开赛，所有投资于该赛事的注单，视为有效注单，一律依照官方公告之赛事结果为比赛最后依据。</li>
                            <li>10、如遇黑客攻击或人为因素…其他外力因素影响帐务数据，一律以本平台备份数据为主。</li>
                            <li>11、本平台发现有打水套利或恶意破坏….等，本平台保有删除注单及停止代理账号之权利。</li>
                            <li>12、代理一旦使用本网站后，及视为同意本平台一切规定。</li>
                        </ul>
                    </div>
                </TopBar>
            </Title>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    rule: state.rule
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;