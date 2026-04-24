import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(n: number, digits = 2) {
  if (n === null || n === undefined || Number.isNaN(n)) return "-"
  const abs = Math.abs(n)
  if (abs >= 1000) return n.toFixed(0)
  if (abs >= 10) return n.toFixed(digits)
  if (abs >= 1) return n.toFixed(digits)
  return n.toFixed(Math.max(digits, 3))
}
