import { useEffect, useState } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getCabins } from '../services/apiCabins';

function Cabins() {
	const [cabins, setCabins] = useState('');

	useEffect(
		() =>
			async function data() {
				const res = await getCabins();
				setCabins(res);
				console.log(res);
			},

		[]
	);

	return (
		<Row type='horizontal'>
			<Heading as='h1'>all cabins</Heading>
			<img
				src='https://ynjqqejuebcocufsdsnr.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg'
				alt='cabin-0'
			/>
			<p>TEST</p>
		</Row>
	);
}

export default Cabins;
