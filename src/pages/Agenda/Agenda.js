import React, { Component } from "react"
import HeaderPage from "../../components/organisms/HeaderPage"

class Agenda extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active_tab: 'day-1',
			agenda: [
				{
					id: 'day-1',
					date: 'March, 21st',
					topics: [
						{
							time: '08:00',
							title: 'Start Exploring TensorFlow.js',
							speaker: 'Alamanda Shantika'
						},
						{
							time: '09:00',
							title: 'Start Exploring TensorFlow.js',
							speaker: 'Muh. Rahmatullah'
						},
					]
				},
				{
					id: 'day-2',
					date: 'March, 22st',
					topics: [
						{
							time: '09:00',
							title: 'Jetpack Compose: Modern UI Framework in Android',
							speaker: 'Muh. Rahmatullah'
						}
					]
				},
			]
		}
	}

	render() {
		return (
			<div>
				<HeaderPage title="Agenda" subtitle="Our lineup of big thinkers and even bigger doers." />
				<div className="tab">
					<div className="container">
						{this.state.agenda.map(item => (
							<span
								onClick={() => this.setState({ active_tab: item.id })}
								class={`tab-link ${(this.state.active_tab === item.id) ? 'active' : ''}`}>
								{item.date}
							</span>
						))}
					</div>
				</div>

				{this.state.agenda.map(item => {
					if (this.state.active_tab === item.id) {
						return (
							<div className="list container py-60">
								{item.topics.map(topic => (
									<div className="list-item row p-30">
										<div className="font-size-normal pr-20">{topic.time}</div>
										<div>
											<div className="font-size-normal font-bold pb-10">{topic.title}</div>
											<em className="font-size-normal">{topic.speaker}</em>
										</div>
									</div>
								))}
							</div>
						)
					}
				})}
			</div>
		);
	}
}

export default Agenda;
