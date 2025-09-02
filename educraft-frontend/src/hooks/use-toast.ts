import { toast } from "sonner";

type ToastPayload =
  | string
  | {
      title: string;
      description?: string;
      variant?: "success" | "error" | "warning" | "info" | "loading";
    };

export const useToast = () => {
  const showToast = (payload: ToastPayload) => {
    if (typeof payload === "string") {
      toast(payload);
    } else {
      const { title, description, variant } = payload;

      if (variant && toast[variant]) {
        toast[variant](title, { description });
      } else {
        toast(title); // fallback to base toast
      }
    }
  };

  return { showToast };
};
