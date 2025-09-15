import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-medium",
        cta: "relative isolate z-0 overflow-hidden bg-gradient-cta text-accent-foreground shadow-cta font-semibold transform hover:scale-105 transition-bounce [*>*]:relative [*>*]:z-10 before:content-[''] before:absolute before:inset-0 before:bg-[#303030] before:rounded-[inherit] before:-z-10 before:translate-x-[-100%] before:translate-y-[100%] before:transition-transform before:duration-300 before:ease-out hover:before:translate-x-0 hover:before:translate-y-0",
        outline: "border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
        ghost: "relative overflow-hidden font-antonio rounded-full !bg-transparent bg-none hover:!bg-transparent border border-primary text-primary !shadow-none !transform-none transition-colors duration-400 ease-out before:content-[''] before:absolute before:inset-0 before:bg-primary before:rounded-[inherit] before:translate-x-[-100%] before:translate-y-[100%] before:transition-transform before:duration-200 before:ease-out before:-z-10 hover:before:translate-x-0 hover:before:translate-y-0 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-sm",
        md: "h-12 rounded-md px-6 text-base",
        lg: "h-14 rounded-lg px-8 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
