import { BusinessProfile } from "../../data/businessProfile";

type Props = {
  data: BusinessProfile;
};

const BusinessInfo: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Logo */}
      <div>
        <p className="text-sm font-medium mb-2">logo</p>
        <div className="w-40 h-40 border rounded-md flex items-center justify-center">
          <img
            src={data.logoUrl}
            alt="Logo"
            className="max-h-full max-w-full"
          />
        </div>
      </div>

      {/* Details */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-medium">Restaurant Name:</p>
          <p>{data.restaurantName}</p>
        </div>

        <div>
          <p className="font-medium">Brand Name:</p>
          <p>{data.brandName}</p>
        </div>

        <div>
          <p className="font-medium">Website URL:</p>
          <p>{data.website}</p>
        </div>

        <div>
          <p className="font-medium">Business Type:</p>
          <p>{data.businessType}</p>
        </div>

        <div>
          <p className="font-medium">Phone Number:</p>
          <p>{data.phone}</p>
        </div>

        <div>
          <p className="font-medium">Email Address:</p>
          <p>{data.email}</p>
        </div>

        <div>
          <p className="font-medium">Country:</p>
          <p>{data.country}</p>
        </div>

        <div>
          <p className="font-medium">State:</p>
          <p>{data.state}</p>
        </div>

        <div>
          <p className="font-medium">City:</p>
          <p>{data.city}</p>
        </div>

        <div>
          <p className="font-medium">Zip/Pin Code:</p>
          <p>{data.zip}</p>
        </div>

        <div className="sm:col-span-2">
          <p className="font-medium">Address:</p>
          <p>{data.address}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
