// src/components/Stepper/Stepper.tsx
import React from "react";

// src/utils/cn.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Stepper/Stepper.tsx
import { jsx, jsxs } from "react/jsx-runtime";
export {
  cn
};
