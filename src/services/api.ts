import { Product, Category } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export interface FetchProductsOptions {
  categoryId?: number;
  offset?: number;
  limit?: number;
  title?: string;
  priceMin?: number;
  priceMax?: number;
}

export const fetchProducts = async (
  options: FetchProductsOptions = {},
): Promise<Product[]> => {
  const {
    categoryId,
    offset = 0,
    limit = 10,
    title,
    priceMin,
    priceMax,
  } = options;

  const params = new URLSearchParams();
  params.set("offset", String(offset));
  params.set("limit", String(limit));
  if (categoryId) params.set("categoryId", String(categoryId));
  if (title?.trim()) params.set("title", title.trim());
  if (priceMin !== undefined) params.set("price_min", String(priceMin));
  if (priceMax !== undefined) params.set("price_max", String(priceMax));

  const url = `${BASE_URL}/products?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${BASE_URL}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};
