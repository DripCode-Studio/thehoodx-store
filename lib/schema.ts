import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
export type User = z.infer<typeof UserSchema>;

export const AuthResponseSchema = z.object({
  user: UserSchema,
  accessToken: z.string(),
  message: z.string().optional(),
});

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
export type Category = z.infer<typeof CategorySchema>;

export const ProductSchema = z.object({
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
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
export type Product = z.infer<typeof ProductSchema>;

export const PaginationSchema = z.object({
  page: z.number(),
  limit: z.number(),
  total: z.number(),
  totalPages: z.number(),
});

export const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
  page: z.number().optional(),
  limit: z.number().optional(),
  total: z.number().optional(),
  totalPages: z.number().optional(),
  category: CategorySchema.optional(), // for get category products
});

export const ProductFiltersSchema = z.object({
  priceRange: z.object({
    min: z.number(),
    max: z.number(),
  }),
  sizes: z.array(z.string()),
  colors: z.array(z.string()),
  categories: z.array(CategorySchema),
});

export const CheckoutSessionSchema = z.object({
  sessionId: z.string().optional(),
  url: z.string().optional(),
  status: z.string().optional(),
  customerEmail: z.string().optional(),
});
export type CheckoutSession = z.infer<typeof CheckoutSessionSchema>;

export const LoginInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});
export type LoginInput = z.infer<typeof LoginInputSchema>;

export const SignupInputSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
export type SignupInput = z.infer<typeof SignupInputSchema>;
