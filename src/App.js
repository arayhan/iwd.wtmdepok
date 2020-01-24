import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
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
						third edition in Indore as a part of the special event of The Women
						Techmakers Global Event Series - IWD'19. So, all the technical
						ladies from Indore get ready to witness one of the most power packed
						event of 2019!
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
