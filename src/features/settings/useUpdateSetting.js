import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingAPI } from '../../services/apiSettings';

export function useUpdateSetting() {
	const queryClient = useQueryClient();

	const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
		mutationFn: (newSetting) => updateSettingAPI(newSetting),
		onMutate: () => toast.loading(`Updating Settings`),
		onSuccess: () => {
			toast.dismiss();
			toast.success('Settings successfully updated');
			queryClient.invalidateQueries({
				queryKey: ['settings'],
			});
		},
		onError: (err) => {
			toast.dismiss();
			toast.error(err.message);
		},
	});

	return { updateSetting, isUpdating };
}
