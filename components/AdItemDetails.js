/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/dist/client/image';
import { ads, users } from '../../data';
const AddDetails = (props) => {
	console.log('Details =', props);
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
	} = props.ad;

	const [image, setImage] = React.useState(images[0]);

	const findUser = users.find((user) => user.id === userId);
	const { name, phone, address } = findUser && findUser;

	const handleImage = (e) => {
		setImage(e.target.src);
		console.log(e.target.src);
	};
	return (
		<Layout>
			<div className='flex flex-col items-center justify-center space-x-6 md:flex-row'>
				{/* start Image Container */}
				<div className='flex flex-col justify-center w-2/4 p-2 space-y-2 bg-gray-200 rounded-md shadow-md'>
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

				<div className='w-2/4 space-y-4 '>
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
		</Layout>
	);
};

export default AddDetails;

export function getStaticPaths() {
	return {
		paths: [{ params: { id: '1' } }],
		fallback: true,
	};
}

export async function getStaticProps(context) {
	const { id } = await context.params;
	const res = await fetch(`http://localhost:3000/api/ads/${id}`);
	const ad = await res.json();
	return {
		props: {
			ad: ad,
		},
	};
}
