import React, { Component } from 'react';
import {Rect, Layer} from 'react-konva';
import Consts from '../data/consts';
import TilesAPI from '../api/TilesAPI';
import Tile from './Tile';

class TilesLayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offsetX: 0
		}
	}

	arrayGenerator() {
		return Array.from({ length: 1 + (() => { return Consts.TILE_CONSTS.tilesCount; })()}, (v,k) => k * Consts.TILE_DIMENSIONS.width);
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

		if(TilesAPI.getTilesDataLock() === false) {
			TilesAPI.setTilesData(pathArray);
			TilesAPI.setTilesDataLock(true);
		}

		return generatorArray.map((posX, element) => {
			return(
				<Tile 
					x={posX} 
					y={pathArray[element].actualY} 
					stageDimensions={Consts.STAGE_DIMENSIONS} 
					key={posX} 
					pathArrayId={element}
					order={element}
					generatorArray={generatorArray}
				/>
			)
		});
	}		

	componentWillReceiveProps(nextProps) {
        let newOffsetX = this.state.offsetX;
		if (nextProps.keyEvent) {
			switch(nextProps.keyEvent.code) {
				case 'ArrowRight':
                    newOffsetX = this.state.offsetX - Consts.TILE_PARALAX.leftRight;
				break;

				case 'ArrowLeft':
                    newOffsetX = this.state.offsetX + Consts.TILE_PARALAX.leftRight;
				break;

				default:
				break;
			} 
		}

        if(newOffsetX > 0) {
            newOffsetX = this.state.offsetX;
        } else if(newOffsetX <= ((Consts.STAGE_DIMENSIONS.width - Consts.TILE_DIMENSIONS.width) * -1)) {
            newOffsetX = this.state.offsetX;
        }

        this.setState({
            offsetX: newOffsetX
        });
	}

    render() {
        return(
            <Layer x={this.state.offsetX}>
                {this.tilesGenerator()}
            </Layer>
        )
    }		
}

export default TilesLayer;
