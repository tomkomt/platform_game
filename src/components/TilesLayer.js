import React, { Component } from 'react';
import {Rect, Layer} from 'react-konva';
import Consts from '../data/consts';
import Tile from './Tile';

class TilesLayer extends Component {
	constructor(props) {
		super(props);
	}

	arrayGenerator() {
		return Array.from({ length: 1 + (() => { return 30; })()}, (v,k) => k * Consts.TILE_DIMENSIONS.width);
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

				case directions[2]:
					if(actualY > Consts.TILE_CONSTS.minY) {
						actualY -= Consts.TILE_DIMENSIONS.height;
					}
				break;
                

				default:
				break;
			}

			return {
				actualY: actualY,
				actualX: posX,
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
        return(
            <Layer>
                {this.tilesGenerator()}
            </Layer>
        )
    }		

}

export default TilesLayer;
