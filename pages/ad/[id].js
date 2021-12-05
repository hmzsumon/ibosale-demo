import React from 'react';
import { adsData, users } from '../../data';
import Image from 'next/dist/client/image';

const AdDetail = ({ ad }) => {
	const {
		brand,
		condition,
		date,
		description,
		edition,
		features,
		images,
		model,
		price,
		title,
		userId,
	} = ad;

	const [image, setImage] = React.useState(images[0]);

	const findUser = users.find((user) => user.id === userId);
	const { name, phone, address } = findUser && findUser;

	const handleImage = (e) => {
		setImage(e.target.src);
		console.log(e.target.src);
	};
	return (
		<div className='flex flex-col items-center justify-center space-x-6 md:flex-row'>
			{/* start Image Container */}
			<div className='flex flex-col justify-center w-full p-2 space-y-2 bg-gray-200 rounded-md shadow-md lg:w-2/4'>
				<h1 className='font-bold'>{title}</h1>
				<p>{date}</p>
				<div className='w-5/12 mx-auto '>
					<Image
						src={image}
						alt={title}
						width={200}
						height={180}
						layout='responsive'
						className='rounded-lg'
					/>
				</div>
				<div className='flex justify-center w-full p-4 m-auto space-x-2 overflow-x-scroll '>
					{images.map((image, index) => (
						<img
							src={image}
							key={index}
							alt='Img'
							className='w-1/6 rounded-md cursor-pointer'
							onClick={handleImage}
						/>
					))}
				</div>
			</div>
			{/* End Image Container */}

			{/* start Ad Details Container */}

			<div className='w-full space-y-4 lg:w-2/4 '>
				<p className='my-10 text-xl font-semibold text-green-500'>{price}</p>
				<div className='flex space-x-8'>
					<div>
						<p className='font-semibold'>
							Condition: <span className='text-gray-500'>{condition}</span>
						</p>
						<p className='font-semibold'>
							Model: <span className='text-gray-500'>{model}</span>
						</p>
					</div>
					<div>
						<p className='font-semibold'>
							Brand: <span className='text-gray-500'>{brand}</span>{' '}
						</p>
						<p className='font-semibold'>
							Edition: <span className='text-gray-500'>{edition}</span>
						</p>
					</div>
				</div>
				<div className='flex flex-wrap min-w-full space-x-1 '>
					<p className='font-semibold'>Features:</p>
					{features.map((feature, index) => (
						<p key={index} className='text-gray-500'>
							{' '}
							{feature},
						</p>
					))}
				</div>
				<div>
					<p className='font-semibold'>
						Description: <span className='text-gray-500'>{description}</span>
					</p>
				</div>
				<div>
					<p className='font-medium'>
						{' '}
						Posted By:{' '}
						<span className='text-gray-500'>{`${name}, ${address.city}`}</span>
					</p>
					<p className='font-medium'>
						{' '}
						Phone No: <span className='text-gray-500'>{phone}</span>
					</p>
				</div>
			</div>
			{/* End Ad Details Container */}
		</div>
	);
};

export async function getStaticPaths() {
	const ids = adsData.map((ad) => ad.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const id = context.params.id;
	const ad = adsData.find((ad) => ad.id === parseInt(id));
	// console.log(ad);
	return {
		props: {
			ad,
		},
	};
}

export default AdDetail;
