import React, { Component } from 'react';
import keydown from 'react-keydown';
import { Stage, Layer } from 'react-konva';
import Consts from './data/consts';
import Sky from './components/Sky';
import Cloud from './components/Cloud';
import Tile from './components/Tile';
import Player from './components/Player';

class App extends Component {
	constructor() {
		super();
		this.state = {
			direction: Consts.DIRECTIONS.none
		}
	}

	componentWillMount() {
		sessionStorage.setItem('vectorLock', false);		
	}

	componentWillReceiveProps({ keydown }) {
		if (keydown.event) {
			switch(keydown.event.code) {
				case 'ArrowRight':
					this.setState({
						direction: Consts.DIRECTIONS.right
					});
				break;

				case 'ArrowLeft':
					this.setState({
						direction: Consts.DIRECTIONS.left
					});
				break;

				default:
					this.setState({
						direction: Consts.DIRECTIONS.none
					});
				break;
			} 
		}
	}

	arrayGenerator() {
		return Array.from({ length: 1 + (() => { return Consts.STAGE_DIMENSIONS.width/Consts.TILE_DIMENSIONS.width; })()}, (v,k) => k * Consts.TILE_DIMENSIONS.width);
	}

	tilesGenerator() {
		var generatorArray = this.arrayGenerator(); 
		var directions = [Consts.DIRECTIONS.none, Consts.DIRECTIONS.down, Consts.DIRECTIONS.up];	
		var vectorTTL = Consts.TILE_CONSTS.vectorTTL;		
		var actualY = Consts.TILE_CONSTS.defaultY;
		var actualDirection = directions[0];

		var pathArray = generatorArray.map((posX) => {
			if(vectorTTL > 0) {
				vectorTTL--;
			} else {
				vectorTTL = Math.floor((Math.random() * 4));
				actualDirection = directions[Math.floor((Math.random() * 3))];
			}

			switch(actualDirection) {
				case directions[0]:
				break;

				case directions[1]:
					if(actualY < Consts.TILE_CONSTS.maxY) {
						actualY += Consts.TILE_DIMENSIONS.height;
					}
				break;

				default:
				break;
			}

			return {
				actualY: actualY,
				actualDirection: actualDirection,
				vectorTTL: vectorTTL
			};
		});

		if(sessionStorage.getItem('vectorLock') === 'false') {
			sessionStorage.setItem('lastVector', JSON.stringify({
				actualY: pathArray[pathArray.length-1].actualY,
				vectorTTL: 0,
				vectorDirection: '' 
			}));
			sessionStorage.setItem('pathArray', JSON.stringify(pathArray));
			sessionStorage.setItem('vectorLock', true);
		}

		return generatorArray.map((posX, element) => {
			return(
				<Tile 
					defaultX={posX} 
					defaultY={pathArray[element].actualY} 
					moveX={Consts.TILE_PARALAX.leftRight} 
					{...this.state} 
					stageDimensions={Consts.STAGE_DIMENSIONS} 
					key={posX} 
					pathArrayId={element}
					order={element}
					generatorArray={generatorArray}
				/>
			)
		});
	}

	render() {
		return (
			<Stage width={Consts.STAGE_DIMENSIONS.width} height={Consts.STAGE_DIMENSIONS.height} >
				<Layer>
					<Sky {...Consts.STAGE_DIMENSIONS} />
				</Layer>
				<Layer>
					<Cloud defaultX={30} moveX={Consts.CLOUD_PARALAX.leftRight} defaultY={120} {...this.state} stageDimensions={Consts.STAGE_DIMENSIONS} />
					<Cloud defaultX={200} moveX={Consts.CLOUD_PARALAX.leftRight} defaultY={135} {...this.state} stageDimensions={Consts.STAGE_DIMENSIONS} />
					<Cloud defaultX={370} moveX={Consts.CLOUD_PARALAX.leftRight} defaultY={115} {...this.state} stageDimensions={Consts.STAGE_DIMENSIONS} />
					<Cloud defaultX={540} moveX={Consts.CLOUD_PARALAX.leftRight} defaultY={140} {...this.state} stageDimensions={Consts.STAGE_DIMENSIONS} />
					<Cloud defaultX={720} moveX={Consts.CLOUD_PARALAX.leftRight} defaultY={110} {...this.state} stageDimensions={Consts.STAGE_DIMENSIONS} />
				</Layer>
				<Layer>
					{this.tilesGenerator()}
				</Layer>
				<Layer>
					<Player defaultX={Consts.PLAYER_CONSTS.defaultX} defaultY={200} {...this.state} generatorArray={this.arrayGenerator()} />
				</Layer>
			</Stage>
		);
	}
}

export default keydown(App);
