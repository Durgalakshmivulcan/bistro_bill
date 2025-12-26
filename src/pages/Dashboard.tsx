import React from "react";
import TopNav from "../components/TopNav";
import StatCard from "../components/StatCard";
import ProductCard from "../components/ProductCard";
import { stats, topSelling, lastSale } from "../data/dashboard";

const Dashboard: React.FC = () => {
  return (
    <div className="bb-shell">
      <div className="bb-frame flex flex-col">
        <TopNav />

        <main className="bb-main">
          {/* Stats row */}
          <section className="mt-6">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {stats.map((item) => (
                <StatCard key={item.id} stat={item} />
              ))}
            </div>
          </section>

          {/* Top Selling */}
          <section className="mt-8">
            <h2 className="bb-heading">
              Yesterday Top 10 Selling Product&apos;s
            </h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {topSelling.map((product) => (
                <ProductCard key={product.id} name={product.name} price={product.price}  image={product.imageUrl} />
              ))}
            </div>
          </section>

          {/* Last Sale */}
          <section className="mt-8">
            <h2 className="bb-heading">
              Yesterday Top 10 Last Sale Product&apos;s
            </h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mb-4">
              {lastSale.map((product) => (
                <ProductCard key={product.id} name={product.name} price={product.price}  image={product.imageUrl} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
