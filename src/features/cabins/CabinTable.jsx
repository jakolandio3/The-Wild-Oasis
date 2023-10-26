import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

function CabinTable() {
	const [searchParams] = useSearchParams();
	const { isLoading, cabins } = useCabins();
	if (isLoading) return <Spinner />;
	const filterValue = searchParams.get('discount') || 'all';

	let filteredCabins;
	if (filterValue === 'all') filteredCabins = cabins;
	if (filterValue === 'no-discount')
		filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
	if (filterValue === 'with-discount')
		filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

	const sortBy = searchParams.get('sortBy') || 'name-asc';
	const [field, direction] = sortBy.split('-');
	const modifier = direction === 'asc' ? 1 : -1;
	const sortedCabins = filteredCabins
		.slice()
		.sort((a, b) => (a[field] - b[field]) * modifier);
	if (!cabins.length) return <Empty resourceName={'cabins'} />;
	return (
		<Menus>
			<Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
				<Table.Header>
					<div></div>
					<div>cabin</div>
					<div>capacity</div>
					<div>price</div>
					<div>discount</div>
					<div></div>
				</Table.Header>
				<Table.Body
					data={sortedCabins}
					render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
				/>
			</Table>
		</Menus>
	);
}

export default CabinTable;
