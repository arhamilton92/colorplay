/** @format */

import React, { Fragment } from 'react';

const Button = (props) => {
	const { click } = props

	const handleClick = () => [
		click(true)
	]
	
	return (
		<Fragment>
			<button className="main__button btn" onClick={handleClick}>NEW DRAGON</button>
		</Fragment>
	);
};

export default Button;
