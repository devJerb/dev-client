import { ReactNode } from "react";
import { cn } from "../../utils/util";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "error";
}

export function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium";

  const variantStyles = {
    default: "bg-gray-900 text-gray-100",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
}
