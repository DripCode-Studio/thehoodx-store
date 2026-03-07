import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import {
  LoginInput,
  SignupInput,
  AuthResponseSchema,
  CheckoutSessionSchema,
} from "@/lib/schema";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials: LoginInput) => {
      const { data } = await apiClient.post("/auth/login", credentials);
      return AuthResponseSchema.parse(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
}

export function useSignup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials: SignupInput) => {
      const { data } = await apiClient.post("/auth/signup", credentials);
      return AuthResponseSchema.parse(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data } = await apiClient.post("/auth/logout");
      return data;
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth", "me"], null); // clear local user cache
      queryClient.clear(); // option to clear all cache or just auth depending on preference
    },
  });
}

export function useCreateCheckoutSession() {
  return useMutation({
    mutationFn: async (items: any[]) => {
      const { data } = await apiClient.post("/checkout/create-session", {
        items,
      });
      return CheckoutSessionSchema.parse(data);
    },
  });
}
