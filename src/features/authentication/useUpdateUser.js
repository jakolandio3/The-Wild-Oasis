import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onMutate: () => toast.loading(`Updating Profile`),
    onSuccess: () => {
      toast.dismiss();
      toast.success("Profile successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
}
