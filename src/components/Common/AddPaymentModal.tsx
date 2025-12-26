import Modal from "./Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddPaymentModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6">
        Add New Payment Mode
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Payment Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Payment Mode Name <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Gift Cards"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select className="w-full border rounded-md px-3 py-2">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={onClose}
          className="border px-6 py-2 rounded-md"
        >
          Cancel
        </button>

        <button className="bg-yellow-400 px-6 py-2 rounded-md font-medium">
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddPaymentModal;
