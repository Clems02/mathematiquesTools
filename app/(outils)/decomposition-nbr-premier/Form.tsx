"use client";

import { formatFactors, primeFactors } from "@/src/lib/outils/decomposition";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { decompositionSchema } from "./decomposition.schema";

type DecompositionFormType = {};

export const DecompositionForm = (props: DecompositionFormType) => {
  const [result, setResult] = useState<string | null>("");
  const { register, handleSubmit, formState, setValue } =
    useForm<decompositionSchema>({
      resolver: zodResolver(decompositionSchema),
    });

  const { errors } = formState;

  const onSubmit = ({ number }: decompositionSchema) => {
    const resultServer = primeFactors(Number(number));

    setResult(`${number} = ${formatFactors(resultServer)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        <TextField
          label="Nombre"
          placeholder="125"
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number && errors.number.message}
          onChange={(e) => {
            setValue("number", e.target.value);
            setResult(null);
          }}
        />
        <Button type="submit">Décomposer</Button>
      </Stack>
      {result && (
        <Typography variant="h6" sx={{ py: 3, fontWeight: 700 }}>
          {result}
        </Typography>
      )}
    </form>
  );
};
