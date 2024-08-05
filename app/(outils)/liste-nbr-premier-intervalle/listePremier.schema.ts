import { isNumberInput } from "@/src/lib/utils";
import { z } from "zod";

export const listPremierSchema = z.object({
  number1: z.string().superRefine((value, ctx) => {
    try {
      isNumberInput(value);
    } catch (error) {
      if (error instanceof Error) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Nombre entier naturel requis",
        });
      }
    }
  }),
  number2: z.string().superRefine((value, ctx) => {
    try {
      isNumberInput(value);
    } catch (error) {
      if (error instanceof Error) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Nombre entier naturel requis",
        });
      }
    }
  }),
});

export type listPremierSchema = z.infer<typeof listPremierSchema>;
