import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import modules from '../assets/modules.json';
import { Module } from '../types/ModulesTypes';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getModuleBySlug(slug: string, data = modules): Module {
  for (const module of data) {
    if (module.slug === slug) {
      return module;
    }
  }
  return data[0];
}
