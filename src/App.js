import React, { Component } from 'react';
import keydown from 'react-keydown';
import { Stage, Layer } from 'react-konva';
import Consts from './data/consts';
import TilesAPI from './api/TilesAPI';
import Sky from './components/Sky';
import CloudsLayer from './components/CloudsLayer';
import TilesLayer from './components/TilesLayer';
import PlayerLayer from './components/PlayerLayer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			keyEvent: ''
		}
		TilesAPI.setTilesDataLock(false);
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
				<TilesLayer keyEvent={this.state.keyEvent}/>
				<PlayerLayer keyEvent={this.state.keyEvent}/>
			</Stage>
		);
	}
}

export default keydown(App);

				// <Layer x={this.state.offsetX} y={0}>
				// 	{tiles}
				// </Layer>
				// <Layer x={this.state.offsetX} y={0}>
				
				// </Layer>


