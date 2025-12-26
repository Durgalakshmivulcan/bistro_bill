import { TaxItem } from "../../data/taxes";
import TaxRow from "./TaxRow";

type Props = {
  taxes: TaxItem[];
};

const TaxTable: React.FC<Props> = ({ taxes }) => {
  return (
    <div className="bg-white rounded-md overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-yellow-400">
          <tr>
            <th className="px-4 py-3 text-left font-medium">
              Tax Name
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
          {taxes.map((tax) => (
            <TaxRow key={tax.id} tax={tax} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;
