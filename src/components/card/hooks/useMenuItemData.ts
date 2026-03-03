import axios, { type AxiosPromise } from "axios";
import type { MenuItemData } from "../../../interface/MenuItemData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchMenuItemData = async (): AxiosPromise<MenuItemData[]> => {
  const response = axios.get(`${API_URL}/menuItem`);
  return response;
};

export function useMenuItemData() {
  try {
    const query = useQuery({
      queryKey: ["menuItemData"],
      queryFn: fetchMenuItemData,
      retry: 2,
    });
    return {
      data: query.data?.data,
      isLoading: query.isLoading,
      error: query.error,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro ao carregar menu: ${error.message}`);
    }
    throw error;
  }
}
