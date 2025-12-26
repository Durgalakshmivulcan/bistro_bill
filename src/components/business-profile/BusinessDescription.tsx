type Props = {
  description: string;
};

const BusinessDescription: React.FC<Props> = ({ description }) => {
  return (
    <div className="mt-6">
      <p className="font-medium mb-2">Description</p>
      <div className="border rounded-md p-4 text-sm text-gray-700 whitespace-pre-line">
        {description}
      </div>
    </div>
  );
};

export default BusinessDescription;
