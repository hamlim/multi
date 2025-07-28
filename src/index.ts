import { Command } from "@effect/cli";
import { NodeContext, NodeRuntime } from "@effect/platform-node";
import { Console, Effect } from "effect";
import { version } from "../package.json" with { type: "json" };
import { bootstrapCommand } from "./commands/bootstrap";
import { initCommand } from "./commands/init";

let cliApp = Command.make("multi", {}, () => {
  return Console.log("Welcome to the multi CLI");
}).pipe(Command.withSubcommands([initCommand, bootstrapCommand]));

let cli = Command.run(cliApp, {
  name: "multi",
  version,
});

Effect.suspend(() => cli(process.argv)).pipe(
  Effect.provide(NodeContext.layer),
  NodeRuntime.runMain,
);
