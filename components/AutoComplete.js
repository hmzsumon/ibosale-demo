import React, { useEffect, useState } from 'react';

const AutoComplete = ({
	optionsData,
	laval,
	placeholder,
	search,
	setSearch,
}) => {
	const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [toggleArrow, setToggleArrow] = useState(false);

	useEffect(() => {
		setOptions(optionsData);
	}, []);

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='w-full px-4 mt-10 space-y-2 md:w-2/4'>
				<label htmlFor='' className='text-gray-600 '>
					{laval}
				</label>
				<div
					className='flex overflow-hidden bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
					onClick={() => {
						setDisplay(!display);
						setToggleArrow(!toggleArrow);
					}}
				>
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
						value={search}
						className='flex-1 py-2 ml-2 focus:outline-none'
						placeholder={placeholder}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className='flex items-center justify-center px-4 border-l'>
						{toggleArrow ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
									clipRule='evenodd'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						)}
					</button>
				</div>
				{display && (
					<ul className='w-full h-40 px-3 mt-1 overflow-y-scroll '>
						{options
							.filter((option) =>
								option.toLowerCase().startsWith(search.toLowerCase())
							)
							.map((option, index) => {
								return (
									<li
										key={index}
										className='py-2 border-b border-gray-400 cursor-pointer hover:bg-green-100'
										onClick={() => {
											setSearch(option);
											setDisplay(false);
											setToggleArrow(!toggleArrow);
										}}
									>
										{option}
									</li>
								);
							})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default AutoComplete;
