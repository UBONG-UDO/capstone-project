"use client";
import React from "react";

export default function ProductFilters({
  selectedCategory,
  sortBy,
  onCategoryChange,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-4 mx-110 md:flex-row md:justify-between mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-4 py-2 border rounded border-blue-800"
      >
        <option value="all">All Categories</option>
        <option value="inverter">Inverter</option>
        <option value="battery">Battery</option>
        <option value="solar-panel">Solar Panel</option>
        <option value="charge-controller">Charge Controller</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 border rounded border-blue-800"
      >
        <option value="">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name A-Z</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}