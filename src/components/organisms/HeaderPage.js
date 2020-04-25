import React, { Component } from 'react';

class HeaderPage extends Component {
	render() {
		const { title, subtitle } = this.props

		return (
			<header>
				<div div className="container" >
					<div className="py-60">
						<div className="font-bold font-size-title-small color-font-text-primary">{title}</div>
						<div className="font-size-large color-font-text-primary pt-15">{subtitle}</div>
					</div>
				</div >
			</header >
		);
	}
}

export default HeaderPage;
