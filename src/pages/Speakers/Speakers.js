import React, { Component } from "react"
import HeaderPage from "../../components/organisms/HeaderPage"
import SuryaFirdaus from "../../assets/images/speakers/surya-firdaus.jpg"

class Speakers extends Component {
	constructor(props) {
		super(props)
		this.state = {
			speakers: [
				{
					name: 'Surya Firdaus',
					photo: SuryaFirdaus,
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
				{
					name: 'Surya Firdaus',
					photo: SuryaFirdaus,
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
			],
		}
	}

	render() {
		return (
			<div>
				<HeaderPage title="Speakers" subtitle="Our lineup of big thinkers and even bigger doers." />
				<div className="container py-60">
					<div className="row">
						{this.state.speakers.map(speaker => (
							<div>
								<img src={speaker.photo} alt={speaker.name} />
								<div className="font-size-normal">Surya Firdaus</div>
								<div className="row">
									<a href={speaker.social_media.facebook} target="blank">
										<i class="fab fa-facebook-f"></i>
									</a>
									<a href={speaker.social_media.facebook} target="blank">
										<i class="fab fa-instagram"></i>
									</a>
									<a href={speaker.social_media.facebook} target="blank">
										<i class="fab fa-meetup"></i>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Speakers;
