import { motion, type HTMLMotionProps } from "framer-motion";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookButtonProps
  extends Omit<HTMLMotionProps<"a">, "children" | "href" | "onClick">,
    VariantProps<typeof buttonVariants> {
  onBook: () => void;
  children?: React.ReactNode;
}

/**
 * "Book care" CTA. Rendered as a real link to `/?book=1` so that a tap made
 * before the JS bundle has hydrated (common on mobile — the page is static
 * HTML first) still lands the user in the booking flow via a full navigation.
 * Once hydrated, the click is intercepted and the view swaps in place.
 */
export function BookButton({
  className,
  variant,
  size,
  block,
  onBook,
  children,
  ...props
}: BookButtonProps) {
  return (
    <motion.a
      href="/?book=1"
      className={cn(buttonVariants({ variant, size, block }), className)}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 480, damping: 28 }}
      onClick={(e) => {
        // Plain left-click / tap → in-app swap. Modified clicks keep link semantics.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onBook();
      }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
