import "./index.css";

// 2) re-export component และ types
export { Stepper } from "./components/Stepper";
export type { Step, StepState } from "./components/Stepper";

// 3) re-export utility อื่นๆ (เช่น cn)
export { cn } from "./utils";
