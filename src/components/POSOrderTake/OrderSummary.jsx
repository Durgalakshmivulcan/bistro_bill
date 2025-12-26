import { Pencil, X, Printer } from "lucide-react";

export default function OrderSummary({ cart }) {
  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const discount = 10;
  const tax = 40;
  const total = subtotal - discount + tax;

  return (
    <div className="w-full lg:w-[380px] h-full flex flex-col p-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        <button className="flex-1 bg-yellow-400 rounded-lg py-2 flex items-center justify-center gap-2 text-sm">
          <Pencil size={16} /> Modify Order
        </button>
        <button className="flex-1 border rounded-lg py-2 text-sm flex items-center justify-center gap-2">
          <X size={16} /> Cancel
        </button>
        <button className="flex-1 border rounded-lg py-2 text-sm flex items-center justify-center gap-2">
          <Printer size={16} /> Print
        </button>
      </div>

      <div className="space-y-2 flex-1">
        <h3 className="font-semibold">Order Summary</h3>
        <div className="flex justify-between text-sm"><span>Subtotal</span><span>₹{subtotal}</span></div>
        <div className="flex justify-between text-sm"><span>Discount</span><span>-₹{discount}</span></div>
        <div className="flex justify-between text-sm"><span>Tax</span><span>₹{tax}</span></div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total Payable</span><span>₹{total}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="flex-1 border rounded-lg py-2 text-sm">Send e-Bill</button>
        <button className="flex-1 bg-yellow-400 rounded-lg py-2 text-sm">Mark Ready</button>
        <button className="flex-1 border rounded-lg py-2 text-sm">Checkout</button>
      </div>
    </div>
  );
}
