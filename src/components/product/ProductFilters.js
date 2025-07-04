// components/ui/productFilters.js
'use client';
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
// import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { categories } from '@/data/products';
import { categories } from '../data/products';

export default function ProductFilters({
  searchTerm,
  selectedCategory,
  sortBy,
  onSearchChange,
  onCategoryChange,
  onSortChange
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">Filter Products</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}






// 'use client';
// import React from 'react';
// import { Search, Filter } from 'lucide-react';
// import { Input } from '@/components/ui/label';
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { categories } from '@/data/products';

// export default function ProductFilters({
//   searchTerm,
//   selectedCategory,
//   sortBy,
//   onSearchChange,
//   onCategoryChange,
//   onSortChange
// }) {
//   return (
//     <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
//       <div className="flex items-center space-x-2 mb-4">
//         <Filter className="h-5 w-5 text-gray-600" />
//         <h2 className="text-lg font-semibold text-gray-900">Filter Products</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Search */}
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//           <Input
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => onSearchChange(e.target.value)}
//             className="pl-10"
//           />
//         </div>

//         {/* Category Filter */}
//         <Select value={selectedCategory} onValueChange={onCategoryChange}>
//           <SelectTrigger>
//             <SelectValue placeholder="Select category" />
//           </SelectTrigger>
//           <SelectContent>
//             {categories.map((category) => (
//               <SelectItem key={category.id} value={category.id}>
//                 {category.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         {/* Sort */}
//         <Select value={sortBy} onValueChange={onSortChange}>
//           <SelectTrigger>
//             <SelectValue placeholder="Sort by" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="name">Name</SelectItem>
//             <SelectItem value="price-low">Price: Low to High</SelectItem>
//             <SelectItem value="price-high">Price: High to Low</SelectItem>
//             <SelectItem value="rating">Highest Rated</SelectItem>
//             <SelectItem value="newest">Newest</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// }