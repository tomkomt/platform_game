import React, { Component } from 'react';
import {Rect} from 'react-konva';
import Consts from '../data/consts';

class Cloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.defaultX,
            y: this.props.defaultY
        };
    }

    componentWillReceiveProps(nextProps) {
        let newX = this.state.x;
        let newY = this.state.y;
        let positionLimits = {
            x: [0 - Consts.CLOUD_DIMENSIONS.width, this.props.stageDimensions.width]
        };

        switch(nextProps.direction) {
            case Consts.DIRECTIONS.right:
                newX -= nextProps.moveX;
                if(newX <= positionLimits.x[0]) {
                    newX = this.props.stageDimensions.width;
                }
            break;

            default:
            break;
        }

        this.setState({
            x: newX,
            y: newY
        });
    }

	render() {
		return (
            <Rect x={this.state.x} y={this.state.y} width={Consts.CLOUD_DIMENSIONS.width} height={Consts.CLOUD_DIMENSIONS.height} fill={"white"} shadowBlur={0} />
		);
	}
}

export default Cloud;
