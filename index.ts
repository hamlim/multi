import { Args, Command } from "@effect/cli";
import { NodeContext, NodeRuntime } from "@effect/platform-node";
import { Console, Effect } from "effect";

let nameArg = Args.text({ name: "name" });

let greetCommand = Command.make("greet", { name: nameArg }, ({ name }) => {
  return Console.log(`Hello, ${name}!`);
});

let cliApp = Command.make("multi", {}, () => {
  return Console.log("Welcome to the multi CLI");
}).pipe(Command.withSubcommands([greetCommand]));

let cli = Command.run(cliApp, {
  name: "multi",
  version: "0.0.1",
});

Effect.suspend(() => cli(process.argv)).pipe(
  Effect.provide(NodeContext.layer),
  NodeRuntime.runMain,
);
