"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import {
  ProductCard,
  ProductCardSkeleton,
} from "@/components/store/product-card";
import { CollectionFilters } from "@/components/store/collection-filters";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useProducts } from "@/hooks/queries";
import { CATEGORIES } from "@/lib/types";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as string | null;
  const searchQuery = searchParams.get("search") || "";

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : [],
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">(
    "newest"
  );

  const queryParams = useMemo(() => {
    const params: Record<string, any> = {
      sort: sortBy,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      limit: 50,
    };
    if (searchQuery) params.search = searchQuery;
    if (selectedCategories.length > 0) {
      params.category = selectedCategories[0];
    }
    return params;
  }, [searchQuery, selectedCategories, priceRange, sortBy]);

  const { data, isLoading } = useProducts(queryParams);
  const filteredProducts = data?.products || [];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100]);
    setSortBy("newest");
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 100;

  return (
    <div className="mx-auto max-w-7xl px-3 py-6 sm:px-4 sm:py-8">
      {/* Page Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="mb-1 block text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            {searchQuery ? "Search Results" : "Browse"}
          </span>
          <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
            {searchQuery ? `"${searchQuery}"` : "Collections"}
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </p>
        </div>

        {/* Filter button — opens a slide-in sheet on ALL screen sizes */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="cursor-pointer gap-2 rounded-full text-xs font-bold uppercase tracking-widest"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white dark:bg-white dark:text-black">
                  {selectedCategories.length || "!"}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="text-xs font-bold uppercase tracking-widest">
                Filters
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <CollectionFilters
                selectedCategories={selectedCategories}
                priceRange={priceRange}
                sortBy={sortBy}
                onToggleCategory={toggleCategory}
                onPriceRangeChange={setPriceRange}
                onSortChange={setSortBy}
                onClearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters Tags */}
      {(selectedCategories.length > 0 || searchQuery) && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {searchQuery && (
            <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground">
              Search: {searchQuery}
            </span>
          )}
          {selectedCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
            >
              {CATEGORIES.find((c) => c.value === cat)?.label}
              <X className="h-3 w-3" />
            </button>
          ))}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="cursor-pointer text-xs font-semibold text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Full-width 3-column product grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-bold uppercase tracking-tight text-foreground">
            No products found
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try adjusting your filters or search query
          </p>
          <Button
            variant="outline"
            className="mt-6 cursor-pointer rounded-full text-xs font-bold uppercase tracking-widest"
            onClick={clearFilters}
          >
            Clear All Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-3 py-6 sm:px-4 sm:py-8">
          <div className="mb-6">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="mt-2 h-8 w-48 rounded bg-muted" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
