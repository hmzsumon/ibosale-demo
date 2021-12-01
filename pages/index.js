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
			<main className='grid h-full gap-6 py-4 sm:grid-cols-2 lg:grid-cols-4'>
				{ads.map((ad) => (
					<div
						key={ad.id}
						className='flex flex-col items-center justify-center'
					>
						<AdCard ad={ad} />
					</div>
				))}
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
