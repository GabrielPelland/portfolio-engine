import { Card } from "@heroui/react";

export function Vignette({name}: {name: string}) {
  return (<Card>
      <h1 className="text-black">{name}</h1>
  </Card>);
}