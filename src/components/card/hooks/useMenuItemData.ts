import axios from "axios";
import type { MenuItemData } from "../../../interface/MenuItemData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchMenuItemData = async (): Promise<MenuItemData[]> => {
  const response = await axios.get<MenuItemData[]>(`${API_URL}/menuItem`);
  return response.data;
};

export interface UseMenuItemDataReturn {
  data: MenuItemData[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function useMenuItemData() {
  const { data, isLoading, error } = useQuery<MenuItemData[]>({
    queryKey: ["menuItemData"],
    queryFn: fetchMenuItemData,
    retry: 2,
  });

  return {
    data,
    isLoading,
    error,
  };
}

export type UseMenuItemData = ReturnType<typeof useMenuItemData>;
