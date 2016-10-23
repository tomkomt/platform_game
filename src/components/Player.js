import React, { Component } from 'react';
import {Rect} from 'react-konva';
import Consts from '../data/consts';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.defaultY
        };
    }

    componentWillReceiveProps(nextProps) {
    
   }

	render() {
		return (
            <Rect x={this.state.x} y={this.state.y} width={Consts.PLAYER_DIMENSIONS.width} height={Consts.PLAYER_DIMENSIONS.height} stroke={"black"} strokeWidth={1}/>
		);
	}
}

export default Player;
