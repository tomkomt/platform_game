import React, { Component } from 'react';
import {Rect} from 'react-konva';

class Sky extends Component {
	render() {
		return (
            <Rect x={0} y={0} width={this.props.width} height={this.props.height} fill={"skyblue"} shadowBlur={0} />
		);
	}
}

export default Sky;
