import React from "react";
import { Link } from "react-router-dom";

const PartnerItem = props => {
	return (
		<Link
			to={props.url}
			className="partner-item row flex-1 align-center justify-center w-max-250 py-20 px-20 mr-15 mb-15"
		>
			<img src={props.image} className="w-200" alt={props.alt} />
		</Link>
	);
};

export default PartnerItem;
