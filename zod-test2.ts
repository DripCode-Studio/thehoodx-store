import { z } from "zod";

const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
});

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string().optional(),
  sizes: z.array(z.string()).optional(),
  colors: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  stock: z.number().optional(),
  categoryId: z.string().optional(),
  category: CategorySchema.optional(),
});

const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
  page: z.number().optional(),
  limit: z.number().optional(),
  total: z.number().optional(),
  totalPages: z.number().optional(),
  category: CategorySchema.optional(), // for get category products
});

const payload = {
    "products": [
        {
            "id": "508f613f-4fa3-4bbd-8e82-a81109d0ea74",
            "name": "Crew Socks 3-Pack",
            "description": "Premium cotton blend crew socks. Reinforced heel and toe for durability.",
            "price": 19.99,
            "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=600&fit=crop",
            "sizes": [
                "S/M",
                "L/XL"
            ],
            "colors": [
                "White",
                "Black",
                "Mixed"
            ],
            "featured": false,
            "stock": 200,
            "categoryId": "8103ec11-8c16-432d-aaba-25687dc03705",
            "createdAt": "2026-03-07T04:49:41.462Z",
            "updatedAt": "2026-03-07T04:49:41.462Z",
            "category": {
                "id": "8103ec11-8c16-432d-aaba-25687dc03705",
                "name": "Accessories",
                "slug": "accessories",
                "description": "Complete your look with premium accessories.",
                "image": "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=600&h=400&fit=crop",
                "createdAt": "2026-03-07T04:49:41.435Z",
                "updatedAt": "2026-03-07T04:49:41.435Z"
            }
        }
    ]
};

try {
  ProductsResponseSchema.parse(payload);
  console.log("Parse successful!");
} catch (e) {
  console.log("Parse failed!");
  console.error(JSON.stringify(e, null, 2));
}
