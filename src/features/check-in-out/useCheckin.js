import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onMutate: () => toast.loading(`Updating Booking Status`),
    onSuccess: (data) => {
      toast.dismiss();
      toast.success(`Booking # ${data.id} successfully Checked-In!`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error("There was an error While Checking In");
    },
  });
  return { checkin, isCheckingIn };
}
