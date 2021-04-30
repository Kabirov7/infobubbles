import React, {useState, useEffect, useContext} from "react";
import DateTime from "../form/DateTime";
import MyResponsiveBubble from "../form/MyResponsiveBubble";
import {kdTree} from "kd-tree-javascript/kdTree"
import MyBubble from "../form/myBubble";
import {Button} from "@material-ui/core";

const createKDTree = require("static-kdtree")
const axios = require('axios');
// var httpsAgent = require('https-agent');
var fs = require('fs');
const https = require('https');
const root = require('../../bubble_data_comments.json')

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
		const root = require('../../bubble_data_comments.json')
		console.log(root)
		setPoints(root)

	}, [])

	/*useEffect(() => {
		if (points) {

			let curr_embeddings = points.map(el => el["axes"])
			const kdTree = createKDTree(curr_embeddings)

			let neighbors = []
			points.forEach((el, i) => {

				let cluster = []
				kdTree.rnn(el["axes"], radius, point => {
					cluster.push(point)
				})

				neighbors.push(cluster)
			})

			let exist_indexes = []
			let current_clusters = []
			neighbors.forEach((el, i) => {
				let cluster = []

				if (el.length > 1) {

					el.forEach(dot => {
						if (!exist_indexes.includes(dot)) {
							cluster.push(dot);
							exist_indexes.push(dot)
						}

						let sub_cluster = []
						kdTree.rnn(points[dot]["axes"], radius, point => {
							sub_cluster.push(point)
						})

						sub_cluster.forEach(sec_dot => {
							if (!exist_indexes.includes(sec_dot)) {
								cluster.push(sec_dot)
								exist_indexes.push(sec_dot)
							}
						})
					})

					if (cluster != [] && cluster.length > 1) {
						const finally_cluster = new Set(cluster);
						current_clusters.push(finally_cluster)
						finally_cluster.forEach(value => {
							points[value]["cluster"] = i
						})
					}
				}
			})

			setClusters(current_clusters)
		}

	}, [points])*/

	/*useEffect(() => {
		if (clusters) {
			let labels = {}
			let clusters_forNivo = clusters.map((cluster, i) => {
				let current_cluster = [...cluster];
				let cluster_num = points[current_cluster[0]]['cluster'];
				labels[cluster_num] = [];

				current_cluster.map(point_index => {
					let current_point = points[point_index];
					let label = {
						name: current_point['text'],
						loc: 13
					}
					labels[cluster_num].push(label)
				})

				return {name: `Theme #${i}`, children: labels[cluster_num]}//, children
			})
			const nivo_data = {
				name: "nivo",
				children: clusters_forNivo
			}

			setNivoData(nivo_data)
			console.log("NIVO!",nivo_data)
		}
	}, [clusters])*/

/*	const sendRequest = () => {
		const formData = {
			method: 'POST',
			headers: {'content-type': 'application/javascript'},
			body: {
				radius: 1,
				sentences: ["супервыгодный интернет", "президент кыргызстана"],
				table: "politics"
			}
		}

		const agent = new https.Agent({
			rejectUnauthorized: false
		});
		axios.post('https://lukoshkoapi.kloop.io/api/v1/text_range_search/', formData.body, {httpsAgent: agent});
	}
*/

	const returnStartDate = (date) => {
		setStartDate(date)
	}

	const returnEndDate = (date) => {
		setEndDate(date)
	}


	return (
		<div>
			{/*<div>
				<h1>Start</h1>
				<Button variant='contained' color='secondary' onClick={() => sendRequest()}>SendRequest</Button>
				<DateTime
					dateLabel={"Выберите дату начала"}
					timeLabel={"Выберите время начала"}
					returnAnswer={returnStartDate}
					date={startDate}/>
				<h1>End</h1>
				<DateTime
					dateLabel={"Выберите дату конца"}
					timeLabel={"Выберите время конца"}
					returnAnswer={returnEndDate}
					date={endDate}/>
			</div>*/}
			<MyResponsiveBubble root={root}/>

		</div>
	)
}

export default BubblesPage;