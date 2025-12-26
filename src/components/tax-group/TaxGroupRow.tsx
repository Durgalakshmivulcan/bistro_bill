import { TaxGroup } from "../../data/taxGroups";
import ActionMenu from "../Common/ActionMenu";

type Props = {
  group: TaxGroup;
};

const TaxGroupRow: React.FC<Props> = ({ group }) => {
  return (
    <tr className="border-b last:border-none">
      <td className="px-4 py-3">{group.name}</td>

      <td className="px-4 py-3">
        {group.mixOf.join(", ")}
      </td>

      <td className="px-4 py-3">
        {group.percentage}%
      </td>

      <td className="px-4 py-3">
        <ActionMenu
          onEdit={() => console.log("Edit tax group", group)}
          onDelete={() => console.log("Delete tax group", group)}
        />
      </td>
    </tr>
  );
};

export default TaxGroupRow;
