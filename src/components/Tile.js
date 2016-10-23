import React, { Component } from 'react';
import {Rect} from 'react-konva';
import Consts from '../data/consts';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.y
        };
    }

    render() {
        return(
            <Rect x={this.state.x} y={this.state.y} width={Consts.TILE_DIMENSIONS.width} height={Consts.TILE_DIMENSIONS.height} stroke={"red"} strokeWidth={1}/>
        )
    }
}

export default Tile;
