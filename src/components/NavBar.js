import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import Ripples from "react-ripples";

export class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuActive: false
		};
	}

	render() {
		let { isMenuActive } = this.state;

		return (
			<nav>
				<div className="container">
					<div className="row justify-between align-center">
						<Link className="logo">IWD</Link>
						<div
							className={isMenuActive ? "backdrop active" : "backdrop"}
							onClick={() => this.setState({ isMenuActive: !isMenuActive })}
						></div>
						<div className={isMenuActive ? "menu active" : "menu row"}>
							<Link>Home</Link>
							<Link>Agenda</Link>
							<Link>Speakers</Link>
							<Link>Team</Link>
							<span className="row">
								<Link>
									<i class="fab fa-facebook-f"></i>
								</Link>
								<Link>
									<i class="fab fa-instagram"></i>
								</Link>
								<Link>
									<i class="fab fa-meetup"></i>
								</Link>
							</span>
						</div>
						<button
							className="burger"
							onClick={() => this.setState({ isMenuActive: !isMenuActive })}
						>
							<MaterialIcon icon="dehaze" />
						</button>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
