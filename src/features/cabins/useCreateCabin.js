import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
	const queryClient = useQueryClient();

	const { mutate: createCabin, isLoading: isCreating } = useMutation({
		mutationFn: createEditCabin,
		onMutate: () => toast.loading(`Creating new Cabin`),
		onSuccess: () => {
			toast.dismiss();
			toast.success('Cabin successfully created');
			queryClient.invalidateQueries({
				queryKey: ['cabin'],
			});
		},
		onError: (err) => {
			toast.dismiss();
			toast.error(err.message);
		},
	});
	return { isCreating, createCabin };
}
