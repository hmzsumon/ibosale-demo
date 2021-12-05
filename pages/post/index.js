import React from 'react';
import Image from 'next/image';
import { GrPersonalComputer } from 'react-icons/gr';
import { FcCellPhone, FcHome, FcServices, FcSportsMode } from 'react-icons/fc';
import { AiFillCar } from 'react-icons/ai';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import { GoWatch } from 'react-icons/go';
import { FaIndustry } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { State, City } from 'country-state-city';
import { useRouter } from 'next/router';

const categories = [
	{
		id: 1,
		name: 'Electronics',
		icon: <GrPersonalComputer />,
		sub_categories: [
			'Desktop Computers',
			'Laptops',
			'Laptops & Computer Accessories',
			'Tablets & Accessories',
			'TVs & Home Theater',
			'Cameras & Camcorders',
			'Audio & Video',
			'Smart Home',
			'Others (Electronics)',
		],
	},
	{
		id: 2,
		name: 'Mobile',
		icon: <FcCellPhone />,
		sub_categories: [
			'Mobile Phones',
			'Mobile Phone Accessories',
			' Wearables',
			'SIM Cards',
			'Mobile Phone Services',
		],
	},
	{
		id: 3,
		name: 'Vehicles',
		icon: <AiFillCar />,
		sub_categories: [
			'Cars',
			'Motorcycles',
			'Scooters',
			'Bikes',
			'Accessories',
			'Parts & Spare Parts',
			'Vehicle Services',
		],
	},
	{
		id: 4,
		name: 'Property',
		icon: <FcHome />,
		sub_categories: [
			'Apartments',
			'Houses',
			'Flats',
			'Rooms',
			'Shops',
			'Offices',
			'Commercial',
			'Land',
			'Property Services',
		],
	},
	{
		id: 5,
		name: 'Services',
		icon: <FcServices />,
		sub_categories: [
			'Home Services',
			'Business Services',
			'Health Services',
			'Education Services',
			'Beauty Services',
			'Food Services',
			'Travel Services',
			'Others (Services)',
		],
	},
	{
		id: 6,
		name: 'Home & Living',
		icon: <CgSmartHomeWashMachine />,
		sub_categories: [
			'Furniture',
			'Home Decor',
			'Home Appliances',
			'Home Improvement',
			'Home Services',
			'Others (Home & Living)',
		],
	},
	{
		id: 7,
		name: 'Fashion & Beauty',
		icon: <GoWatch />,
		sub_categories: [
			'Clothing',
			'Shoes',
			'Accessories',
			'Jewellery',
			'Watches',
			'Beauty Services',
			'Others (Fashion & Beauty)',
		],
	},
	{
		id: 8,
		name: 'Hobbies, sports & Kids',
		icon: <FcSportsMode />,
		sub_categories: [
			'Sports',
			'Hobbies',
			'Kids',
			'Others (Hobbies, sports & Kids)',
		],
	},
	{
		id: 9,
		name: 'Business & Industrial',
		icon: <FaIndustry />,
		sub_categories: [
			'Business',
			'Industrial',
			'Others (Business & Industrial)',
		],
	},
	{
		id: 10,
		name: 'Education',
		icon: <MdCastForEducation />,
		sub_categories: [
			'Schools',
			'Colleges',
			'Universities',
			'Others (Education)',
		],
	},
];

const Post = () => {
	const router = useRouter();
	// console.log(State.getStatesOfCountry('BD'));
	// console.log(City.getCitiesOfState('BD', 'G'));

	const [showModal, setShowModal] = React.useState(false);
	const [showSubCategory, setShowSubCategory] = React.useState(false);
	const [showAriaModal, setShowAriaModal] = React.useState(false);
	const [subCategories, setSubCategories] = React.useState([]);
	const [selectedCategory, setSelectedCategory] = React.useState('');
	const [selectedSubCategory, setSelectedSubCategory] = React.useState('');

	const [selectedCity, setSelectedCity] = React.useState('');
	const [showPage, setShowPage] = React.useState(false);

	const handleSubCategory = (e) => {
		setShowModal(false);
		setShowSubCategory(true);
		setSubCategories(e.sub_categories);
	};

	const selectSubCategoryHandler = () => {
		setShowSubCategory(false);
		setShowAriaModal(true);
	};

	const selectAriaModalHandler = () => {
		setShowAriaModal(false);
		setShowPage(true);
		router.push('/post/new_ad');
	};
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='flex items-center justify-center space-x-4 '>
				<Image src='/money_bag01.png' alt='logo' width={150} height={150} />
				<div className='space-y-2'>
					<h2 className='text-xl font-bold'>Start making money!</h2>
					<p className='w-10/12'>Do you have something to sell?</p>
					<p className='w-3/4'>Post your first ad and start making money</p>
					<button
						className='px-4 py-3 font-bold text-gray-700 bg-yellow-400 rounded-md '
						onClick={() => setShowModal(true)}
					>
						Post Your ad free
					</button>
				</div>
			</div>
			{showModal ? (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden outline-none focus:outline-none'>
						<div className='relative w-9/12 max-w-3xl mx-auto my-6 '>
							{/*content*/}
							<div className='relative flex flex-col w-full h-screen bg-white border-0 rounded-lg shadow-lg outline-none top-7 focus:outline-none'>
								{/*header*/}
								<div className='flex items-center justify-between p-2 border-b border-solid rounded-t border-blueGray-200'>
									<h3 className='font-semibold text-1xl'>Select a Category</h3>
									<button
										className='flex items-center justify-center text-3xl font-semibold text-red-500 border-0 rounded-full outline-none focus:outline-none '
										onClick={() => setShowModal(false)}
									>
										<span className='outline-none focus:outline-none'>×</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative flex-auto p-6 overflow-y-scroll'>
									<div className='my-4 space-y-3 text-lg leading-relaxed text-blueGray-500'>
										{categories.map((category) => (
											<div
												key={category.id}
												className='flex items-center justify-start py-2 space-x-4 space-y-2 border-b-2 cursor-pointer'
												onClick={() => handleSubCategory(category)}
											>
												<div className='flex items-center justify-center space-x-4'>
													{category.icon}
													<span className='text-sm font-semibold'>
														{category.name}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
				</>
			) : null}
			{showSubCategory ? (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden outline-none focus:outline-none'>
						<div className='relative w-9/12 max-w-3xl mx-auto my-6 '>
							{/*content*/}
							<div className='relative flex flex-col w-full h-screen bg-white border-0 rounded-lg shadow-lg outline-none top-7 focus:outline-none'>
								{/*header*/}
								<div className='flex items-center justify-between p-2 border-b border-solid rounded-t border-blueGray-200'>
									<h3 className='font-semibold text-1xl'>
										Select a Sub Category
									</h3>
									<button className='flex items-center justify-center text-3xl font-semibold text-red-500 border-0 rounded-full outline-none focus:outline-none '>
										<span className='outline-none focus:outline-none'>×</span>
									</button>
								</div>
								{/*body*/}
								<div
									className='relative flex-auto p-6 overflow-y-scroll'
									onClick={selectSubCategoryHandler}
								>
									<div className='my-4 space-y-3 text-lg leading-relaxed text-blueGray-500'>
										{subCategories.map((subCategory, index) => (
											<div
												key={index}
												className='flex items-center justify-start py-2 space-x-4 space-y-2 border-b-2 cursor-pointer'
											>
												<div className='flex items-center justify-center space-x-4'>
													<span className='text-sm font-semibold'>
														{subCategory}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
				</>
			) : null}

			{/* Select an Aria */}
			{showAriaModal ? (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden outline-none focus:outline-none'>
						<div className='relative w-9/12 max-w-3xl mx-auto my-6 '>
							{/*content*/}
							<div className='relative flex flex-col w-full h-screen bg-white border-0 rounded-lg shadow-lg outline-none top-7 focus:outline-none'>
								{/*header*/}
								<div className='flex items-center justify-between p-2 border-b border-solid rounded-t border-blueGray-200'>
									<h3 className='font-semibold text-1xl'>
										Select an Aria or City
									</h3>
									<button
										className='flex items-center justify-center text-3xl font-semibold text-red-500 border-0 rounded-full outline-none focus:outline-none '
										onClick={() => setShowAriaModal(false)}
									>
										<span className='outline-none focus:outline-none'>×</span>
									</button>
								</div>
								{/*body*/}
								<div
									className='relative flex-auto p-6 overflow-y-scroll'
									onClick={selectAriaModalHandler}
								>
									<div className='my-4 space-y-3 text-lg leading-relaxed text-blueGray-500'>
										{State.getStatesOfCountry('BD').map((city, index) => (
											<div
												key={index}
												className='flex items-center justify-start py-2 space-x-4 space-y-2 border-b-2 cursor-pointer'
											>
												<div className='flex items-center justify-center space-x-4'>
													<span className='text-sm font-semibold'>
														{city.name}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
				</>
			) : null}

			{/* open page
			{showPage ? (
				<div>
					<h1>Hello world</h1>
				</div>
			) : null} */}
		</div>
	);
};

export default Post;
