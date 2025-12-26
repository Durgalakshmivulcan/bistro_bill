import { PaymentOption } from "../../data/paymentOptions";
import PaymentRow from "./PaymentRow";

type Props = {
  options: PaymentOption[];
};

const PaymentOptionsTable: React.FC<Props> = ({ options }) => {
  return (
    <div className="bg-white rounded-md overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-yellow-400">
          <tr>
            <th className="px-4 py-3 text-left font-medium">
              Payment Mode
            </th>
            <th className="px-4 py-3 text-left font-medium">
              Status
            </th>
            <th className="px-4 py-3 text-left font-medium">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {options.map((option) => (
            <PaymentRow key={option.id} option={option} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentOptionsTable;
