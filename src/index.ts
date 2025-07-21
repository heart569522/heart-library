import "./index.css";

import Stepper from "./components/Stepper";

// re-export component both as default and named
export default Stepper;
export { Stepper };
export type { Step, StepState } from "./components/Stepper";

// re-export utility (e.g. cn)
export { cn } from "./utils";

