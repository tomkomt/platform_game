import React, { Component } from 'react';
import {Rect, Layer} from 'react-konva';
import Consts from '../data/consts';
import Cloud from './Cloud';

class CloudsLayer extends Component {
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
						offsetX: Consts.CLOUD_PARALAX.leftRight * -1
					});
				break;

				case 'ArrowLeft':
					this.setState({
						offsetX: Consts.CLOUD_PARALAX.leftRight
					});
				break;

				default:
				break;
			} 
		}
	}

    render() {
        return(
            <Layer>
                <Cloud defaultX={30} offsetX={this.state.offsetX} defaultY={120} stageDimensions={Consts.STAGE_DIMENSIONS} itemId={1}/>
                <Cloud defaultX={200} offsetX={this.state.offsetX} defaultY={135} stageDimensions={Consts.STAGE_DIMENSIONS} itemId={2} />
                <Cloud defaultX={370} offsetX={this.state.offsetX} defaultY={115} stageDimensions={Consts.STAGE_DIMENSIONS} itemId={3} />
                <Cloud defaultX={540} offsetX={this.state.offsetX} defaultY={140} stageDimensions={Consts.STAGE_DIMENSIONS} itemId={4} />
                <Cloud defaultX={720} offsetX={this.state.offsetX} defaultY={110} stageDimensions={Consts.STAGE_DIMENSIONS} itemId={5} />
            </Layer>            
        );
    }
}

export default CloudsLayer;
