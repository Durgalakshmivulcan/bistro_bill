import InvoiceItemsTable from "./InvoiceItemsTable";

const InvoiceCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
      <div className="flex justify-between items-center border-b pb-3">
        <p className="font-medium">
          Invoice: <span className="font-semibold">SSE52156-553</span>
        </p>
        <button>🖨</button>
      </div>

      <div className="text-center mt-4">
        <p className="font-semibold">
          GK Hospitality Chaitanya Food Court
        </p>
        <p className="text-xs text-gray-500 mt-1">
          1-55/322, Rohan Delite, Botanical Garden, Kondapur – 500084
        </p>
        <p className="text-xs mt-1">GSTIN: 56ADUYT154EL10</p>
        <p className="text-xs">Mobile Number: 9874561230</p>
      </div>

      <div className="text-xs flex flex-wrap justify-between mt-4 border-b pb-3">
        <span>Date: 29/01/2025</span>
        <span>Time: 06:56 PM</span>
        <span>Cashier: Biller</span>
        <span>Bill No: 10</span>
        <span>KOT No: 08</span>
        <span>Takeaway</span>
      </div>

      <InvoiceItemsTable />

      <div className="text-sm mt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ 610.00</span>
        </div>
        <div className="flex justify-between">
          <span>Discount sales</span>
          <span>- ₹ 10.00</span>
        </div>
        <div className="flex justify-between">
          <span>Charges</span>
          <span>₹ 10.00</span>
        </div>
        <div className="flex justify-between">
          <span>Total Tax</span>
          <span>₹ 30.98</span>
        </div>
        <div className="flex justify-between">
          <span>Round off</span>
          <span>₹ 0.02</span>
        </div>

        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total</span>
          <span>₹ 650.00</span>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Thank You Visit Again
      </p>
    </div>
  );
};

export default InvoiceCard;
