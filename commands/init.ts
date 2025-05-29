import { Args, Command } from "@effect/cli";
import { Console } from "effect";

export let initCommand = Command.make(
  "init",
  {
    name: Args.text({ name: "name" }).pipe(
      Args.withDescription("The name of the workspace within the project"),
    ),
  },
  ({ name }) => {
    return Console.log(`Initializing ${name}!`);
  },
).pipe(
  Command.withDescription(
    "Initialize a new workspace as part of a multi project.",
  ),
);
