import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/game';
import api from '../../api/game';
import TopBar from '../../components/_common/TopBar/TopBar';
import Title from '../../components/_common/Title/Title';

import GameMain from '../../components/game/GameMain';
import GameResult from '../../components/game/GameResult';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, location, game } = this.props;
        switch(location.pathname) {
            case '/game/result': 
                return (
                    <Title title={`赛事结果`}>
                        <TopBar>
                            <GameResult actions={actions} api={api} />
                        </TopBar>
                    </Title>
                );
            default: 
                return (
                    <Title title={`赛事列表`}>
                        <TopBar>
                            <GameMain list={game.list} actions={actions} api={api} />
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