import React, { useState } from 'react';
import { BMIContext } from './bmiContext';

export const BMIProvider = ({ children }) => {
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [bmi, setBMI] = useState(0);

	const calculateBMI = () => {
		if (height && weight) {
			const heightInMeters = parseFloat(height) / 100;
			const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
			setBMI(bmiValue.toFixed(2));
		} else {
			setBMI(null);
		}
	};

	return (
		<BMIContext.Provider
			value={{
				height,
				setHeight,
				weight,
				setWeight,
				bmi,
				calculateBMI,
				setBMI
			}}
		>
			{children}
		</BMIContext.Provider>
	);
};