import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export function useDeleteCabin() {
	const queryClient = useQueryClient();

	const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: deleteCabinApi,
		onMutate: () => toast.loading(`deleting cabin`),
		onSuccess: () => {
			toast.dismiss();
			toast.success('Cabin successfully deleted');
			queryClient.invalidateQueries({
				queryKey: ['cabin'],
			});
		},
		onError: (err) => {
			toast.dismiss();
			toast.error(err.message);
		},
	});
	return { isDeleting, deleteCabin };
}
