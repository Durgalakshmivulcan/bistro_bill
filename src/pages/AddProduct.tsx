import Input from "../components/form/Input";
import Select from "../components/form/Select";
import Toggle from "../components/form/Toggle";
import DashboardLayout from "../layout/DashboardLayout";
import { ChevronRight } from "lucide-react";

const AddProduct = () => {
    return (
        <DashboardLayout>
            <div className="p-6 bg-[#FFFDF5] min-h-screen">

                {/* Tabs */}
                <div className="flex gap-4 border-b mb-4 text-sm">
                    <button className="pb-2">Dashboard</button>
                    <button className="pb-2 border-b-2 border-black font-medium">
                        Products
                    </button>
                    <button className="pb-2">Channel Menu</button>
                    <button className="pb-2">Configuration</button>
                </div>

                {/* Stepper */}
                <div className="flex items-center gap-2 mb-6 text-sm overflow-x-auto">
                    {[
                        "Product Details",
                        "Variants",
                        "Addons",
                        "Price Details",
                        "Images",
                        "Additional Details",
                        "Additional Ingredients",
                    ].map((step, idx, arr) => (
                        <div key={step} className="flex items-center gap-2 shrink-0">
                            {/* Step Circle */}
                            <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium
          ${idx === 0
                                        ? "bg-yellow-400 text-black"
                                        : "border border-gray-400 text-gray-600"
                                    }`}
                            >
                                {idx + 1}
                            </div>

                            {/* Step Label */}
                            <span
                                className={`whitespace-nowrap ${idx === 0 ? "font-medium text-black" : "text-gray-600"
                                    }`}
                            >
                                {step}
                            </span>

                            {/* Arrow (except last item) */}
                            {idx !== arr.length - 1 && (
                                <div className="flex items-center mx-1 text-black">
                                    <ChevronRight size={20} />
                                    <ChevronRight size={20} className="-ml-1" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>


                {/* Form Card */}
                <div className="bg-[#FFF9ED] border rounded-xl p-6">

                    <h2 className="font-semibold mb-4">Product Details</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                        {/* Upload Image */}
                        <div>
                            <label className="text-sm font-medium">
                                Product Image <span className="text-red-500">*</span>
                            </label>

                            <div className="mt-2 border-2 border-dashed rounded-lg p-4 text-center bg-white">
                                <button className="bg-yellow-400 text-sm px-4 py-2 rounded">
                                    Upload Image
                                </button>
                                <p className="text-xs text-gray-500 mt-2">
                                    (Recommended size should be between 400×280 and 600×300 px.
                                    PNG, JPG, JPEG)
                                </p>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Product Type */}
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium">
                                    Product Type <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-4 mt-1 text-sm">
                                    <label><input type="radio" name="type" defaultChecked /> Regular</label>
                                    <label><input type="radio" name="type" /> Combo</label>
                                    <label><input type="radio" name="type" /> Retail</label>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <Input label="Product Name" required />
                            </div>
                            <Input label="SKU Code" />
                            <Select label="Category" required />
                            <Select label="Sub-Category" />
                            <Select label="Brand" />
                            <Select label="Tags" />
                            <Input label="POS Short Code" required />
                            <Select label="Display Order" />
                            <Select label="Measuring Unit" />

                            {/* Includes Tax */}
                            <Toggle label="Includes Tax" />

                            {/* Eligible for Discount */}
                            <Toggle label="Eligible for Discount" />

                            <Select label="Taxes" required />
                            <Select label="Discount Type" required />

                            <div className="md:col-span-2">
                                <label className="text-sm">
                                    <input type="checkbox" className="mr-2" /> Mark as Addon
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-4">
                        <label className="text-sm font-medium">Description</label>
                        <textarea
                            className="w-full border rounded-md p-3 mt-1 bg-white"
                            rows={4}
                            placeholder="Add Description"
                        />
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button className="border px-4 py-2 rounded">Cancel</button>
                        <button className="bg-yellow-400 px-4 py-2 rounded">
                            Save & Next
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AddProduct;
