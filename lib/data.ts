import { Product, Order } from "./types";

export const products: Product[] = [
  // T-Shirts
  {
    id: "ts-001",
    name: "Essential Cotton Tee",
    description:
      "A timeless classic made from 100% organic cotton. Perfect for everyday wear with a relaxed fit and breathable fabric.",
    price: 29.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Gray"],
    featured: true,
    stock: 150,
  },
  {
    id: "ts-002",
    name: "Minimalist Logo Tee",
    description:
      "Clean design with subtle branding. Made from premium cotton blend for superior comfort and durability.",
    price: 34.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Sage"],
    featured: false,
    stock: 80,
  },
  {
    id: "ts-003",
    name: "Oversized Street Tee",
    description:
      "Contemporary oversized fit with dropped shoulders. Perfect for a modern streetwear aesthetic.",
    price: 39.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Charcoal", "Olive"],
    featured: true,
    stock: 65,
  },
  {
    id: "ts-004",
    name: "Vintage Wash Tee",
    description:
      "Pre-washed for that lived-in feel. Soft, comfortable, and gets better with every wash.",
    price: 32.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Faded Blue", "Dusty Pink", "Washed Black"],
    featured: false,
    stock: 95,
  },
  // Hoodies
  {
    id: "hd-001",
    name: "Premium Fleece Hoodie",
    description:
      "Ultra-soft fleece interior with a modern silhouette. Features kangaroo pocket and adjustable drawstring hood.",
    price: 79.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Heather Gray", "Navy"],
    featured: true,
    stock: 120,
  },
  {
    id: "hd-002",
    name: "Heavyweight Champion Hoodie",
    description:
      "Built for durability with heavyweight cotton. Double-stitched seams and ribbed cuffs for lasting quality.",
    price: 89.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Forest Green", "Burgundy", "Stone"],
    featured: false,
    stock: 55,
  },
  {
    id: "hd-003",
    name: "Zip-Up Essential Hoodie",
    description:
      "Versatile full-zip design with split kangaroo pockets. Perfect layering piece for any season.",
    price: 74.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Slate Blue"],
    featured: true,
    stock: 88,
  },
  // Shorts
  {
    id: "sh-001",
    name: "Athletic Performance Shorts",
    description:
      "Lightweight and breathable with moisture-wicking technology. Built-in brief liner for comfort during workouts.",
    price: 44.99,
    category: "shorts",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    featured: true,
    stock: 100,
  },
  {
    id: "sh-002",
    name: "Classic Chino Shorts",
    description:
      "Tailored fit with a 7-inch inseam. Perfect for casual outings with a refined look.",
    price: 54.99,
    category: "shorts",
    image:
      "https://images.unsplash.com/photo-1617952385804-7b326fa0b291?w=600&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Navy", "Olive", "White"],
    featured: false,
    stock: 75,
  },
  {
    id: "sh-003",
    name: "Terry Cloth Lounge Shorts",
    description:
      "Ultimate comfort in premium terry fabric. Elastic waistband with drawstring for the perfect fit.",
    price: 49.99,
    category: "shorts",
    image:
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sand", "Sky Blue", "Coral"],
    featured: true,
    stock: 60,
  },
  // Caps
  {
    id: "cp-001",
    name: "Classic Baseball Cap",
    description:
      "Timeless 6-panel design with adjustable strap. Pre-curved brim with embroidered logo.",
    price: 24.99,
    category: "tshirt",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
    sizes: ["One Size"],
    colors: ["Black", "Navy", "White", "Khaki"],
    featured: true,
    stock: 200,
  },
];

export const mockOrders: Order[] = [
  {
    id: "ord-001",
    userId: "user-001",
    items: [
      {
        product: products[0],
        quantity: 2,
        size: "M",
        color: "Black",
      },
      {
        product: products[4],
        quantity: 1,
        size: "L",
        color: "Navy",
      },
    ],
    total: 139.97,
    status: "delivered",
    createdAt: "2024-01-15T10:30:00Z",
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "USA",
    },
  },
  {
    id: "ord-002",
    userId: "user-002",
    items: [
      {
        product: products[7],
        quantity: 1,
        size: "M",
        color: "Black",
      },
    ],
    total: 44.99,
    status: "processing",
    createdAt: "2024-01-18T14:22:00Z",
    shippingAddress: {
      name: "Jane Smith",
      address: "456 Oak Avenue",
      city: "Los Angeles",
      postalCode: "90001",
      country: "USA",
    },
  },
  {
    id: "ord-003",
    userId: "user-003",
    items: [
      {
        product: products[10],
        quantity: 3,
        size: "One Size",
        color: "Black",
      },
      {
        product: products[2],
        quantity: 1,
        size: "XL",
        color: "Cream",
      },
    ],
    total: 114.96,
    status: "shipped",
    createdAt: "2024-01-20T09:15:00Z",
    shippingAddress: {
      name: "Mike Johnson",
      address: "789 Pine Road",
      city: "Chicago",
      postalCode: "60601",
      country: "USA",
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery),
  );
}
