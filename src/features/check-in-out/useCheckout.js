import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onMutate: () => toast.loading(`Updating Booking Status`),
    onSuccess: (data) => {
      toast.dismiss();
      toast.success(`Booking # ${data.id} successfully Checked-Out!`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(`There was an error While Checking out ${err.message}`);
    },
  });
  return { checkout, isCheckingOut };
}
