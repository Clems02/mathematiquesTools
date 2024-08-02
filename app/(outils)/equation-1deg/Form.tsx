"use client";

import { resolveEquation } from "@/src/lib/outils/equation-1er-deg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { equationFormSchema } from "./equation.schema";

type EquationFormType = {};

export const EquationForm = (props: EquationFormType) => {
  const { register, handleSubmit, formState } = useForm<equationFormSchema>({
    resolver: zodResolver(equationFormSchema),
  });

  const { errors } = formState;

  const onSubmit = (form: equationFormSchema) => {
    const result = resolveEquation(form.equation);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        <TextField
          label="Equation"
          placeholder="ax + b = cx + d"
          {...register("equation")}
          error={!!errors.equation}
          helperText={errors.equation && errors.equation.message}
          defaultValue={"10x-5 = 0"}
          multiline
          rows={5}
        />
        <Button type="submit">Résoudre</Button>
      </Stack>
    </form>
  );
};
