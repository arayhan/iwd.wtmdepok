import React from "react";
import { Link } from "react-router-dom";

const PartnerItem = props => {
	return (
		<Link
			to={props.url}
			className="partner-item row align-center justify-center w-min-150 p-20"
		>
			<img src={props.image} alt={props.alt} />
		</Link>
	);
};

export default PartnerItem;
