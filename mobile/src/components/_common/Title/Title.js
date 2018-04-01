import React, { Component } from 'react';
class Title extends Component {

    constructor (props){
        super(props);
        this.state = {};
    }

    componentWillMount () {
        const { title } = this.props;
        document.title = title;
    }

    render () {
        const { children = '' } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }
}

export default Title;

