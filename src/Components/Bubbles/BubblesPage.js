import React, {useState, useEffect, useContext} from "react";
import DateTime from "../form/DateTime";
import MyResponsiveBubble from "../form/MyResponsiveBubble";
import {kdTree} from "kd-tree-javascript/kdTree"
import MyBubble from "../form/myBubble";
import {Button} from "@material-ui/core";

const BubblesPage = () => {
	const [startDate, setStartDate] = useState(new Date(Date.now() - 24 * 60 * 60 * 1000));
	const [endDate, setEndDate] = useState(new Date());
	const [radius, setRadius] = useState(0.1);
	const [points, setPoints] = useState(null);
	const [clusters, setClusters] = useState(null);
	const [nivoData, setNivoData] = useState(null);
	const [embeddings, setEmbeddings] = useState();

	useEffect(() => {
		/*let currentPoints = [];
		for (let i = 0; i < 100; i++) {
			let point = {
				text: "Robot_" + (i * 10),
				axes: [],
				cluster: 0
			};

			for (let j = 0; j < 4; j++) {
				point["axes"].push(Math.floor(Math.random() * 5));
			}
			currentPoints.push(point);
		}
		setPoints(currentPoints)*/
		const root = require('../../clusters.json')
		let clusters = Object.values(root);
		let unique_clusters = [...new Set(Object.values(clusters))].map((value) => {
			return {
				"name": value,
				"children": []
			}
		});

		Object.entries(root).map(([k, v]) => {
			unique_clusters[v].children.push({
				"name": k,
				"loc": 10
			})
		});
		const result_clusters = {
			"name": "nivo",
			"children": unique_clusters
		}
		setPoints(result_clusters)

	}, [])



	return (
		<div>
			<MyResponsiveBubble root={points}/>
		</div>
	)
}

export default BubblesPage;