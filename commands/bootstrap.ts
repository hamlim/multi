import { Args, Command } from "@effect/cli";
import { Console } from "effect";

export let bootstrapCommand = Command.make(
  "bootstrap",
  {
    name: Args.text({ name: "name" }).pipe(
      Args.withDescription("The name of the multi project"),
    ),
  },
  ({ name }) => {
    return Console.log(`Bootstrapping new multi-managed project${name}!`);
  },
).pipe(Command.withDescription("Initialize a new multi project."));
