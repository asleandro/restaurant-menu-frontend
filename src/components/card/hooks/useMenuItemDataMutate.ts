import axios from "axios";
import type { MenuItemData } from "../../../interface/MenuItemData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postMenuItemData = async (
  menuItemData: Omit<MenuItemData, "id">,
): Promise<MenuItemData> => {
  const response = await axios.post<MenuItemData>(
    `${API_URL}/menuItem`,
    menuItemData,
  );
  return response.data;
};

interface UseMenuItemDataReturn {
  mutate: (data: Omit<MenuItemData, "id">) => void;
  isLoading: boolean;
  error: Error | null;
  isSuccess: boolean;
}

export function useMenuItemDataMutate(): UseMenuItemDataReturn {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postMenuItemData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItemData"] });
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
}

export type UseMenuItemDataMutateReturn = ReturnType<
  typeof useMenuItemDataMutate
>;
