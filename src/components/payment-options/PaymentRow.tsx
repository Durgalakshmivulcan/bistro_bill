import ActionMenu from "../Common/ActionMenu";
import StatusToggle from "./StatusToggle";
import { PaymentOption } from "../../data/paymentOptions";
type Props = {
  option: PaymentOption;
};



const PaymentRow: React.FC<Props> = ({ option }) => {
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-3">{option.name}</td>

      <td className="px-4 py-3">
        <StatusToggle enabled={option.enabled} />
      </td>

      <td className="px-4 py-3">
        <ActionMenu
          onEdit={() => console.log("Edit", option)}
          onDelete={() => console.log("Delete", option)}
        />
      </td>
    </tr>
  );
};


export default PaymentRow;


