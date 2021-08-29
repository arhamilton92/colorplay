/** @format */

import React, { Fragment } from 'react';

const Button = (props) => {
	const { click } = props

	const handleClick = () => [
		click(true)
	]
	
	return (
		<Fragment>
			<button className="main__button" onClick={handleClick}>BUTTON</button>
		</Fragment>
	);
};

export default Button;
