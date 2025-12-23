import React from "react";
import PageWrapper from "../layout/PageWrapper";
import SummaryCard from "../components/SummaryCard";
import ProductCard from "../components/CatalogProductCard";
import SectionTitle from "../components/SectionTitle";
import Dropdown from "../components/Dropdown";
import { summaryData, products } from "../data/Products";

const CatalogDashboard = () => {
  return (
    <PageWrapper>
      {/* Summary */}
      <SectionTitle title="Summary" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryData.map((item) => (
          <SummaryCard key={item.title} {...item} />
        ))}
      </div>

      {/* Top Selling Products */}
      <div className="flex justify-between items-center mb-3">
        <SectionTitle title="Top Selling Product's" />

        <div className="flex gap-3">
          <Dropdown label="Yesterday" />
          <Dropdown label="Top 10 Product's" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {products.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>

      {/* Least Selling Products */}
      <div className="flex justify-between items-center mb-3">
        <SectionTitle title="Least Selling Product's" />

        <div className="flex gap-3">
          <Dropdown label="Yesterday" />
          <Dropdown label="Least 10 Product's" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default CatalogDashboard;
