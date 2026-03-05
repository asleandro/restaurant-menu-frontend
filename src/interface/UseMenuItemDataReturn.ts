import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { MenuItemData } from "./MenuItemData";

interface UseMenuItemDataReturn {
  data: MenuItemData[] | undefined;
  isPending: boolean;
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
    data: mutation.mutate,
    isPending: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
}
