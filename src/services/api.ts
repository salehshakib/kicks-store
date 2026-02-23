import { Product, Category } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export interface FetchProductsOptions {
  categoryId?: number;
  offset?: number;
  limit?: number;
}

export const fetchProducts = async (
  options: FetchProductsOptions = {},
): Promise<Product[]> => {
  const { categoryId, offset = 0, limit = 10 } = options;

  let url: string;
  if (categoryId) {
    url = `${BASE_URL}/categories/${categoryId}/products?offset=${offset}&limit=${limit}`;
  } else {
    url = `${BASE_URL}/products?offset=${offset}&limit=${limit}`;
  }

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
