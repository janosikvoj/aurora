import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import modules from "../data/modules"
import { Module } from "../types/ModulesTypes"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getModuleBySlug(slug: string, data = modules): Module {
  for (const module of data) {
    if (module.slug === slug) {
      return module;
    }
  }
  return data[0];
}

export function isJsonString(str: string): boolean {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

export function randomIntegerInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}