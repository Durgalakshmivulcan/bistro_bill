import { TaxGroup } from "../../data/taxGroups";
import TaxGroupRow from "./TaxGroupRow";

type Props = {
  groups: TaxGroup[];
};

const TaxGroupTable: React.FC<Props> = ({ groups }) => {
  return (
    <div className="bg-white rounded-md overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-yellow-400">
          <tr>
            <th className="px-4 py-3 text-left font-medium">
              Tax Name
            </th>
            <th className="px-4 py-3 text-left font-medium">
              Mix of
            </th>
            <th className="px-4 py-3 text-left font-medium">
              Percentage
            </th>
            <th className="px-4 py-3 text-left font-medium">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {groups.map((group) => (
            <TaxGroupRow key={group.id} group={group} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxGroupTable;
