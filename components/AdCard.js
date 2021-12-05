import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const AdCard = ({ ad }) => {
	const { id, title, category, price, images, subCategory, userId } = ad;
	const shortTitle = title.length > 20 ? title.substring(0, 8) + '...' : title;

	const router = useRouter();

	const handleClick = () => {
		router.push(`/ad/${id}`);
	};

	return (
		<div
			className='flex items-center justify-center w-9/12 h-40 p-4 space-x-4 bg-white rounded-lg shadow-md cursor-pointer lg:w-72'
			onClick={handleClick}
		>
			<div>
				<Image
					src={images[0]}
					alt='ad'
					width={120}
					height={100}
					className='rounded-md'
				/>
			</div>
			<div className='space-y-2'>
				<h3 className='text-xl font-semibold '>{shortTitle}</h3>
				<p className='text-gray-600'>{`${category} , ${subCategory}`}</p>
				<p className='font-semibold text-green-500'>{price}</p>
			</div>
		</div>
	);
};

export default AdCard;
