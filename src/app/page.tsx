'use client';

import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import products from "@/data/products.json";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="w-full">
      {/* Slider Section */}
      <Slider />

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: "🌱",
              title: "100% Organic",
              desc: "Pure, natural ingredients grown without pesticides",
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              desc: "Fresh delivery straight to your doorstep",
            },
            {
              icon: "💰",
              title: "Best Prices",
              desc: "Direct from farms, up to 50% savings",
            },
            {
              icon: "✅",
              title: "Quality Assured",
              desc: "Tested and certified for your safety",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="card bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 text-center hover:from-emerald-100 hover:to-emerald-200 border-2 border-primary"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              🌿 Premium <span className="text-primary">Organic Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Direct from local farms. Limited stock, premium quality. Order now before they're gone!
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                  : "bg-emerald-200 text-gray-800 hover:bg-emerald-300"
                  }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} style={{ animationDelay: `${idx * 0.1}s` }} className="animate-fadeInUp">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-teal-600 to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            🥗 Pure Nutrition, Better Living
          </h2>
          <p className="text-xl mb-8 text-white text-opacity-90">
            Join our community of health-conscious families choosing organic, nutrient-rich foods.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            Shop All Products Now
          </button>
        </div>
      </section>
    </div>
  );
}
