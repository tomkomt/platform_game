import React, { Component } from 'react';
import {Rect} from 'react-konva';
import Consts from '../data/consts';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.defaultX,
            y: this.props.defaultY
        };
    }

    componentWillReceiveProps(nextProps) {
        let pathArray = JSON.parse(sessionStorage.getItem('pathArray'));
        let actualTile = pathArray.filter((tile) => {
            return tile.actualX >= this.state.x && tile.actualX <= this.state.x + Consts.PLAYER_DIMENSIONS.width; 
        });
		let nextTile = pathArray.filter((tile) => {
            return tile.actualX >= actualTile.actualX && tile.actualX <= actualTile.actualX + Consts.PLAYER_DIMENSIONS.width; 
        });
		console.log(pathArray);
		console.log(actualTile);
		console.log(nextTile);

        let newY;
        newY = actualTile[0].actualY - Consts.PLAYER_DIMENSIONS.height;

        this.setState({
            y: newY
        });
    }

	render() {
		return (
            <Rect x={this.state.x} y={this.state.y} width={Consts.PLAYER_DIMENSIONS.width} height={Consts.PLAYER_DIMENSIONS.height} stroke={"black"} strokeWidth={1}/>
		);
	}
}

export default Player;
