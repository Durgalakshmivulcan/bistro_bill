import Modal from "../Common/Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddTaxModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6">Add New Tax</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Tax Name <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="CGST"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Percentage <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="9"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

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

export default AddTaxModal;
