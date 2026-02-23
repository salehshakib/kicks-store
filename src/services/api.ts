import { Product, Category } from "@/types";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const fetchProducts = async (
  categoryId?: number,
): Promise<Product[]> => {
  const url = categoryId
    ? `${BASE_URL}/categories/${categoryId}/products`
    : `${BASE_URL}/products`;
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
