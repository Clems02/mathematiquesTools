"use client";

import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/navigation";

export const BackButton = (props: ButtonProps) => {
  const router = useRouter();
  return <Button type="submit" {...props} onClick={() => router.back()} />;
};
