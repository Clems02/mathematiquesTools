"use client";

import { getPPCM } from "@/src/lib/outils/ppcm";
import { emptySpace, formatNumberPrintSpace } from "@/src/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { pgcdSchema } from "./pgcdSchema";

type result = {
  number1: number;
  number2: number;
  ppcm: number;
};

export const PGCDForm = () => {
  const [result, setResult] = useState<result | null>(null);
  const { register, handleSubmit, formState, setValue, setError, clearErrors } =
    useForm<pgcdSchema>({
      resolver: zodResolver(pgcdSchema),
    });

  const { errors } = formState;

  const onSubmit = ({ number1, number2 }: pgcdSchema) => {
    const nbr1 = Number(emptySpace(number1));
    const nbr2 = Number(emptySpace(number2));

    const ppcm = getPPCM(nbr1, nbr2);

    setResult({
      number1: nbr1,
      number2: nbr2,
      ppcm,
    });
  };

  const onChange = (value: string, type: any) => {
    setValue(type, value);
    setResult(null);
    if (errors) clearErrors("root");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "600px" }}>
      <Stack spacing={2} alignItems={"center"}>
        <Stack spacing={2} direction={"row"}>
          <TextField
            label="Nombre n°1"
            placeholder="13"
            {...register("number1")}
            error={!!errors.number1}
            helperText={errors.number1 && errors.number1.message}
            onChange={(e) => onChange(e.target.value, "number1")}
          />
          <TextField
            label="Nombre n°2"
            placeholder="245"
            {...register("number2")}
            error={!!errors.number2}
            helperText={errors.number2 && errors.number2.message}
            onChange={(e) => onChange(e.target.value, "number2")}
          />
        </Stack>
        {errors.root && (
          <Typography variant="h6" color={"error"}>
            {errors.root.message}
          </Typography>
        )}
        <Button type="submit">Obtenir le PPCM</Button>
      </Stack>
      {result && (
        <Stack pt={4}>
          <Typography textAlign={"center"} variant="h6">
            Le PPCM de {formatNumberPrintSpace(result.number1)} et{" "}
            {formatNumberPrintSpace(result.number2)} est{" "}
            {formatNumberPrintSpace(result.ppcm)}.
          </Typography>
        </Stack>
      )}
    </form>
  );
};
