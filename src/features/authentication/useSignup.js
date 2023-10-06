import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onMutate: () => toast.loading(`Creating user...`),
    onSuccess: (user) => {
      console.log(user);
      toast.dismiss();
      toast.success(
        "Account successfully created! Please Verify the new account from the user's eamil address."
      );
    },
    onError: (error) => {
      console.log(error);
      toast.dismiss();
      toast.error("Something went wrong...");
    },
  });

  return { signup, isLoading };
}
