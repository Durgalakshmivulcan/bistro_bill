import Modal from "../Common/Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddTaxGroupModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6">
        Add New Tax Group
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Tax Group Name <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Cascading Tax"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Percentage <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="12"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Mix of Taxes
          </label>
          <select
            multiple
            className="w-full border rounded-md px-3 py-2"
          >
            <option>GST</option>
            <option>VAT</option>
            <option>CGST</option>
            <option>SGST</option>
          </select>
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

export default AddTaxGroupModal;
