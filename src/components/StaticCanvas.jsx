import React, { Fragment, useEffect, useState, useRef } from 'react';
import colors from '../assets/colors';
import baseSrc from '../images/butterfly-silky-base.png';
import baseShadeSrc from '../images/butterfly-silky-base-shade.png';
import underbellySrc from '../images/butterfly-silky-underbelly.png';
import underbellyShadeSrc from '../images/butterfly-silky-underbelly-shade.png';
import lineSrc from '../images/butterfly-silky-line.png';

const StaticCanvas = (props) => {

	const [mainColor, setMainColor] = useState(null);
	const [markingColor, setMarkingColor] = useState(null);

	const c1 = useRef(null);
	const c2 = useRef(null);
	const c3 = useRef(null);
	const c4 = useRef(null);
	const c5 = useRef(null);

	useEffect(() => {
		if (!mainColor || !markingColor) {
		generate()
		}
	}, [mainColor, markingColor]);

	const generate = () => {
		let color1 = colors[Math.floor(Math.random() * colors.length)]
		let color2 = colors[Math.floor(Math.random() * colors.length)]
		setMainColor(color1);
		setMarkingColor(color2)

		console.log('generate')
		let baseColor = `rgb(${color1.base[0]},${color1.base[1]},${color1.base[2]})`;
		let baseColorShade = `rgb(${color1.line[0]},${color1.line[1]},${color1.line[2]})`;
		let underbellyColor = `rgb(${color2.base[0]},${color2.base[1]},${color2.base[2]})`;
		let underbellyColorShade = `rgb(${color2.line[0]},${color2.line[1]},${color2.line[2]})`;
		let lineColor = '#05022D';

		let canvas = c1.current;
		let canvas2 = c2.current;
		let canvas3 = c3.current;
		let canvas4 = c4.current;
		let canvas5 = c5.current;

		let ctx = canvas.getContext('2d');
		let ctx2 = canvas2.getContext('2d');
		let ctx3 = canvas3.getContext('2d');
		let ctx4 = canvas4.getContext('2d');
		let ctx5 = canvas5.getContext('2d');

		loadImage(baseSrc, ctx, baseColor);
		loadImage(baseShadeSrc, ctx2, baseColorShade);
		loadImage(underbellySrc, ctx3, underbellyColor);
		loadImage(underbellyShadeSrc, ctx4, underbellyColorShade);
		loadImage(lineSrc, ctx5, lineColor);
	};

	const loadImage = (src, ctx, color) => {
		let image = new Image();
		image.src = src;
		image.onload = () => {
			ctx.clearRect(0, 0, image.width, image.height);
			ctx.globalCompositeOperation = 'source-over';
			ctx.drawImage(image, 0, 0, ctx.width, ctx.height);

			ctx.fillStyle = color;
			ctx.fillRect(0, 0, image.width, image.height);

			// clip
			ctx.globalCompositeOperation = 'destination-in';
			ctx.drawImage(image, 0, 0, image.width, image.height);

			// reset comp. mode to default
			ctx.globalCompositeOperation = 'source-over';
		};
	};

	return (
		<Fragment>
				<canvas
					className="main__canvas--c1"
					ref={c1}
					width={200}
					height={200}
				></canvas>
				<canvas
					className="main__canvas--c2"
					ref={c2}
					width={200}
					height={200}
				></canvas>
				<canvas
					className="main__canvas--c3"
					ref={c3}
					width={200}
					height={200}
				></canvas>
				<canvas
					className="main__canvas--c4"
					ref={c4}
					width={200}
					height={200}
				></canvas>
				<canvas
					className="main__canvas--c5"
					ref={c5}
					width={200}
					height={200}
				></canvas>
		</Fragment>
	);
};

export default StaticCanvas
