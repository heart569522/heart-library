import { ClassValue } from 'clsx';

type Step = {
    id: string;
    title: string;
};
type StepState = "inactive" | "loading" | "active" | "completed";

declare function cn(...inputs: ClassValue[]): string;

export { type Step, type StepState, cn };
