import { isValidEquation } from "@/src/lib/utils";
import { z } from "zod";

export const equationFormSchema = z.object({
  equation: z.string().superRefine((value, ctx) => {
    try {
      isValidEquation(value);
    } catch (error) {
      if (error instanceof Error) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: error.message,
        });
      }
    }
  }),
});

export type equationFormSchema = z.infer<typeof equationFormSchema>;
