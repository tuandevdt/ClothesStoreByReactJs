// DeleteConfirmation.js
import Swal from 'sweetalert2';

const DeleteConfirmation = ({ item, onDelete }) => {
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        await onDelete(item.id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } catch (error) {
        console.error("Error deleting category:", error);
        Swal.fire({
          title: "Error!",
          text: "There was a problem deleting the category.",
          icon: "error"
        });
      }
    }
  };

  return (
    <button onClick={handleDelete} className="rounded-md hover:bg-red-100 text-red-600 p-2 flex justify-between items-center">
      Delete
    </button>
  );
};

export default DeleteConfirmation;