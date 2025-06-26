import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "icon" | "md";
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  asChild?: boolean;
}

function Button({
  children,
  size = "md",
  variant = "primary",
  asChild = false,
  className,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full text-center relative overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background";

  const sizes = {
    icon: "p-2 text-base",
    md: "py-2 px-6 text-base",
  };

  const variants = {
    primary:
      "text-white shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] hover:bg-[position:100%_center] active:bg-[position:100%_center]",
    secondary:
      "text-secondary border-2 border-secondary bg-transparent hover:bg-secondary active:bg-secondary hover:text-white active:text-white shadow-[0px_0px_2px_rgba(0,78,146,0.3),0px_0px_6px_rgba(0,78,146,0.2)] hover:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)]",
    tertiary:
      "text-secondary bg-transparent hover:bg-secondary/10 active:bg-secondary/10 transition-colors duration-200 hover:shadow-none",
  };

  const buttonClasses = cn(base, sizes[size], variants[variant], className);

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cn(buttonClasses, child.props.className),
      ...rest,
      ...child.props,
    });
  }

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}

export default Button;
