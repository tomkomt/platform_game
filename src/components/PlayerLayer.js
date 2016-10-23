import React, { Component } from 'react';
import {Rect, Layer} from 'react-konva';
import Consts from '../data/consts';
import TilesAPI from '../api/TilesAPI';
import Player from './Player';

class PlayerLayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offsetX: 0
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.keyEvent) {
			switch(nextProps.keyEvent.code) {
				case 'ArrowRight':
					this.setState({
						offsetX: Consts.PLAYER_PARALAX.leftRight * -1
					});
				break;

				case 'ArrowLeft':
					this.setState({
						offsetX: Consts.PLAYER_PARALAX.leftRight
					});
				break;

                case 'ArrowUp':
                break;

				default:
				break;
			} 
		}
	}

    render() {
        return(
            <Layer>
        	    <Player x={Consts.PLAYER_CONSTS.defaultX} defaultY={TilesAPI.getStartingTile().actualY - Consts.PLAYER_DIMENSIONS.height} offsetX={this.state.offsetX}/>
            </Layer>
        );
    }
    
}

export default PlayerLayer;
