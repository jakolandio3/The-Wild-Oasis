import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';
import CabinTable from './CabinTable';

// function AddCabin() {
// 	const [isOpenModal, setIsOpenModal] = useState(false);
// 	return (
// 		<>
// 			<Button onClick={() => setIsOpenModal(!isOpenModal)}>
// 				Add new cabin
// 			</Button>
// 			{isOpenModal && (
// 				<Modal onClose={() => setIsOpenModal(false)}>
// 					<CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
// 				</Modal>
// 			)}
// 		</>
// 	);
// }

function AddCabin() {
	return (
		<Modal>
			<Modal.Open opens='cabin-form'>
				<Button>Add New Cabin</Button>
			</Modal.Open>
			<Modal.Window name='cabin-form'>
				<CreateCabinForm />
			</Modal.Window>
			{/* 
			<Modal.Open opens='table'>
				<Button>Show Table</Button>
			</Modal.Open>
			<Modal.Window name='table'>
				<CabinTable /> */}
			{/* </Modal.Window> */}
		</Modal>
	);
}

export default AddCabin;
