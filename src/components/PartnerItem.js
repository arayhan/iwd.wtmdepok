import React from "react";
import { Link } from "react-router-dom";

const PartnerItem = props => {
	return (
		<Link
			to={props.url}
			className="partner-item row align-center justify-center w-min-200 w-max-200 m-5 p-20"
		>
			<img src={props.image} alt={props.alt} />
		</Link>
	);
};

export default PartnerItem;
