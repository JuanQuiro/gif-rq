import React, { useEffect, useState } from "react";
import CardResultsExample from "./CardResultsExample";
import { Card } from "@nextui-org/react";

export const GifsComponent = () => {
  useEffect(() => {
    return () => {
      if (!localStorage.gifcache) {
        console.log("Cache creado");
        localStorage.gifcache = JSON.stringify({ hasExample: true });
      }
    };
  }, []);

  const [hasExample, setHasExample] = useState(() => {
    const cache = JSON.parse(localStorage.gifcache || "{}");
    return cache.hasExample ?? true;
  });

  return hasExample ? (
    <CardResultsExample setDeleteGifsComponent={() => setHasExample(false)} />
  ) : (
    <Card className="flex col-span-4 text-center min-w-min py-4 mt-5">
      No hay gifs
    </Card>
  );
};

export default GifsComponent;
