import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiFillTag } from 'react-icons/ai';
import { BsImageAlt } from 'react-icons/bs';
import AutoComplete from '../../components/AutoComplete';

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

const features = [
	'4G LTE',
	'3G',
	'4G',
	'GSM',
	'Android',
	'Bluetooth',
	'Camera',
	'GPS',
	'HDMI',
	'Headphone',
	'Microphone',
	'MicroSD',
	'NFC',
	'Wifi',
	'USB',
	'VGA',
	'WiFi Direct',
	'WiFi Hotspot',
	'WiMAX',
	'WiFi-R',
	'Dual SIM',
];

const NewAd = () => {
	const [brands, setBrands] = React.useState([]);
	const [brand, setBrand] = React.useState('');
	const [model, setModel] = React.useState('');
	const [edition, setEdition] = React.useState('');
	return (
		<div>
			<div className='h-auto p-4 list-none bg-white rounded-md md:px-8'>
				{/* Header */}
				<div className='items-center justify-between space-y-3 border-b md:flex'>
					<h1 className='text-2xl font-bold text-gray-700'>
						Fill in the details{' '}
					</h1>
					<div className='items-center pb-4 space-y-3 md:flex'>
						<li className='flex items-center font-semibold lg:mr-4'>
							<span className='mr-2 text-2xl text-green-700 '>
								<MdLocationOn />{' '}
							</span>{' '}
							Dhaka
						</li>
						<li className='flex items-center font-semibold'>
							<span className='mr-2 text-2xl text-green-700 '>
								<AiFillTag />{' '}
							</span>{' '}
							Mobile Phones
						</li>
					</div>
				</div>
				{/* Body */}
				<div className='flex flex-col items-center justify-center py-6 mt-10'>
					<div className='w-full px-4 space-y-8 md:w-2/4'>
						<li>
							<span className='font-semibold text-gray-700'>Condition</span>
							<div className='flex w-full mt-2 lg:w-8/12'>
								<label className='items-center flex-1 '>
									<input
										type='radio'
										className='form-radio'
										name='accountType'
										value='personal'
									/>
									<span className='ml-2'>Used</span>
								</label>
								<label className='items-center flex-1 ml-6 '>
									<input
										type='radio'
										className='form-radio'
										name='accountType'
										value='busines'
									/>
									<span className='ml-2'>New</span>
								</label>
							</div>
						</li>
						<li>
							<span className='font-semibold text-gray-700'>Authenticity</span>
							<div className='flex w-full mt-2 lg:w-8/12'>
								<label className='items-center flex-1'>
									<input
										type='radio'
										className='form-radio'
										name='accountType'
										value='personal'
									/>
									<span className='ml-2'>Original</span>
								</label>
								<label className='items-center flex-1 ml-6'>
									<input
										type='radio'
										className='form-radio'
										name='accountType'
										value='busines'
									/>
									<span className='ml-2'>Refurbished</span>
								</label>
							</div>
						</li>
					</div>
				</div>
				{/*Start Brand  */}
				<AutoComplete
					optionsData={mobileBrands}
					laval={'Brand'}
					placeholder={'Brand'}
					search={brand}
					setSearch={setBrand}
				/>
				{/*End Brand  */}

				{/*Start Model  */}
				<AutoComplete
					optionsData={mobileBrands}
					laval={'Model'}
					placeholder={'Model'}
					search={model}
					setSearch={setModel}
				/>
				{/*End Model  */}

				{/*Start Edition  */}

				<div className='flex flex-col items-center justify-center'>
					<div className='w-full px-4 mt-10 space-y-2 md:w-2/4'>
						<label htmlFor='' className='text-gray-600 '>
							Edition (Optional)
						</label>
						<div className='flex overflow-hidden bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'>
							<span className='flex items-center justify-center pl-2'>
								<svg
									className='w-6 h-6 text-gray-600'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
								>
									<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
								</svg>
							</span>
							<input
								type='text'
								value=''
								className='flex-1 py-2 ml-2 focus:outline-none'
								placeholder='Edition'
								onChange={(e) => setEdition(e.target.value)}
							/>
						</div>
					</div>
				</div>

				{/* End Edition */}

				{/*Start Features */}
				<div className='flex flex-col items-center justify-center py-6'>
					<div className='w-full px-4 space-y-2 md:w-2/4'>
						<h1>Features (Optional)</h1>
						<div className='grid grid-cols-2'>
							{features.map((feature, index) => (
								<div key={index} className='flex items-center space-x-2'>
									<input type='checkbox' name='' id='' />
									<label htmlFor=''>{feature}</label>
								</div>
							))}
						</div>
					</div>
				</div>
				{/*End Features */}

				{/*Start Description */}
				<div className='flex flex-col items-center justify-center py-6'>
					<div className='w-full px-4 space-y-2 md:w-2/4'>
						<div className='flex items-center justify-between'>
							<h1>Description </h1>
							<p>0/5000</p>
						</div>
						<textarea
							className='w-full px-2 py-2 border-2 border-gray-300 rounded-md focus:outline-none'
							placeholder='Description'
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>
				</div>
				{/*End Description */}

				{/*Start Price */}
				<div className='flex flex-col items-center justify-center py-6 border-b'>
					<div className='w-full px-4 space-y-2 md:w-2/4'>
						<label htmlFor='' className='text-gray-600 '>
							Price
						</label>
						<div className='flex overflow-hidden bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'>
							<input
								type='text'
								value=''
								className='flex-1 py-2 ml-2 focus:outline-none'
								placeholder='Pick a good price for your product'
								onChange={(e) => setEdition(e.target.value)}
							/>
						</div>
					</div>
				</div>
				{/*End Price */}

				{/*Start Upload Image */}
				<div className='flex flex-col items-center justify-center py-6 border-b'>
					<div className='flex flex-col items-center justify-center w-full px-4 space-y-2 lg:w-9/12'>
						<label htmlFor='' className='text-gray-600 '>
							Add upto 5 photos
						</label>
						<div className='flex flex-wrap items-center gap-2'>
							<div className='flex flex-col items-center justify-center bg-gray-200 rounded-md cursor-pointer h-28 w-28'>
								<BsImageAlt className='w-16 h-8 px-2 py-2 text-3xl bg-gray-100 rounded-sm' />
								<p className='text-gray-500'>Add a photo</p>
							</div>
							<div className='flex flex-col items-center justify-center bg-gray-200 rounded-md cursor-pointer h-28 w-28'>
								<BsImageAlt className='w-16 h-8 px-2 py-2 text-3xl bg-gray-100 rounded-sm' />
								<p className='text-gray-500'>Add a photo</p>
							</div>
							<div className='flex flex-col items-center justify-center bg-gray-200 rounded-md cursor-pointer h-28 w-28'>
								<BsImageAlt className='w-16 h-8 px-2 py-2 text-3xl bg-gray-100 rounded-sm' />
								<p className='text-gray-500'>Add a photo</p>
							</div>
							<div className='flex flex-col items-center justify-center bg-gray-200 rounded-md cursor-pointer h-28 w-28'>
								<BsImageAlt className='w-16 h-8 px-2 py-2 text-3xl bg-gray-100 rounded-sm' />
								<p className='text-gray-500'>Add a photo</p>
							</div>
							<div className='flex flex-col items-center justify-center bg-gray-200 rounded-md cursor-pointer h-28 w-28'>
								<BsImageAlt className='w-16 h-8 px-2 py-2 text-3xl bg-gray-100 rounded-sm' />
								<p className='text-gray-500'>Add a photo</p>
							</div>
						</div>
					</div>
				</div>
				{/* End Upload Image  */}

				{/* Contact Details */}
				<div className='flex flex-col items-center justify-center py-6'>
					<div className='w-full px-4 space-y-2 md:w-2/4'>
						<h1 className='text-2xl font-bold text-gray-800'>
							Contact Details
						</h1>
						<div className='space-y-3'>
							<li>
								<label htmlFor='' className='text-gray-600 '>
									Name
								</label>
								<h3>H.M. Zakaria</h3>
							</li>

							<li>
								<label htmlFor='' className='text-gray-600 '>
									Email
								</label>
								<h3> example@gmail.com </h3>
							</li>
						</div>
						<div>
							<label htmlFor='' className='text-gray-600 '>
								Add phone number{' '}
							</label>
							<div className='flex overflow-hidden bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'>
								<input
									type='text'
									value=''
									className='flex-1 py-2 ml-2 focus:outline-none'
									placeholder='add phone number'
									onChange={(e) => setEdition(e.target.value)}
								/>
							</div>
						</div>
					</div>
				</div>
				{/*End Contact Details */}

				<div className='flex items-center justify-center py-2 '>
					<div className='w-full px-4 space-y-2 md:w-2/4'>
						<button className='py-2 bg-green-500 rounded-md px-7'>
							Post Ad
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewAd;
