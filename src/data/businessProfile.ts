export type BusinessProfile = {
  restaurantName: string;
  brandName: string;
  website: string;
  phone: string;
  email: string;
  businessType: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  address: string;
  description: string;
  logoUrl: string;
};

export const businessProfile: BusinessProfile = {
  restaurantName: "Solitary Pvt. Ltd.",
  brandName: "Solitary",
  website: "www.Solitary.com",
  phone: "+91 9123456780",
  email: "info@solitary.com",
  businessType: "Take Away",
  country: "India",
  state: "Telangana",
  city: "Hyderabad",
  zip: "500013",
  address: "2/3-10, West street, kondapur",
  logoUrl: "/images/restaurantLogo.png", // replace with real logo
  description: `Welcome to [Restaurant Name], where culinary excellence meets warm hospitality.
Located in the heart of [Location], we specialize in serving authentic dishes crafted
with the finest ingredients.

We pride ourselves on exceptional service, ensuring every guest enjoys a memorable
dining experience.`,
};
