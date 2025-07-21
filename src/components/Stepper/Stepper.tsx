import React from "react";
import cn from "../../utils/cn";


export type Step = {
  id: string;
  title: string;
};

export type StepState = "inactive" | "loading" | "active" | "completed";

type Props = {
  steps: Step[];
  activeIndex: number;
  direction?: "horizontal" | "vertical";
  getStepState?: (stepId: string, index: number) => StepState;
  renderIcon?: (stepId: string, state: StepState) => React.ReactNode;
};

function Stepper({
  steps,
  activeIndex,
  direction = "horizontal",
  getStepState,
  renderIcon,
}: Props) {
  const isVertical = direction === "vertical";

  const resolveState = (id: string, idx: number): StepState => {
    return (
      getStepState?.(id, idx) ??
      (idx < activeIndex
        ? "completed"
        : idx === activeIndex
          ? "active"
          : "inactive")
    );
  };

  return (
    <div className={cn("w-full", isVertical ? "flex-col" : "flex", "flex")}>
      {steps.map((step, idx) => {
        const state = resolveState(step.id, idx);
        const nextState =
          idx + 1 < steps.length
            ? resolveState(steps[idx + 1].id, idx + 1)
            : "inactive";

        return (
          <React.Fragment key={step.id}>
            {/* Step */}
            <div
              className={cn(
                "z-20 flex",
                isVertical
                  ? "flex-row items-center mb-0 space-x-2"
                  : "flex-col items-center mb-4"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2",
                  {
                    "bg-white border-zinc-200 text-zinc-400":
                      state === "inactive",
                    "bg-zinc-100 border-primary text-primary":
                      state === "loading",
                    "bg-zinc-200 border-primary text-primary":
                      state === "active",
                    "bg-primary border-primary text-white":
                      state === "completed",
                  }
                )}
              >
                {renderIcon?.(step.id, state)}
              </div>
              <span
                className={cn(
                  "text-xs font-semibold",
                  isVertical ? "ml-2" : "mt-2",
                  {
                    "text-zinc-400": state === "inactive",
                    "text-primary": state === "active" || state === "loading",
                    "text-primary font-semibold": state === "completed",
                  }
                )}
              >
                {step.title}
              </span>
            </div>

            {/* Line */}
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  isVertical ? `w-0.5 h-20 -my-5` : `h-0.5 flex-1 -mx-8`,
                  {
                    "bg-zinc-200": nextState === "inactive",
                    "bg-primary": nextState === "completed",
                    "bg-gradient-to-r from-primary/50 via-primary/80 to-primary/20 bg-[length:200%_100%] animate-shimmer":
                      nextState === "active" || nextState === "loading",
                  }
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export { Stepper };
export default Stepper;
