"use client";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { format, fraction, median } from "mathjs";
import { useState } from "react";

export const MedianeForm = () => {
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [values, setValues] = useState<number[]>([]);
  const [currentValue, setCurrentValue] = useState("");

  const addValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    if (!goodCaract(currentValue)) {
      setError("Le format du nombre n'est pas bon");
      return;
    }

    setValues((oldArray) => [...oldArray, Number(currentValue)]);
    setCurrentValue("");
  };

  const deleteValue = (index: number) => {
    setValues((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = () => {
    let mediane = median(values);

    const hasDecimal = !Number.isInteger(mediane);

    if (hasDecimal) {
      const fractionPrint = fraction(mediane);
      const formattedFraction = format(fractionPrint, { fraction: "ratio" });
      mediane = formattedFraction as any;
    }
    setResult(mediane.toString());
  };

  const handleReset = () => {
    setResult("");
    setValues([]);
    setError("");
    setCurrentValue("");
  };

  return (
    <Stack spacing={3} justifyContent={"center"} alignItems={"center"}>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
      >
        {values.map((value, index) => (
          <TextField
            value={value}
            key={value - Math.random()}
            sx={{ maxWidth: 120 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => deleteValue(index)} edge="end">
                    <DeleteOutlineIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
        <TextField
          sx={{ maxWidth: 120 }}
          onKeyDown={addValue}
          value={currentValue}
          onChange={(e) => {
            if (error) setError("");
            setCurrentValue(e.target.value);
          }}
        />
      </Stack>
      {error && (
        <Typography variant="h6" color={"error"} align="center">
          {error}
        </Typography>
      )}
      <Stack direction={"row"} spacing={3}>
        <Button onClick={onSubmit}>Trouver</Button>
        {result && <Button onClick={handleReset}>Reset</Button>}
      </Stack>
      {result && (
        <Typography variant="h6" sx={{ py: 3 }}>
          La mediane est {result}
        </Typography>
      )}
    </Stack>
  );
};

const goodCaract = (caract: string) => {
  console.log({ caract });
  const regex = /^-?\d+(\,\d+)?$/;
  return regex.test(caract);
};
