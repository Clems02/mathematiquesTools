import { z } from "zod";

// export const nbrPremierSchema = z.object({
//   number: z.string().superRefine((value, ctx) => {
//     try {
//       isNumberInput(value);
//     } catch (error) {
//       if (error instanceof Error) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: "Nombre entier naturel requis",
//         });
//       }
//     }
//   }),
// });

// export type nbrPremierSchema = z.infer<typeof nbrPremierSchema>;

export const numberSchema = z.number();

export const arrayNbrMoyenneSchema = z.object({
  numbers: z.array(z.number().min(0, "Le nombre doit être positif")),
});

export type arrayNbrMoyenneSchema = z.infer<typeof arrayNbrMoyenneSchema>;
