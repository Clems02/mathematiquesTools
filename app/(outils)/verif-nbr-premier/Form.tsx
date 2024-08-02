"use client";

import { emptySpace, formatNumberPrintSpace } from "@/src/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { isPrime } from "mathjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { nbrPremierSchema } from "./nbrPremier.schema";

type VerifPremierType = {};

type resultType = {
  text: string;
  color: string;
};

export const VerifPremierForm = (props: VerifPremierType) => {
  const [result, setResult] = useState<resultType | null>(null);
  const { register, handleSubmit, formState, setValue } =
    useForm<nbrPremierSchema>({
      resolver: zodResolver(nbrPremierSchema),
    });

  const { errors } = formState;

  const onSubmit = ({ number }: nbrPremierSchema) => {
    const value = Number(emptySpace(number));
    const printValue = formatNumberPrintSpace(value);

    if (isPrime(value)) {
      setResult({
        text: `Le nombre ${printValue} est premier !`,
        color: "#2e7d32",
      });
    } else
      setResult({
        text: `Le nombre ${printValue} n'est pas premier...`,
        color: "#d32f2f",
      });
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
        <Button type="submit">Vérifier</Button>
      </Stack>
      {result && (
        <Typography
          variant="h6"
          sx={{ py: 3, fontWeight: 700 }}
          color={result.color}
        >
          {result.text}
        </Typography>
      )}
    </form>
  );
};
