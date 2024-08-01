import { ChangeEvent, useState } from "react";

export const useValue = () => {
  const [value, setValue] = useState<string | number>("");

  const changeValue = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };

  return {
    value,
    changeValue,
  };
};
