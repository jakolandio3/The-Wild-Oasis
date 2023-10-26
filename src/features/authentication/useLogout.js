import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onMutate: () => toast.loading(`Jacking-Off..`),
    onSuccess: () => {
      toast.dismiss();
      toast.success(`User Logged Out`);
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.dismiss();
      toast.error("An error occurred while trying to logout");
    },
  });
  return { logout, isLoading };
}
