import React from "react";
import WTMLogo from "../assets/images/logo/wtm-logo.png";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="row align-center">
					<div>
						<div className="mb-10 font-bold font-size-title-normal color-font-text-primary">
							International Women's Day 2019
						</div>
						<div className="font-bold font-size-title-normal color-font-secondary">
							Lift as you Climb
						</div>
						<p className="color-font-text-secondary">
							International Women's Day is celebrated by WomenTechmaker all over
							the world to celebrate women in technology. WTM creates
							visibility, community and resources for women by hosting events
							which includes technical as well as motivational and managerial
							sessions. These events are organized with a spirit to support each
							and every woman in your surrounding and lift them up as you climb
							your success ladder.
						</p>
					</div>
					<div>
						<img src={WTMLogo} alt="WTM Logo" className="w-full w-100" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
