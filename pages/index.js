import Head from 'next/head';
import AdCard from '../components/AdCard';
import { adsData } from '../data';

function HomePage({ ads }) {
	return (
		<>
			<Head>
				<title>IBO.sale</title>
				<meta
					name='description'
					content='I post about programming and web development.'
				/>
			</Head>
			<main>
				<div className='container flex justify-center p-4 mx-auto '>
					<div className='flex w-9/12 overflow-hidden rounded-lg lg:w-7/12'>
						<input
							type='text'
							className='w-full px-4 py-3 rounded-l-lg '
							placeholder='Search...'
						/>
						<button className='flex items-center justify-center px-4 bg-green-500 border-r rounded-r-lg '>
							<svg
								className='w-6 h-6 text-white'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'></path>
							</svg>
						</button>
					</div>
				</div>
				<div className='grid h-full gap-6 py-4 sm:grid-cols-2 lg:grid-cols-4'>
					{ads.map((ad) => (
						<div
							key={ad.id}
							className='flex flex-col items-center justify-center'
						>
							<AdCard ad={ad} />
						</div>
					))}
				</div>
			</main>
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			ads: adsData,
		},
	};
}

export default HomePage;
