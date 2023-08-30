import React, { useState } from "react";
import { Input } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { opcion } from "../models/OpcionTypesInput";
import { useGetGif } from "../hooks/useGif";

export default function InputComponent() {
  const [selectedOption, setSelectedOption] = useState(new Set(["stikers"]));
  const [inputText, setInputText] = useState("");
  const Gif = useGetGif();

  const handleSubmitInput = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(inputText);
      Gif.mutate({ text: inputText });
      console.log(Gif.data);
    }
  };

  const handleSubmitButton = () => {
    console.log(inputText);
    Gif.mutate({ text: inputText });
    console.log(Gif.data);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Select
          selectedKeys={selectedOption}
          label="Tipos de Gifs"
          placeholder="Seleccione un Gif"
          defaultSelectedKeys={["stikers"]}
          onSelectionChange={setSelectedOption}
          className="max-w-xs"
        >
          {opcion.map((opciones) => (
            <SelectItem key={opciones.value} value={opciones.value}>
              {opciones.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          onKeyPress={handleSubmitInput}
          type="string"
          variant={"underlined"}
          label="Texto Solicitado"
          isRequired={true}
          placeholder="Gatos tomando agua"
          value={inputText}
          onValueChange={setInputText}
        />
        <div className="flex items-center">
          <Button
            onClick={handleSubmitButton}
            className="bg-white text-black"
            variant="ghost"
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
