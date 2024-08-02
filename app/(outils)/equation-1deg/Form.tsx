"use client";

import { resolveEquation } from "@/src/lib/outils/equation-1er-deg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { equationFormSchema } from "./equation.schema";

type EquationFormType = {};

export const EquationForm = (props: EquationFormType) => {
  const [result, setResult] = useState("");

  const { register, handleSubmit, formState } = useForm<equationFormSchema>({
    resolver: zodResolver(equationFormSchema),
  });

  const { errors } = formState;

  const onSubmit = (form: equationFormSchema) => {
    try {
      const result = resolveEquation(form.equation);
      setResult(result);
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message);
      }
    }
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
        />
        <Button type="submit">Résoudre</Button>
      </Stack>
      {result !== "" && (
        <Typography variant="h6" sx={{ py: 3, fontWeight: 700 }}>
          {result}
        </Typography>
      )}
    </form>
  );
};
