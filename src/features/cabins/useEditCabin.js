import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

export function useEditCabin() {
	const queryClient = useQueryClient();

	const { mutate: editCabin, isLoading: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
		onMutate: () => toast.loading(`Editing Cabin`),
		onSuccess: () => {
			toast.dismiss();
			toast.success('Cabin successfully updated');
			queryClient.invalidateQueries({
				queryKey: ['cabin'],
			});
		},
		onError: (err) => {
			toast.dismiss();
			toast.error(err.message);
		},
	});

	return { editCabin, isEditing };
}
