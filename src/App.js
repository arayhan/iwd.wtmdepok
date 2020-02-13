import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import PartnerItem from "./components/PartnerItem";
import ItemSession from "./assets/images/icons/street-view-500.png";
import ItemNetworking from "./assets/images/icons/workspace-500.png";
import GDGDepokLogo from "./assets/images/logo/gdgdepok-logo.png";
import WTMLogo from "./assets/images/logo/wtm-logo-horizontal.png";
import "./styles/app.scss";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Header />

			<div className="bg-section-grey py-60">
				<div className="container">
					<div className="font-size-title-normal color-font-text-title">
						What you need to know, before you ask
					</div>
					<p className="color-font-text-primary">
						Honouring this Women’s day, Women Techmakers - an initiative taken
						by Google, is back to Break the Taboos of Women not being
						technically sound and accentuating the brilliance of every
						successful women in technology. This year, we’re organising the
						third edition in Depok and Jakarta as a part of the special event of
						The Women Techmakers Global Event Series - IWD'20. So, all the
						technical ladies from Depok and Jakarta get ready to witness one of
						the most power packed event of 2020!
					</p>
				</div>
			</div>
			<div className="py-60">
				<div className="container">
					<div className="row col-md align-center">
						<div className="col align-center font-center mr-10 mr-md-0 mb-md-20">
							<img src={ItemSession} className="w-150" alt="item session" />
							<div className="font-size-large font-bold">Sessions</div>
							<p className="font-size-small">
								5 knowledgeable sessions, dedicated to Android, Web, Graphic
								designing and Quality Assurance.
							</p>
						</div>
						<div className="col align-center font-center">
							<img src={ItemNetworking} className="w-150" alt="item session" />
							<div className="font-size-large font-bold">Networking</div>
							<p className="font-size-small">
								Best place to meet technical people and learn something new..!
								Grow your network by interacting with them.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-section-grey py-60">
				<div className="container">
					<div className="font-size-title-normal mb-30">Partners</div>
					<div className="row-wrap">
						<PartnerItem url="/" image={WTMLogo} alt="GDG Depok Logo" />
						<PartnerItem url="/" image={WTMLogo} alt="GDG Depok Logo" />
						<PartnerItem url="/" image={WTMLogo} alt="GDG Depok Logo" />
						<PartnerItem url="/" image={WTMLogo} alt="GDG Depok Logo" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
