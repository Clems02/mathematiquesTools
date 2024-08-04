"use client";

import { listDiviseurs } from "@/src/lib/outils/diviseursList";
import { formatNumberPrintSpace } from "@/src/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { nbrDiviseursSchema } from "./diviseursList.schema";

type result = {
  number: string;
  list: number[];
};

export const DiviseursListForm = () => {
  const [result, setResult] = useState<result | null>(null);
  const { register, handleSubmit, formState, setValue } =
    useForm<nbrDiviseursSchema>({
      resolver: zodResolver(nbrDiviseursSchema),
    });

  const { errors } = formState;

  const onSubmit = ({ number }: nbrDiviseursSchema) => {
    const liste = listDiviseurs(number);
    setResult({
      number,
      list: liste,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "600px" }}>
      <Stack
        spacing={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
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
        <Button type="submit">Obtenir liste</Button>
      </Stack>
      {result && (
        <Stack spacing={3} pt={4}>
          <Typography textAlign={"center"} variant="h6">
            Le nombre {formatNumberPrintSpace(Number(result.number))} a{" "}
            {result.list.length} diviseurs.
          </Typography>
          <Stack
            pb={1}
            direction={"row"}
            spacing={4}
            sx={{ overflowX: "auto", maxWidth: "100%" }}
          >
            {result.list.map((nbr) => (
              <Typography key={nbr} sx={{ whiteSpace: "nowrap" }}>
                {formatNumberPrintSpace(nbr)}
              </Typography>
            ))}
          </Stack>
        </Stack>
      )}
    </form>
  );
};
