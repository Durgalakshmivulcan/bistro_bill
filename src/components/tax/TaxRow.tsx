import { TaxItem } from "../../data/taxes";
import ActionMenu from "../Common/ActionMenu";

type Props = {
  tax: TaxItem;
};

const TaxRow: React.FC<Props> = ({ tax }) => {
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-3">{tax.name}</td>

      <td className="px-4 py-3">{tax.percentage}%</td>

      <td className="px-4 py-3">
        <ActionMenu
          onEdit={() => console.log("Edit tax", tax)}
          onDelete={() => console.log("Delete tax", tax)}
        />
      </td>
    </tr>
  );
};

export default TaxRow;
