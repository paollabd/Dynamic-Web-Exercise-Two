import React from 'react';

export default function PageWrapper({cloudy = 100, children}) {
	const wrapperOpacity = cloudy ? (cloudy * 0.01) : 0;
	const redValue = ((cloudy + 1)/100) * 255;
	const greenValue = ((cloudy + 1)/100) * 255;
	const blueValue = ((cloudy + 1)/100) * 255;

	return (
		<div style={{
			height: '100%',
			width: '100%',
			minHeight: '100vh',
			minWidth: '100vw',
			backgroundColor: `rgba(${redValue},${greenValue},${blueValue},${wrapperOpacity})`
		}}>
		  {children}
		</div>
	)
}