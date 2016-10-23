import React, { Component } from 'react';
import keydown from 'react-keydown';
import { Stage, Layer } from 'react-konva';
import Consts from './data/consts';
import Sky from './components/Sky';
import CloudsLayer from './components/CloudsLayer';
import Tile from './components/Tile';
import Player from './components/Player';

class App extends Component {
	constructor() {
		super();
		this.state = {
			keyEvent: ''
		}
	}

	componentWillReceiveProps({ keydown }) {
		if (keydown.event) {
			this.setState({
				keyEvent: keydown.event
			});
		}
	}

	render() {
		return (
			<Stage width={Consts.STAGE_DIMENSIONS.width} height={Consts.STAGE_DIMENSIONS.height} >
				<Layer>
					<Sky {...Consts.STAGE_DIMENSIONS} />
				</Layer>
				<CloudsLayer keyEvent={this.state.keyEvent}/>
			</Stage>
		);
	}
}

export default keydown(App);

				// <Layer x={this.state.offsetX} y={0}>
				// 	{tiles}
				// </Layer>
				// <Layer x={this.state.offsetX} y={0}>
				// 	<Player defaultX={Consts.PLAYER_CONSTS.defaultX} defaultY={pathArray[1].actualY - Consts.PLAYER_DIMENSIONS.height} {...this.state} generatorArray={this.arrayGenerator()} />
				// </Layer>


	// arrayGenerator() {
	// 	return Array.from({ length: 1 + (() => { return 30; })()}, (v,k) => k * Consts.TILE_DIMENSIONS.width);
	// }

	// tilesGenerator() {
	// 	var generatorArray = this.arrayGenerator(); 
	// 	var directions = [Consts.DIRECTIONS.none, Consts.DIRECTIONS.down, Consts.DIRECTIONS.up];	
	// 	var vectorTTL = Consts.TILE_CONSTS.vectorTTL;		
	// 	var actualY = Consts.TILE_CONSTS.defaultY;
	// 	var actualDirection = directions[0];

	// 	var pathArray = generatorArray.map((posX) => {
	// 		if(vectorTTL > 0) {
	// 			vectorTTL--;
	// 		} else {
	// 			vectorTTL = Math.floor((Math.random() * 4));
	// 			actualDirection = directions[Math.floor((Math.random() * 3))];
	// 		}

	// 		switch(actualDirection) {
	// 			case directions[0]:
	// 			break;

	// 			case directions[1]:
	// 				if(actualY < Consts.TILE_CONSTS.maxY) {
	// 					actualY += Consts.TILE_DIMENSIONS.height;
	// 				}
	// 			break;

	// 			default:
	// 			break;
	// 		}

	// 		return {
	// 			actualY: actualY,
	// 			actualX: posX,
	// 			actualDirection: actualDirection,
	// 			vectorTTL: vectorTTL
	// 		};
	// 	});

	// 	if(sessionStorage.getItem('vectorLock') === 'false') {
	// 		sessionStorage.setItem('lastVector', JSON.stringify({
	// 			actualY: pathArray[pathArray.length-1].actualY,
	// 			vectorTTL: 0,
	// 			vectorDirection: '' 
	// 		}));
	// 		sessionStorage.setItem('pathArray', JSON.stringify(pathArray));
	// 		sessionStorage.setItem('vectorLock', true);
	// 	}

	// 	return generatorArray.map((posX, element) => {
	// 		return(
	// 			<Tile 
	// 				defaultX={posX} 
	// 				defaultY={pathArray[element].actualY} 
	// 				moveX={Consts.TILE_PARALAX.leftRight} 
	// 				{...this.state} 
	// 				stageDimensions={Consts.STAGE_DIMENSIONS} 
	// 				key={posX} 
	// 				pathArrayId={element}
	// 				order={element}
	// 				generatorArray={generatorArray}
	// 			/>
	// 		)
	// 	});
	// }				