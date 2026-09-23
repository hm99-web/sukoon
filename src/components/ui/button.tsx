import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-colors duration-200 ease-gentle disabled:pointer-events-none disabled:opacity-55",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-lift hover:bg-primary-hover",
        // "sunny" confirm — bright yellow with dark text
        sunny:
          "bg-secondary text-secondary-foreground shadow-lift hover:bg-secondary-hover",
        secondary:
          "border border-line bg-surface text-ink shadow-soft hover:border-line-strong hover:bg-canvas",
        outline:
          "border border-primary/25 bg-primary-soft/40 text-primary-ink hover:bg-primary-soft",
        ghost: "text-ink hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-11 px-4 text-sm",
        md: "h-12 px-5 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
        icon: "h-11 w-11",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, block, loading, disabled, children, ...props },
    ref,
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, block }), className)}
        disabled={disabled || loading}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 480, damping: 28 }}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
