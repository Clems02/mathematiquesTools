"use client";

import { getListPremiersIntervalle } from "@/src/lib/outils/listIntervalleDiviseurs";
import { emptySpace, formatNumberPrintSpace } from "@/src/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { listPremierSchema } from "./listePremier.schema";

type result = {
  number1: number;
  number2: number;
  list: number[];
};

export const ListPremierForm = () => {
  const [result, setResult] = useState<result | null>(null);
  const { register, handleSubmit, formState, setValue, setError, clearErrors } =
    useForm<listPremierSchema>({
      resolver: zodResolver(listPremierSchema),
    });

  const { errors } = formState;

  const onSubmit = ({ number1, number2 }: listPremierSchema) => {
    const nbr1 = Number(emptySpace(number1));
    const nbr2 = Number(emptySpace(number2));

    if (nbr1 >= nbr2) {
      console.log("ici");
      setError("root", {
        message: "Le nombre 1 doit être strictement inférieur au nombre 2.",
      });
      return;
    }

    const array = getListPremiersIntervalle(nbr1, nbr2);

    setResult({
      number1: nbr1,
      number2: nbr2,
      list: array,
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
        <Button type="submit">Obtenir la liste</Button>
      </Stack>
      {result && (
        <Stack spacing={3} pt={4}>
          <Typography textAlign={"center"} variant="h6">
            L`intervalle [{formatNumberPrintSpace(result.number1)};
            {formatNumberPrintSpace(result.number2)}] contient{" "}
            {formatNumberPrintSpace(result.list.length)} nombres premiers.
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
