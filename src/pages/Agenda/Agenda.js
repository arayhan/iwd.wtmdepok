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
					date: 'Saturday, May 9th',
					topics: [
						{
							time: '13:40',
							title: 'Preparation',
						},
						{
							time: '14:00',
							title: 'Welcoming from WTM Ambassadors',
						},
						{
							time: '14:10',
							title: 'Keynote: Self Promotion - Know Your Worth and Ask for It',
							speaker: 'Prelo Indonesia - Fransiska P.W. Hadiwidjana'
						},
						{
							time: '14:40',
							title: 'Break',
						},
						{
							time: '14:50',
							title: 'Tech Talk: Data - GCP Big Query',
							speaker: 'OVO - Florentin Anggraini Purnama'
						},
						{
							time: '15:20',
							title: 'Closing',
						},
					]
				},
				{
					id: 'day-2',
					date: 'Sunday, May 10th',
					topics: [
						{
							time: '13:40',
							title: 'Preparation',
						},
						{
							time: '14:00',
							title: 'Day 1 Recap',
						},
						{
							time: '14:10',
							title: 'Keynote : Mental Wellness - Fighting Impostor Syndrome',
							speaker: 'Lady Noor Chita Mawardi (Co-founder IBUNDA.ID)'
						},
						{
							time: '14:40',
							title: 'Break',
						},
						{
							time: '14:50',
							title: 'Tech Talk: Data - Data Driven vs Data Centric',
							speaker: 'Bukalapak, Fatia Kusuma Dewi'
						},
						{
							time: '15:20',
							title: 'Break',
						},
						{
							time: '15:30',
							title: 'Tech Talk: Product - Agile Product Management',
							speaker: 'Traveloka, Tania Soerianto'
						},
						{
							time: '16:00',
							title: 'Closing',
						},
					]
				},
				{
					id: 'day-3',
					date: 'Saturday, May 16th',
					topics: [
						{
							time: '13:40',
							title: 'Preparation',
						},
						{
							time: '14:00',
							title: 'Day 2 Recap',
						},
						{
							time: '14:10',
							title: 'Keynote : Community Contribution - Pay it Forward by Contributing to Community',
							speaker: 'Gojek - Nadine Siregar'
						},
						{
							time: '14:40',
							title: 'Break',
						},
						{
							time: '14:50',
							title: 'Male Allies - Women Empowerment Through Technology',
							speaker: 'Halosis - Andrew Darmadi'
						},
						{
							time: '15:20',
							title: 'Break',
						},
						{
							time: '15:30',
							title: 'Tech Talk: Data - Using Google Analytics to make your instagram more engaging',
							speaker: 'Pintek - Siti Nurlaelasari'
						},
						{
							time: '16:00',
							title: 'Closing',
						},
					]
				},
				{
					id: 'day-4',
					date: 'Sunday, May 17th',
					topics: [
						{
							time: '13:40',
							title: 'Preparation',
						},
						{
							time: '14:00',
							title: 'Day 3 Recap',
						},
						{
							time: '14:10',
							title: 'Keynote : Self Confidence - The Truth: Self-Confidence Isn\'t Only About You',
							speaker: 'Pintek - Deany Jaghdour'
						},
						{
							time: '14:40',
							title: 'Break',
						},
						{
							time: '14:50',
							title: 'Tech Talk : TensorFlow - A Whirlwind Tour of Machine Learning with TensorFlow',
							speaker: 'Gojek, Galuh Sahid'
						},
						{
							time: '15:20',
							title: 'Break',
						},
						{
							time: '15:30',
							title: 'Tech Talk : Product',
							speaker: 'Stoqo - Vina Zerlina'
						},
						{
							time: '16:00',
							title: 'Speed mentoring, mock interview',
						},
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
		)
	}
}

export default Agenda
