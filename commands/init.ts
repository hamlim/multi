import { Args, Command } from "@effect/cli";
import { Console } from "effect";

export let initCommand = Command.make(
  "init",
  { name: Args.text({ name: "name" }) },
  ({ name }) => {
    return Console.log(`Initializing ${name}!`);
  },
);
