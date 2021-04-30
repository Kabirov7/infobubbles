// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/circle-packing
import {ResponsiveBubble} from '@nivo/circle-packing'
import React from "react";

const MyResponsiveBubble = (props) => {

	const {root} = props
	console.log(root)

	return <div  style={{height: "900px", width: "100%"}}>

		<ResponsiveBubble
			style={{width: "100%", height: "100%"}}
			root={root}
			margin={{top: 20, right: 20, bottom: 20, left: 20}}
			identity="name"
			value="loc"
			colors={{scheme: 'nivo'}}
			padding={3}
			labelTextColor={{from: 'color', modifiers: [['darker', 0.8]]}}
			borderWidth={1}
			defs={[
				{
					id: 'lines',
					background: 'none',
					color: 'inherit',
					spacing: 5
				}
			]}
			fill={[{match: {depth: 1}, id: 'lines'}]}
			animate={false}
			motionStiffness={40}
			motionDamping={3}
		/>
	</div>

}

export default MyResponsiveBubble;