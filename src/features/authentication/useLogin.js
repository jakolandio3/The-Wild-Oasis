import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onMutate: () => toast.loading(`Logging-On..`),
    onSuccess: (user) => {
      toast.dismiss();
      toast.success(`Successfully Logged In!`);
      queryClient.setQueryData(["user"], user.user);

      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.dismiss();
      toast.error("Provided Email or Password is incorrect");
    },
  });
  return { login, isLoggingIn };
}
