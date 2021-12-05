import React from 'react';
import AutoComplete from '../components/AutoComplete';
const mobileBrands = [
	'Samsung',
	'Apple',
	'Huawei',
	'Xiaomi',
	'LG',
	'Motorola',
	'Nokia',
	'Sony',
	'HTC',
	'Vivo',
	'Oppo',
	'Asus',
	'Blackberry',
	'Alcatel',
];

const Auto = () => {
	const [brand, setBrand] = React.useState('');
	const [model, setModel] = React.useState('');
	console.log(brand);
	console.log(model);
	return (
		<div>
			<AutoComplete
				mobileBrands={mobileBrands}
				laval={'Brand'}
				placeholder={'Brand'}
				search={brand}
				setSearch={setBrand}
			/>
			<AutoComplete
				mobileBrands={mobileBrands}
				laval={'Model'}
				placeholder={'Model'}
				search={model}
				setSearch={setModel}
			/>
		</div>
	);
};

export default Auto;
