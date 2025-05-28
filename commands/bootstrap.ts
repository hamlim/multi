import { Args, Command } from "@effect/cli";
import { Console } from "effect";

export let bootstrapCommand = Command.make(
  "bootstrap",
  { name: Args.text({ name: "name" }) },
  ({ name }) => {
    return Console.log(`Bootstrapping new multi-managed project${name}!`);
  },
);
