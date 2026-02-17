'use client';

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  regularPrice: number;
  offerPrice: number;
  image: string;
  rating: number;
  reviews: number;
}

export default function ProductCard({
  id,
  name,
  description,
  regularPrice,
  offerPrice,
  image,
  rating,
  reviews,
}: ProductCardProps) {
  const discount = Math.round(((regularPrice - offerPrice) / regularPrice) * 100);

  return (
    <Link href={`/product/${id}`}>
      <div className="card bg-white cursor-pointer group overflow-hidden h-full">
        {/* Image Container */}
        <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Discount Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            -{discount}%
          </div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category Badge */}
          <div className="mb-2">
            <span className="inline-block px-2 py-1 bg-accent bg-opacity-20 text-accent font-semibold text-xs rounded-full">
              Special Offer
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition">
            {name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviews} reviews)</span>
          </div>

          {/* Price Section */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">${offerPrice.toFixed(2)}</span>
            <span className="text-lg text-gray-500 line-through">${regularPrice.toFixed(2)}</span>
          </div>

          {/* CTA Button */}
          <button className="w-full btn-primary text-sm font-bold group-hover:shadow-xl group-hover:from-primary group-hover:to-secondary">View Details</button>
        </div>
      </div>
    </Link>
  );
}
