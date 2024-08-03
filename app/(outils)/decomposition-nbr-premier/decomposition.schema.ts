import { isNumberInput } from "@/src/lib/utils";
import { z } from "zod";

export const decompositionSchema = z.object({
  number: z.string().superRefine((value, ctx) => {
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

export type decompositionSchema = z.infer<typeof decompositionSchema>;
