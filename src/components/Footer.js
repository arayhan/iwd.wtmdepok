import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-grey-lighten-2 p-20">
			<div className="copyright font-center pb-20">
				&copy; 2019 WTM | All Rights Reserved
			</div>
			<div className="row justify-center">
				<Link className="mx-10 p-10 color-font-text-primary">
					<i class="fab fa-facebook-f"></i>
				</Link>
				<Link className="mx-10 p-10 color-font-text-primary">
					<i class="fab fa-instagram"></i>
				</Link>
				<Link className="mx-10 p-10 color-font-text-primary">
					<i class="fab fa-meetup"></i>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
