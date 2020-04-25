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
					description: 'Frontend Developer at Buka Lapak',
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
				{
					name: 'Prasetya Dwi Cahya',
					photo: 'https://devfest-depok.firebaseapp.com/images/speakers/prasetya-dwi-cahya.jpg',
					description: 'Head of Data Science Indonesia',
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
				{
					name: 'Yong Shean',
					photo: 'https://devfest-depok.firebaseapp.com/images/speakers/yong-shean.jpeg',
					description: 'Frontend Developer, Commerce Solutions',
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
				{
					name: 'Prasetya Dwi Cahya',
					photo: 'https://devfest-depok.firebaseapp.com/images/speakers/prasetya-dwi-cahya.jpg',
					description: 'Head of Data Science Indonesia',
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
				{
					name: 'Muh. Rahmatullah',
					photo: 'https://devfest-depok.firebaseapp.com/images/speakers/muh-rahmatullah.jpg',
					description: 'Software Engineer - Android, Grab',
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
				{
					name: 'Yong Shean',
					photo: 'https://devfest-depok.firebaseapp.com/images/speakers/yong-shean.jpeg',
					description: 'Frontend Developer, Commerce Solutions',
					social_media: {
						facebook: 'https://bit.ly/CRA-PWA',
						twitter: 'https://twitter.com'
					}
				},
				{
					name: 'Surya Firdaus',
					photo: SuryaFirdaus,
					description: 'Frontend Developer at Buka Lapak',
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
					<div className="row-wrap justify-center">
						{this.state.speakers.map(speaker => (
							<div className="card row col align-center justify-between border-1-grey">
								<div className="row col align-center mb-20">
									<div className="img-circle w-150 h-150 mb-10">
										<img src={speaker.photo} alt={speaker.name} />
									</div>
									<div className="font-size-large color-font-text-title font-bold font-center pb-10">{speaker.name}</div>
									<div className="font-size-small color-font-text-secondary font-center">{speaker.description}</div>
								</div>
								<div className="row justify-center">
									<a className="color-font-text-primary px-5 mx-10" href={speaker.social_media.facebook} target="blank">
										<i class="fab fa-facebook-f"></i>
									</a>
									<a className="color-font-text-primary px-5 mx-10" href={speaker.social_media.facebook} target="blank">
										<i class="fab fa-instagram"></i>
									</a>
									<a className="color-font-text-primary px-5 mx-10" href={speaker.social_media.facebook} target="blank">
										<i class="fab fa-linkedin"></i>
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
