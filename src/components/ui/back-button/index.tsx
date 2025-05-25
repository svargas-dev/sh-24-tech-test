"use client";

import { type ButtonHTMLAttributes } from "react";
import { startTransition } from "react";

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

export function BackButton({ className, onClick, ...props }: BackButtonProps) {
  const handleBack = () => {
    startTransition(() => {
      window.history.back();
    });
  }

  return (
    <button
      onClick={onClick || handleBack}
      className={`border rounded-2xl px-4 py-2 my-4 ${className}`}
      {...props}
    >
      &larr; Back
    </button>
  )
}