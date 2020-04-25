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

				<div className="container py-60">
					{this.state.active_tab === 'day-1' &&
						<div>Day 1</div>
					}

					{this.state.active_tab === 'day-2' &&
						<div>Day 2</div>
					}
				</div>
			</div>
		);
	}
}

export default Agenda;
