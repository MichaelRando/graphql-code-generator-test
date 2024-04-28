import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: ["./moduleFile.ts"],
  require: ["ts-node/register"],
  generates: {
    schema: defineConfig(),
  },
};

export default config;
