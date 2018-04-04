import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/game';
import api from '../../api/game';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

import GameMain from '../../components/game/GameMain';
import GameResult from '../../components/game/GameResult';
import GameDetail from '../../components/game/GameDetail';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, location, game, router } = this.props;
        console.log(this.props);
        switch(location.pathname) {
            case '/game/result': 
                return (
                    <Title title={`赛事结果`}>
                        <TopBar>
                            <GameResult actions={actions} />
                        </TopBar>
                    </Title>
                );
            case '/game/detail': 
                return (
                    <Title title={`赛事详情`}>
                        <TopBar>
                            <GameDetail actions={actions} info={game.detail} location={location} />
                        </TopBar>
                    </Title>
                );
            default: 
                return (
                    <Title title={`赛事列表`}>
                        <TopBar>
                            <GameMain list={game.list} actions={actions} router={router} />
                        </TopBar>
                    </Title>
                );
        }
        
    }
}

const mapStateToProps = (state, ownProps) => ({
    game: state.game
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(AppActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default Demo;