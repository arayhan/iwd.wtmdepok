import React, { Component } from "react"
import HeaderPage from "../../components/organisms/HeaderPage"

class Agenda extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active_tab: 'day-1'
		}
	}

	render() {
		return (
			<div>
				<HeaderPage title="Agenda" subtitle="Our lineup of big thinkers and even bigger doers." />
				<div className="tab">
					<div className="container">
						<span
							onClick={() => this.setState({ active_tab: 'day-1' })}
							class={`tab-link ${(this.state.active_tab === 'day-1') ? 'active' : ''}`}>
							May 21st
						</span>
						<span
							onClick={() => this.setState({ active_tab: 'day-2' })}
							class={`tab-link ${(this.state.active_tab === 'day-2') ? 'active' : ''}`}>
							May 22st
						</span>
					</div>
				</div>

				{this.state.active_tab === 'day-1' &&
					<div className="list container py-60">
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Start Exploring TensorFlow.js</div>
								<em className="font-size-normal">Alamanda Shantika</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Start Exploring TensorFlow.js</div>
								<em className="font-size-normal">Alamanda Shantika</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Start Exploring TensorFlow.js</div>
								<em className="font-size-normal">Alamanda Shantika</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Start Exploring TensorFlow.js</div>
								<em className="font-size-normal">Alamanda Shantika</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Start Exploring TensorFlow.js</div>
								<em className="font-size-normal">Alamanda Shantika</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Start Exploring TensorFlow.js</div>
								<em className="font-size-normal">Alamanda Shantika</em>
							</div>
						</div>
					</div>
				}

				{this.state.active_tab === 'day-2' &&
					<div className="list container py-60">
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">09:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Jetpack Compose: Modern UI Framework in Android</div>
								<em className="font-size-normal">Muh. Rahmatullah</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Jetpack Compose: Modern UI Framework in Android</div>
								<em className="font-size-normal">Muh. Rahmatullah</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Jetpack Compose: Modern UI Framework in Android</div>
								<em className="font-size-normal">Muh. Rahmatullah</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Jetpack Compose: Modern UI Framework in Android</div>
								<em className="font-size-normal">Muh. Rahmatullah</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Jetpack Compose: Modern UI Framework in Android</div>
								<em className="font-size-normal">Muh. Rahmatullah</em>
							</div>
						</div>
						<div className="list-item row pb-40">
							<div className="font-size-normal pr-20">08:00</div>
							<div>
								<div className="font-size-normal font-bold pb-10">Jetpack Compose: Modern UI Framework in Android</div>
								<em className="font-size-normal">Muh. Rahmatullah</em>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default Agenda;
