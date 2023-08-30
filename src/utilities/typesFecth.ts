import { opcion } from "../models/OpcionTypesInput";

export function determineFetchType(
  gifType: string,
  gifText: string
): { type: string; text: string } {
  const normalizedGifType = gifType.toLowerCase();

  for (const fetchType of opcion) {
    if (fetchType.label.toLowerCase() === normalizedGifType) {
      if (fetchType.value === "ID") {
        const idRegex = /'([^']+)'/;
        const idMatch = gifText.match(idRegex);
        if (idMatch) {
          const id = idMatch[1];
          return { type: fetchType.value, text: id };
        }
      } else {
        return { type: fetchType.value, text: gifText };
      }
    }
  }

  return { type: "Invalid fetch type", text: "" };
}
