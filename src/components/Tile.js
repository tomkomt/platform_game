import React, { Component } from 'react';
import {Rect} from 'react-konva';
import Consts from '../data/consts';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.defaultX,
            y: this.props.defaultY
        };
    }

    calculateVector() {
        // var lastVector = JSON.parse(sessionStorage.getItem('lastVector'));
		// var directions = [Consts.DIRECTIONS.none, Consts.DIRECTIONS.down, Consts.DIRECTIONS.up];	
		// var vectorTTL = lastVector.vectorTTL;		
		// var actualY = lastVector.actualY;
		// var actualDirection = lastVector.vectorDirection;

        // if(vectorTTL > 0) {
        //     vectorTTL--;
        // } else {
        //     vectorTTL = Math.floor((Math.random() * 4));
        //     actualDirection = directions[Math.floor((Math.random() * 3))];
        // }

        // switch(actualDirection) {
        //     case directions[0]:
        //     break;

        //     case directions[1]:
        //         if(actualY < Consts.TILE_CONSTS.maxY) {
        //             actualY += Consts.TILE_DIMENSIONS.height;
        //         }
        //     break;

        //     case directions[2]:
        //         if(actualY > Consts.TILE_CONSTS.minY) {
        //             actualY -= Consts.TILE_DIMENSIONS.height;
        //         }
        //     break;

        //     default:
        //     break;
        // }

		// sessionStorage.setItem('lastVector', JSON.stringify({
		// 	actualY: actualY,
		// 	vectorTTL: vectorTTL,
		// 	vectorDirection: actualDirection
		// }));

        // return {
        //     actualY: actualY,
        //     actualDirection: actualDirection,
        //     vectorTTL: vectorTTL
        // };        
    }

    componentWillReceiveProps(nextProps) {
        // var me = this;
        // let newX = this.state.x;
        // let positionLimits = {
        //     x: [0 - Consts.TILE_DIMENSIONS.width, this.props.stageDimensions.width]
        // };

        // switch(nextProps.direction) {
        //     case Consts.DIRECTIONS.right:
        //         newX -= nextProps.moveX;
        //         if(newX <= positionLimits.x[0]) {
        //             newX = this.props.stageDimensions.width;         
        //         }
        //     break;

        //     default:
        //     break;
        // }

        // let pathArray = JSON.parse(sessionStorage.getItem('pathArray'));
        // let newPathArray = pathArray.map((tile, index) => {
        //     if(index === me.props.pathArrayId) {
        //         tile.actualX = newX;
        //     }
        //     return tile;
        // });
        // sessionStorage.setItem('pathArray', JSON.stringify(newPathArray));

        // this.setState({
        //     x: newX
        // });
    }

    render() {
        return(
            <Rect x={this.state.x} y={this.state.y} width={Consts.TILE_DIMENSIONS.width} height={Consts.TILE_DIMENSIONS.height} stroke={"red"} strokeWidth={1}/>
        )
    }
}

export default Tile;
