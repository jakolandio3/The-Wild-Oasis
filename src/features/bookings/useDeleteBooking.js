import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingAPI,
    onMutate: () => toast.loading(`deleting booking`),
    onSuccess: () => {
      toast.dismiss();
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteBooking };
}
